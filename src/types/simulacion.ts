export interface Simulacion {
  id: string;
  user_id: string;
  titulo_caso: string;
  tipo_juicio: "Penal" | "Civil" | "Laboral" | "Contencioso" | "Oposiciones";
  rol: "Defensa" | "Acusación" | "Tribunal";
  nivel: "Grado" | "Máster" | "Oposición" | "Formación interna";
  estado: "pendiente" | "en curso" | "finalizado";
  idioma: string;
  resumen_resultado?: string;
  documentos_path: string[];
  created_at: string;
  updated_at: string;
}

export interface NuevaSimulacion {
  titulo_caso: string;
  tipo_juicio: "Penal" | "Civil" | "Laboral" | "Contencioso" | "Oposiciones";
  rol: "Defensa" | "Acusación" | "Tribunal";
  nivel: "Grado" | "Máster" | "Oposición" | "Formación interna";
  idioma?: string;
  documentos_path?: string[];
}
