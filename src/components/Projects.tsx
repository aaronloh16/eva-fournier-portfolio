import { Card, CardContent } from "@/components/ui/card";
import kitchenImage from "@/assets/project-kitchen.jpg";
import bedroomImage from "@/assets/project-bedroom.jpg";
import diningImage from "@/assets/project-dining.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Family Kitchen",
      location: "Utah",
      image: kitchenImage,
      description: "A warm and inviting kitchen designed for family gatherings and everyday living."
    },
    {
      id: 2,
      title: "Serene Master Bedroom",
      location: "California",
      image: bedroomImage,
      description: "A peaceful retreat with natural textures and calming neutral tones."
    },
    {
      id: 3,
      title: "Elegant Dining Room",
      location: "Texas",
      image: diningImage,
      description: "Sophisticated dining space perfect for intimate dinners and entertaining."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Each project tells a unique story, crafted with attention to detail and a deep understanding of how families live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-sage-green mb-2">
                  <span>{project.location}</span>
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {project.title}
                </h3>
                <p className="text-soft-gray leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-charcoal hover:text-sage-green transition-colors duration-200 font-medium">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;