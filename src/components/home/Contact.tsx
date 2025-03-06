
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    // Show success message
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };
  
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
  
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Endereço",
      details: "Rua das Delícias, 123, São Paulo, SP"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      details: "(11) 99999-9999"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "contato@deliciasdacasa.com"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horário",
      details: "Seg - Sáb: 8h às 19h"
    }
  ];
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-bakery-cream relative overflow-hidden"
    >
      <div className="container-custom">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-bakery-brown rounded-full mb-4 tracking-wider">
            CONTATO
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-muted-foreground">
            Estamos à disposição para tirar suas dúvidas, receber seus pedidos e ouvir suas sugestões.
            Preencha o formulário abaixo ou use um de nossos canais de atendimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={cn(
            "bg-white rounded-2xl p-8 shadow-sm transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <h3 className="font-serif text-2xl font-medium mb-6">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-bakery-beige focus:outline-none focus:ring-2 focus:ring-bakery-tan focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-bakery-beige focus:outline-none focus:ring-2 focus:ring-bakery-tan focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-bakery-beige focus:outline-none focus:ring-2 focus:ring-bakery-tan focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-bakery-beige focus:outline-none focus:ring-2 focus:ring-bakery-tan focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-bakery-brown text-bakery-cream rounded-lg font-medium shadow-sm transition-all hover:bg-opacity-90"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
          
          <div className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <h3 className="font-serif text-2xl font-medium mb-6">Informações de contato</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={cn(
                    "transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    { "delay-100": index === 0 },
                    { "delay-200": index === 1 },
                    { "delay-300": index === 2 },
                    { "delay-400": index === 3 }
                  )}
                >
                  <div className="flex items-center mb-2">
                    <div className="h-10 w-10 rounded-full bg-bakery-beige flex items-center justify-center mr-3">
                      <span className="text-bakery-brown">{info.icon}</span>
                    </div>
                    <h4 className="font-medium">{info.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground pl-13">{info.details}</p>
                </div>
              ))}
            </div>
            
            <div className={cn(
              "bg-white rounded-2xl p-6 shadow-sm transition-all duration-1000 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <h4 className="font-serif text-xl font-medium mb-4">Horário de atendimento</h4>
              <div className="space-y-3">
                <div className="flex justify-between pb-2 border-b border-bakery-beige">
                  <span className="text-sm">Segunda - Sexta</span>
                  <span className="text-sm font-medium">8:00 - 19:00</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-bakery-beige">
                  <span className="text-sm">Sábado</span>
                  <span className="text-sm font-medium">8:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Domingo</span>
                  <span className="text-sm font-medium">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
