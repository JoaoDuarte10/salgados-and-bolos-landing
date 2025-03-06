
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bakery-cream p-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-9xl font-bold text-bakery-brown mb-4">404</h1>
        <p className="text-xl font-medium mb-6">Oops! Página não encontrada</p>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-bakery-brown text-bakery-cream rounded-full font-medium shadow-sm hover:shadow-md transition-all hover:bg-opacity-90"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
