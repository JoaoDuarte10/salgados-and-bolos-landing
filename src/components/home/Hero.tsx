
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { images } from "@/assets/images";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
      style={{ 
        backgroundImage: `url(${images.patterns.texture})`,
        backgroundSize: 'cover'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-16 lg:py-24">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div 
            className={cn(
              "transition-all duration-1000 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-bakery-beige text-bakery-brown rounded-full mb-6 tracking-wider">
              DELÍCIAS ARTESANAIS
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              Salgados e Bolos <br />
              <span className="text-bakery-brown">feitos com amor</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Descubra o sabor único dos nossos produtos artesanais. 
              Perfeitos para festas, eventos ou para adoçar o seu dia a dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-6 py-3 bg-bakery-brown text-bakery-cream rounded-full font-medium shadow-sm hover:shadow-md transition-all hover:bg-opacity-90"
              >
                Ver produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-bakery-brown text-bakery-brown rounded-full font-medium hover:bg-bakery-beige transition-all"
              >
                Fazer pedido
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative order-1 lg:order-2">
          <div 
            className={cn(
              "aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-full transition-all duration-1000",
              isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-xl"
            )}
          >
            <img 
              src={images.hero} 
              alt="Delícias artesanais" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Decorative elements */}
          <div 
            className={cn(
              "absolute h-32 w-32 bg-bakery-cream rounded-full -bottom-6 -left-6 transition-all duration-1000 delay-300 shadow-sm",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          ></div>
          <div 
            className={cn(
              "absolute h-16 w-16 bg-bakery-beige rounded-full top-12 -right-4 transition-all duration-1000 delay-500 shadow-sm",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
