import { Card, CardContent } from "@/components/ui/card";
import { Home, Palette, Lightbulb, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Full-Service Design",
      description: "Complete interior design services from concept to completion, ensuring every detail reflects your vision and lifestyle."
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Expert guidance and design direction to help you make confident decisions for your space transformation."
    },
    {
      icon: Lightbulb,
      title: "Space Planning",
      description: "Thoughtful layout solutions that maximize functionality while maintaining the beauty and flow of your home."
    },
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Curated selection of furniture, lighting, and accessories that perfectly complement your design aesthetic."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            Our Services
          </h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            We offer comprehensive design services tailored to create spaces that are both beautiful and deeply personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center group-hover:bg-sage-green/20 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-sage-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-soft-gray leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;