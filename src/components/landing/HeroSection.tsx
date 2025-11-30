import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Fondo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary-glow animate-slide-in">
            <Sparkles className="w-4 h-4" />
            Tecnología de IA aplicada al derecho
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Simulador de juicios con IA para el mundo jurídico
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Entrena audiencias orales y estrategias procesales en un entorno seguro y evaluable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/login">
              <Button size="lg" className="group hover-glow">
                Probar simulación
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline">
                Solicitar demo
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 max-w-2xl mx-auto text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">+100 simulaciones</p>
              <p>creadas en fase beta</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Diseñado para</p>
              <p>universidades y despachos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
