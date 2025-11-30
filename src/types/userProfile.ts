export interface UserProfile {
  id: string;
  nombre: string;
  apellidos: string;
  tipo_usuario: "Estudiante" | "Profesor" | "Despacho" | "Otro";
  idioma: string;
  created_at: string;
  updated_at: string;
}
