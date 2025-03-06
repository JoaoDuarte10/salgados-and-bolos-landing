
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
  description: string;
  className?: string;
}

const ProductCard = ({ image, name, price, category, description, className }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg bg-white transition-all duration-500",
        "shadow-sm hover:shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      
      <div className="absolute top-3 left-3">
        <span className="bg-bakery-cream bg-opacity-90 text-bakery-brown text-xs font-medium px-2.5 py-1 rounded">
          {category}
        </span>
      </div>
      
      <div className="p-4 pb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-serif text-lg font-medium text-bakery-choco">{name}</h3>
          <p className="font-medium text-bakery-brown">{price}</p>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        
        <div className={cn(
          "mt-4 overflow-hidden transition-all duration-300",
          isHovered ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
        )}>
          <button className="w-full py-2 text-sm font-medium text-bakery-cream bg-bakery-brown rounded hover:bg-opacity-90 transition-colors">
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
