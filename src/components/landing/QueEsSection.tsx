import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, TrendingUp } from "lucide-react";

const QueEsSection = () => {
  const features = [
    {
      icon: Scale,
      title: "Simulaciones realistas",
      description: "Basadas en casos jurídicos reales con documentación completa",
    },
    {
      icon: Users,
      title: "Roles configurables",
      description: "Practica como defensa, acusación o tribunal según tus necesidades",
    },
    {
      icon: TrendingUp,
      title: "Feedback estructurado",
      description: "Obtén informes detallados de desempeño tras cada sesión",
    },
  ];

  return (
    <section id="producto" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">¿Qué es LitigIA?</h2>
          <p className="text-xl text-muted-foreground">
            Un simulador de juicios con IA que permite practicar vistas orales completas
            en un entorno controlado y con feedback profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover-lift border-border/50 bg-card/50 backdrop-blur transition-all hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueEsSection;
