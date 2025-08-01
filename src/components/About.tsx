import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Creating Homes,
              <span className="block">Not Just Spaces</span>
            </h2>
            <div className="space-y-6 text-soft-gray leading-relaxed">
              <p>
                At Studio Heritage, we believe that great design goes beyond aesthetics. It's about creating spaces that enhance the way you live, bringing comfort, beauty, and functionality together in perfect harmony.
              </p>
              <p>
                Our approach combines timeless design principles with modern sensibilities, resulting in interiors that feel both current and enduring. We take the time to understand your lifestyle, preferences, and dreams to create a home that truly reflects who you are.
              </p>
              <p>
                From initial concept to final styling, we guide you through every step of the design process, ensuring that your vision becomes a beautiful reality that you'll love for years to come.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="default" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-elegant">
              <blockquote className="text-xl text-charcoal font-light italic mb-6">
                "Studio Heritage transformed our house into a home that perfectly reflects our family's personality. Every detail was thoughtfully considered."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage-green/20 rounded-full flex items-center justify-center">
                  <span className="text-sage-green font-medium">SJ</span>
                </div>
                <div>
                  <div className="font-medium text-charcoal">Sarah Johnson</div>
                  <div className="text-sm text-soft-gray">Homeowner, Utah</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage-green/10 rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-sage-green/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;