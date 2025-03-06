
import { Facebook, Instagram, Twitter } from "lucide-react";
import { images } from "@/assets/images";

const Footer = () => {
  return (
    <footer className="bg-bakery-cream pt-16 pb-8 border-t border-bakery-beige">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 overflow-hidden rounded-full mr-3">
                <img 
                  src={images.logo} 
                  alt="Delícias da Casa"
                  className="h-full w-full object-cover" 
                />
              </div>
              <h2 className="font-serif text-xl font-medium text-bakery-brown">
                Delícias da Casa
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Sabores únicos feitos com amor e tradição para todos os momentos especiais.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full bg-bakery-beige text-bakery-brown hover:bg-bakery-tan hover:text-bakery-cream transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full bg-bakery-beige text-bakery-brown hover:bg-bakery-tan hover:text-bakery-cream transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full bg-bakery-beige text-bakery-brown hover:bg-bakery-tan hover:text-bakery-cream transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium text-bakery-brown mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-foreground hover:text-bakery-brown transition-colors">Início</a>
              </li>
              <li>
                <a href="#products" className="text-sm text-foreground hover:text-bakery-brown transition-colors">Produtos</a>
              </li>
              <li>
                <a href="#about" className="text-sm text-foreground hover:text-bakery-brown transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-foreground hover:text-bakery-brown transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium text-bakery-brown mb-4">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-foreground hover:text-bakery-brown transition-colors">Salgados</a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground hover:text-bakery-brown transition-colors">Doces</a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground hover:text-bakery-brown transition-colors">Bolos</a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground hover:text-bakery-brown transition-colors">Especiais</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="font-serif text-lg font-medium text-bakery-brown mb-4">Contato</h3>
            <address className="not-italic">
              <p className="text-sm text-foreground mb-2">Rua das Delícias, 123</p>
              <p className="text-sm text-foreground mb-2">São Paulo, SP</p>
              <p className="text-sm text-foreground mb-2">contato@deliciasdacasa.com</p>
              <p className="text-sm text-foreground">(11) 99999-9999</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-bakery-beige text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Delícias da Casa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
