import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, FileText, History, Settings } from "lucide-react";

const SimuladorPreviewSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Cómo se ve el simulador</h2>
          <p className="text-xl text-muted-foreground">
            Panel sencillo para crear simulaciones, revisar historial y gestionar ajustes
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-card">
                {/* Mock del dashboard */}
                <div className="flex">
                  {/* Sidebar simulado */}
                  <div className="w-64 bg-sidebar border-r border-sidebar-border p-6 space-y-4 hidden md:block">
                    <div className="text-xl font-bold gradient-text">LitigIA</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
                        <LayoutDashboard className="w-4 h-4" />
                        <span className="text-sm">Nueva simulación</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground/60">
                        <History className="w-4 h-4" />
                        <span className="text-sm">Historial</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground/60">
                        <Settings className="w-4 h-4" />
                        <span className="text-sm">Ajustes</span>
                      </div>
                    </div>
                  </div>

                  {/* Área principal simulada */}
                  <div className="flex-1 p-8 space-y-6 min-h-[500px]">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Crear nueva simulación</h3>
                      <p className="text-muted-foreground">Configura los parámetros de tu caso</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-border/30">
                        <CardContent className="p-6">
                          <div className="space-y-3">
                            <div className="h-4 bg-muted rounded w-24" />
                            <div className="h-10 bg-muted/50 rounded" />
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-border/30">
                        <CardContent className="p-6">
                          <div className="space-y-3">
                            <div className="h-4 bg-muted rounded w-32" />
                            <div className="h-10 bg-muted/50 rounded" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="border-border/30">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <FileText className="w-8 h-8 text-muted-foreground" />
                          <div className="space-y-2 flex-1">
                            <div className="h-4 bg-muted rounded w-48" />
                            <div className="h-3 bg-muted/50 rounded w-full max-w-md" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="h-12 bg-primary/20 rounded-lg" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SimuladorPreviewSection;
