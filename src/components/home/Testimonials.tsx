
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import TestimonialCard from "@/components/ui/TestimonialCard";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      id: 1,
      quote: "Os salgados são simplesmente deliciosos! Sempre faço pedidos para eventos familiares e todos adoram.",
      author: "Maria Silva",
      role: "Cliente desde 2018"
    },
    {
      id: 2,
      quote: "O bolo de chocolate é o melhor que já provei. Textura perfeita e sabor incrível. Nunca decepciona!",
      author: "João Pereira",
      role: "Cliente desde 2020"
    },
    {
      id: 3,
      quote: "Encomendei para o aniversário da empresa e foi um sucesso. Atendimento impecável e produtos de qualidade.",
      author: "Ana Rodrigues",
      role: "Cliente desde 2019"
    }
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
      id="testimonials" 
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bakery-beige opacity-30 translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-bakery-beige text-bakery-brown rounded-full mb-4 tracking-wider">
            DEPOIMENTOS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground">
            A opinião de quem já experimentou nossas delícias é o nosso maior reconhecimento.
            Veja o que nossos clientes têm a dizer sobre nossos produtos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={cn(
                "transition-all duration-1000",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12",
                { "delay-100": index === 0 },
                { "delay-300": index === 1 },
                { "delay-500": index === 2 }
              )}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-16 text-center transition-all duration-1000 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-lg font-medium mb-4">
            Junte-se aos nossos clientes satisfeitos!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-bakery-brown text-bakery-cream rounded-full font-medium shadow-sm hover:shadow-md transition-all hover:bg-opacity-90"
          >
            Faça seu pedido
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
