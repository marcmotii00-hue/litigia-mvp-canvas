import { supabase } from "@/integrations/supabase/client";
import { Simulacion, NuevaSimulacion } from "@/types/simulacion";

export const createSimulacion = async (data: NuevaSimulacion): Promise<{ data: Simulacion | null; error: any }> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { data: null, error: new Error("Usuario no autenticado") };
  }

  const { data: simulacion, error } = await supabase
    .from("simulaciones")
    .insert({
      user_id: user.id,
      titulo_caso: data.titulo_caso,
      tipo_juicio: data.tipo_juicio,
      rol: data.rol,
      nivel: data.nivel,
      estado: "pendiente",
      idioma: data.idioma || "Español",
      documentos_path: data.documentos_path || [],
    })
    .select()
    .single();

  return { data: simulacion as Simulacion | null, error };
};

export const getSimulaciones = async (): Promise<{ data: Simulacion[] | null; error: any }> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { data: null, error: new Error("Usuario no autenticado") };
  }

  const { data, error } = await supabase
    .from("simulaciones")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return { data: data as Simulacion[] | null, error };
};

export const getSimulacionById = async (id: string): Promise<{ data: Simulacion | null; error: any }> => {
  const { data, error } = await supabase
    .from("simulaciones")
    .select("*")
    .eq("id", id)
    .single();

  return { data: data as Simulacion | null, error };
};

export const updateSimulacion = async (id: string, updates: Partial<Simulacion>): Promise<{ error: any }> => {
  const { error } = await supabase
    .from("simulaciones")
    .update(updates)
    .eq("id", id);

  return { error };
};

export const uploadDocument = async (file: File, userId: string): Promise<{ path: string | null; error: any }> => {
  const fileName = `${userId}/${Date.now()}_${file.name}`;
  
  const { data, error } = await supabase.storage
    .from("case-documents")
    .upload(fileName, file);

  if (error) {
    return { path: null, error };
  }

  return { path: data.path, error: null };
};

export const getDocumentUrl = (path: string): string => {
  const { data } = supabase.storage
    .from("case-documents")
    .getPublicUrl(path);

  return data.publicUrl;
};
