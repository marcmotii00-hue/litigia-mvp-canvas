import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "@/lib/authApi";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle2 } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Por favor ingresa tu email");
      return;
    }

    setLoading(true);

    const { error: resetError } = await resetPassword(email);

    setLoading(false);

    if (resetError) {
      setError("Error al enviar el correo. Intenta nuevamente.");
      return;
    }

    setSuccess(true);
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Recupera tu contraseña"
        description="Te enviaremos un enlace para restablecer tu contraseña"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>
                Si el correo existe en LitigIA, te enviaremos un enlace para restablecer tu contraseña.
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading || success}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading || success}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Enviar enlace de recuperación
          </Button>

          <div className="text-sm text-center text-muted-foreground">
            <Link to="/login" className="text-primary hover:underline">
              Volver al inicio de sesión
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default ForgotPassword;
