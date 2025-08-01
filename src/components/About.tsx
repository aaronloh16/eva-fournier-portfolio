import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Hi, I'm Eva!
            </h2>
            <div className="space-y-6 text-soft-gray leading-relaxed">
              <p>
                I'm a home stager with a love for transforming spaces into warm, beautiful homes that buyers fall in love with. I started my career in marketing, where I spent years leading creative campaigns and working with amazing teams across North America.
              </p>
              <p>
                Now, I get to blend that experience with my passion for design—styling spaces to help them shine on the market. Whether it's rearranging furniture or adding just the right finishing touches, I love creating rooms that feel both welcoming and intentional.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="default" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-elegant">
              <blockquote className="text-xl text-charcoal font-light italic mb-6">
                "Eva's staging made all the difference. Our home sold in just 3 days above asking price! Her eye for detail is incredible."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage-green/20 rounded-full flex items-center justify-center">
                  <span className="text-sage-green font-medium">MR</span>
                </div>
                <div>
                  <div className="font-medium text-charcoal">Mike & Rachel</div>
                  <div className="text-sm text-soft-gray">Sellers, Calgary</div>
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