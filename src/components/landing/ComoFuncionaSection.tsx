import { Card, CardContent } from "@/components/ui/card";
import { FileText, Upload, Play, BarChart } from "lucide-react";

const ComoFuncionaSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Selecciona el tipo de juicio",
      description: "Elige entre Penal, Civil, Laboral, Contencioso u Oposiciones",
      number: "01",
    },
    {
      icon: Upload,
      title: "Sube la documentación",
      description: "Carga los documentos del caso para contextualizar la simulación",
      number: "02",
    },
    {
      icon: Play,
      title: "Ejecuta la simulación",
      description: "Interactúa con la IA en una vista oral realista y estructurada",
      number: "03",
    },
    {
      icon: BarChart,
      title: "Obtén tu informe",
      description: "Recibe feedback detallado sobre tu desempeño y áreas de mejora",
      number: "04",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Cómo funciona</h2>
          <p className="text-xl text-muted-foreground">
            Cuatro pasos sencillos para comenzar a entrenar tus habilidades jurídicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-border/50 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">
                {step.number}
              </div>
              <CardContent className="p-6 space-y-4 relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary">{step.number}</div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
