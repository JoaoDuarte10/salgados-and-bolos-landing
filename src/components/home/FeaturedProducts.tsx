
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { images } from "@/assets/images";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'savory' | 'sweets'>('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Coxinha de Frango",
      price: "R$ 6,50",
      category: "Salgados",
      description: "Massa macia recheada com frango desfiado temperado.",
      image: images.products.savory1,
      type: "savory"
    },
    {
      id: 2,
      name: "Bolo de Chocolate",
      price: "R$ 58,00",
      category: "Bolos",
      description: "Massa fofinha com recheio cremoso de chocolate meio amargo.",
      image: images.products.cake1,
      type: "sweets"
    },
    {
      id: 3,
      name: "Empada de Palmito",
      price: "R$ 7,50",
      category: "Salgados",
      description: "Massa crocante com recheio de palmito e molho bechamel.",
      image: images.products.savory2,
      type: "savory"
    },
    {
      id: 4,
      name: "Bolo Red Velvet",
      price: "R$ 65,00",
      category: "Bolos",
      description: "Bolo aveludado com delicioso cream cheese.",
      image: images.products.cake2,
      type: "sweets"
    }
  ];
  
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.type === activeTab);
    
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
      id="products" 
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-bakery-beige opacity-30 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-bakery-cream opacity-50 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-bakery-beige text-bakery-brown rounded-full mb-4 tracking-wider">
            NOSSOS PRODUTOS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Delicias artesanais para todos os momentos
          </h2>
          <p className="text-muted-foreground">
            Cada produto é preparado com ingredientes selecionados e seguindo receitas tradicionais
            que conquistam paladares há gerações.
          </p>
        </div>
        
        <div className={cn(
          "flex justify-center mb-12 transition-all duration-1000 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex bg-bakery-beige bg-opacity-50 p-1 rounded-full">
            <button
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition-all",
                activeTab === 'all' 
                  ? "bg-white text-bakery-brown shadow-sm" 
                  : "text-muted-foreground hover:text-bakery-brown"
              )}
              onClick={() => setActiveTab('all')}
            >
              Todos
            </button>
            <button
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition-all",
                activeTab === 'savory' 
                  ? "bg-white text-bakery-brown shadow-sm" 
                  : "text-muted-foreground hover:text-bakery-brown"
              )}
              onClick={() => setActiveTab('savory')}
            >
              Salgados
            </button>
            <button
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition-all",
                activeTab === 'sweets' 
                  ? "bg-white text-bakery-brown shadow-sm" 
                  : "text-muted-foreground hover:text-bakery-brown"
              )}
              onClick={() => setActiveTab('sweets')}
            >
              Doces e Bolos
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={cn(
                "transition-all duration-1000",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12",
                { "delay-300": index === 0 },
                { "delay-400": index === 1 },
                { "delay-500": index === 2 },
                { "delay-600": index === 3 }
              )}
            >
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
                description={product.description}
              />
            </div>
          ))}
        </div>
        
        <div className={cn(
          "text-center mt-12 transition-all duration-1000 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <a 
            href="#" 
            className="inline-flex items-center text-bakery-brown hover:text-bakery-brown/80 font-medium transition-colors"
          >
            Ver todos os produtos
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
