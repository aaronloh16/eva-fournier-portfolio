import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Master Bedroom Transformation",
      location: "Calgary, AB",
      beforeImage: "/lovable-uploads/a904c81c-a9c1-424b-845b-6cf8f572732e.png",
      afterImage: "/lovable-uploads/feb7c27c-b6cd-42b5-a8fb-bfd98f24eecb.png",
      description: "Transformed a cluttered bedroom into a serene retreat with layered textures and warm lighting."
    },
    {
      id: 2,
      title: "Dining Room Staging",
      location: "Calgary, AB", 
      beforeImage: "/lovable-uploads/4cf341c2-9c2e-4011-ad11-ca5addad9b09.png",
      afterImage: "/lovable-uploads/8edcb558-78eb-4511-8bc8-e7ea8ba1ecc4.png",
      description: "Converted a home office space into an inviting dining area perfect for family gatherings."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            Before & After Transformations
          </h2>
          <p className="text-soft-gray text-lg max-w-2xl mx-auto">
            See how strategic staging transforms spaces and helps homes sell faster and for higher prices.
          </p>
        </div>
        
        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{project.title}</h3>
                  <p className="text-sage-green font-medium mb-4">{project.location}</p>
                  <p className="text-soft-gray leading-relaxed">{project.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <img 
                    src={project.beforeImage} 
                    alt={`${project.title} - Before`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={project.afterImage} 
                    alt={`${project.title} - After`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-sage-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;