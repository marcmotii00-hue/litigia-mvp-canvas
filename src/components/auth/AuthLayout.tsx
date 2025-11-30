import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">LitigIA</h1>
          <p className="text-muted-foreground">Simulador de juicios con IA</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
