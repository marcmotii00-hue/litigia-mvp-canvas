-- Crear tabla de perfiles de usuario
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nombre TEXT,
  apellidos TEXT,
  tipo_usuario TEXT CHECK (tipo_usuario IN ('Estudiante', 'Profesor', 'Despacho', 'Otro')),
  idioma TEXT DEFAULT 'Español',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS en profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles: los usuarios pueden ver y editar su propio perfil
CREATE POLICY "Users can view own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Crear tabla de simulaciones
CREATE TABLE IF NOT EXISTS public.simulaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  titulo_caso TEXT NOT NULL,
  tipo_juicio TEXT NOT NULL CHECK (tipo_juicio IN ('Penal', 'Civil', 'Laboral', 'Contencioso', 'Oposiciones')),
  rol TEXT NOT NULL CHECK (rol IN ('Defensa', 'Acusación', 'Tribunal')),
  nivel TEXT NOT NULL CHECK (nivel IN ('Grado', 'Máster', 'Oposición', 'Formación interna')),
  estado TEXT DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'en curso', 'finalizado')),
  idioma TEXT DEFAULT 'Español',
  resumen_resultado TEXT,
  documentos_path TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS en simulaciones
ALTER TABLE public.simulaciones ENABLE ROW LEVEL SECURITY;

-- Políticas para simulaciones: los usuarios solo pueden ver y gestionar sus propias simulaciones
CREATE POLICY "Users can view own simulaciones"
  ON public.simulaciones
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own simulaciones"
  ON public.simulaciones
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own simulaciones"
  ON public.simulaciones
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own simulaciones"
  ON public.simulaciones
  FOR DELETE
  USING (auth.uid() = user_id);

-- Crear tabla de solicitudes de demo
CREATE TABLE IF NOT EXISTS public.demo_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  tipo_organizacion TEXT NOT NULL,
  numero_usuarios TEXT,
  mensaje TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS en demo_requests (público para insertar)
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit demo request"
  ON public.demo_requests
  FOR INSERT
  WITH CHECK (true);

-- Función para actualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para actualizar updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_simulaciones_updated_at
  BEFORE UPDATE ON public.simulaciones
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Función trigger para crear perfil automáticamente al registrarse
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, nombre, apellidos)
  VALUES (NEW.id, '', '');
  RETURN NEW;
END;
$$;

-- Trigger para crear perfil al registrarse
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Crear bucket para documentos de casos
INSERT INTO storage.buckets (id, name, public)
VALUES ('case-documents', 'case-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Políticas de storage: los usuarios pueden gestionar sus propios documentos
CREATE POLICY "Users can upload own documents"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'case-documents' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can view own documents"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'case-documents' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can delete own documents"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'case-documents' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );