import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import RestorePassword from "./pages/RestorePassword";
import Demo from "./pages/Demo";
import AppLayout from "./pages/AppLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/restore-password" element={<RestorePassword />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<div className="p-8">Nueva Simulación (próximamente)</div>} />
            <Route path="historial" element={<div className="p-8">Historial (próximamente)</div>} />
            <Route path="ajustes" element={<div className="p-8">Ajustes (próximamente)</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
