import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          {/* Fondo con degradado */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl -z-10" />
          
          <div className="space-y-4 py-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              ¿Listo para probar LitigIA?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Únete a universidades y despachos que ya están entrenando con IA
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo">
              <Button size="lg" className="group hover-glow">
                Solicitar demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Acceder al simulador
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
