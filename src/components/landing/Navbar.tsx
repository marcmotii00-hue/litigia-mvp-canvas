import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            LitigIA
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#producto" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Producto
            </a>
            <a href="#como-funciona" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Cómo funciona
            </a>
            <a href="#clientes" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Clientes
            </a>
            <a href="#contacto" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>

          <Link to="/login">
            <Button variant="default" size="sm">
              Acceder
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
