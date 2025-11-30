import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Target } from "lucide-react";

const ParaQuienSection = () => {
  const segments = [
    {
      icon: GraduationCap,
      title: "Universidades y escuelas",
      subtitle: "Práctica jurídica de excelencia",
      benefits: [
        "Complemento ideal para la formación práctica",
        "Evaluación objetiva del desempeño estudiantil",
        "Casos adaptados al temario académico",
      ],
    },
    {
      icon: Briefcase,
      title: "Despachos y boutiques",
      subtitle: "Formación interna continua",
      benefits: [
        "Entrena a tu equipo en casos complejos",
        "Reduce riesgos antes de juicios reales",
        "Identifica áreas de mejora específicas",
      ],
    },
    {
      icon: Target,
      title: "Opositores",
      subtitle: "Preparación especializada",
      benefits: [
        "Simula exámenes orales de oposiciones",
        "Practica en cualquier momento y lugar",
        "Feedback personalizado e inmediato",
      ],
    },
  ];

  return (
    <section id="clientes" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">¿Para quién es LitigIA?</h2>
          <p className="text-xl text-muted-foreground">
            Diseñado para profesionales y estudiantes del mundo jurídico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {segments.map((segment, index) => (
            <Card
              key={index}
              className="border-border/50 hover-lift hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <segment.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{segment.title}</h3>
                  <p className="text-primary text-sm">{segment.subtitle}</p>
                </div>
                <ul className="space-y-3">
                  {segment.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParaQuienSection;
