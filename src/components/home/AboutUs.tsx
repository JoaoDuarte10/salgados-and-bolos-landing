
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { images } from "@/assets/images";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const benefits = [
    "Ingredientes frescos e selecionados",
    "Receitas tradicionais de família",
    "Produção artesanal",
    "Sabor único e inconfundível"
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-bakery-cream"
      style={{ 
        backgroundImage: `url(${images.patterns.dots})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-bakery-brown rounded-full mb-4 tracking-wider">
                SOBRE NÓS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                Tradição e qualidade <br />
                em cada mordida
              </h2>
              <p className="text-muted-foreground mb-6">
                Desde 2010, a Delícias da Casa se dedica a criar salgados e bolos artesanais que levam sabor e alegria para momentos especiais. Nossa história começou na cozinha de casa, com receitas tradicionais de família passadas por gerações.
              </p>
              <p className="text-muted-foreground mb-8">
                Hoje, mantemos o mesmo cuidado e amor na produção, usando apenas ingredientes selecionados e técnicas artesanais para garantir o sabor único que nos tornou conhecidos.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index}
                    className={cn(
                      "flex items-start transition-all duration-1000",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
                      { "delay-100": index === 0 },
                      { "delay-200": index === 1 },
                      { "delay-300": index === 2 },
                      { "delay-400": index === 3 }
                    )}
                  >
                    <span className="flex-shrink-0 h-5 w-5 bg-bakery-tan rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 bg-bakery-brown text-bakery-cream rounded-full font-medium shadow-sm hover:shadow-md transition-all hover:bg-opacity-90 mt-2 transition-all duration-1000 delay-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                Fale conosco
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div 
              className={cn(
                "aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
              )}
            >
              <img 
                src={images.about} 
                alt="Nossa história" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Decorative elements */}
            <div 
              className={cn(
                "absolute top-8 -left-6 h-24 w-24 bg-bakery-beige rounded-full transition-all duration-1000 delay-300",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              )}
            ></div>
            <div 
              className={cn(
                "absolute -bottom-10 -right-10 h-36 w-36 bg-white bg-opacity-60 backdrop-blur-sm rounded-full shadow-sm transition-all duration-1000 delay-500",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              )}
            >
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-sm text-bakery-brown font-medium">Desde</p>
                  <p className="font-serif text-3xl text-bakery-brown font-medium">2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
