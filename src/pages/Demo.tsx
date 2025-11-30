import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

const Demo = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipo_organizacion: "",
    numero_usuarios: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.nombre || !formData.email || !formData.tipo_organizacion) {
      setError("Por favor completa todos los campos obligatorios");
      return;
    }

    setLoading(true);

    const { error: insertError } = await supabase
      .from("demo_requests")
      .insert([formData]);

    setLoading(false);

    if (insertError) {
      setError("Error al enviar la solicitud. Intenta nuevamente.");
      return;
    }

    setSuccess(true);
    setFormData({
      nombre: "",
      email: "",
      tipo_organizacion: "",
      numero_usuarios: "",
      mensaje: "",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <Card className="border-border/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl">Solicitar demo de LitigIA</CardTitle>
            <CardDescription>
              Estamos en fase beta. Completa el formulario y nos pondremos en contacto contigo
            </CardDescription>
          </CardHeader>
          <CardContent>
            {success ? (
              <Alert className="bg-primary/10 border-primary/20">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <AlertDescription className="text-base">
                  ¡Gracias por tu interés! Hemos recibido tu solicitud y te contactaremos pronto.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre y apellidos *</Label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tipo_organizacion">Tipo de organización *</Label>
                    <Select
                      value={formData.tipo_organizacion}
                      onValueChange={(value) => setFormData({ ...formData, tipo_organizacion: value })}
                      disabled={loading}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Universidad">Universidad</SelectItem>
                        <SelectItem value="Despacho">Despacho</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="numero_usuarios">Número aproximado de usuarios</Label>
                    <Input
                      id="numero_usuarios"
                      value={formData.numero_usuarios}
                      onChange={(e) => setFormData({ ...formData, numero_usuarios: e.target.value })}
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                  <Textarea
                    id="mensaje"
                    rows={4}
                    placeholder="Cuéntanos más sobre tus necesidades..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    disabled={loading}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Enviar solicitud de demo
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Demo;
