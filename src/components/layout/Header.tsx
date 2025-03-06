
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingBag } from "lucide-react";
import { images } from "@/assets/images";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Produtos", href: "#products" },
    { name: "Sobre", href: "#about" },
    { name: "Avaliações", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled 
          ? "py-3 bg-white bg-opacity-90 shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="z-50 flex items-center">
            <div className="h-10 w-10 overflow-hidden rounded-full mr-3">
              <img 
                src={images.logo} 
                alt="Delícias da Casa"
                className="h-full w-full object-cover" 
              />
            </div>
            <h1 className="font-serif text-xl font-medium text-bakery-brown">
              Delícias da Casa
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-medium text-foreground hover:text-bakery-brown transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-bakery-brown after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to action buttons */}
          <div className="hidden lg:flex items-center">
            <button className="text-sm font-medium text-foreground hover:text-bakery-brown mr-4 transition-colors">
              Entrar
            </button>
            <button className="flex items-center rounded-full bg-bakery-brown text-bakery-cream px-5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-opacity-90">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Fazer pedido
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden z-50 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center space-y-6 transition-all duration-300 lg:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xl font-medium text-foreground transition-colors hover:text-bakery-brown"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <div className="mt-6 flex flex-col items-center space-y-4">
          <button className="text-foreground hover:text-bakery-brown transition-colors">
            Entrar
          </button>
          <button className="flex items-center rounded-md bg-bakery-brown text-bakery-cream px-5 py-2 font-medium shadow-sm transition-colors hover:bg-opacity-90">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Fazer pedido
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
