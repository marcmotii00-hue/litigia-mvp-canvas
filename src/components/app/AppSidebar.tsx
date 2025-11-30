import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { signOut } from "@/lib/authApi";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Plus, History, Settings, LogOut } from "lucide-react";

const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("nueva");

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("historial")) setActiveTab("historial");
    else if (path.includes("ajustes")) setActiveTab("ajustes");
    else setActiveTab("nueva");
  }, [location]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const menuItems = [
    { id: "nueva", label: "Nueva simulación", icon: Plus, path: "/app" },
    { id: "historial", label: "Historial", icon: History, path: "/app/historial" },
    { id: "ajustes", label: "Ajustes", icon: Settings, path: "/app/ajustes" },
  ];

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent>
        <div className="p-6">
          <h1 className="text-2xl font-bold gradient-text">LitigIA</h1>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.path)}
                    isActive={activeTab === item.id}
                    className="w-full"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4">
          <SidebarMenuButton onClick={handleSignOut} className="w-full text-destructive">
            <LogOut className="w-4 h-4" />
            <span>Cerrar sesión</span>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
