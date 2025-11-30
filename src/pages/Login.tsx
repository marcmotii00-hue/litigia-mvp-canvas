import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { signIn } from "@/lib/authApi";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate("/app");
      }
    };
    checkUser();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    setLoading(true);

    const { error: signInError } = await signIn({ email, password });

    if (signInError) {
      setError("Email o contraseña incorrectos. Verifica tus datos.");
      setLoading(false);
      return;
    }

    navigate("/app");
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Inicia sesión en LitigIA"
        description="Accede a tu simulador de juicios con IA"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
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
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Iniciar sesión
          </Button>

          <div className="text-sm text-center space-y-2 text-muted-foreground">
            <div>
              <Link to="/register" className="text-primary hover:underline">
                Crear cuenta
              </Link>
            </div>
            <div>
              <Link to="/forgot-password" className="hover:underline">
                ¿Olvidaste la contraseña?
              </Link>
            </div>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;
