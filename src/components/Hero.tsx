import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Elegant interior design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 leading-tight">
          Timeless Design
          <span className="block text-4xl md:text-6xl mt-2 opacity-90">
            Modern Living
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Creating beautiful, functional spaces that reflect your unique style and enhance everyday living through thoughtful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="bg-white/90 text-charcoal hover:bg-white backdrop-blur-sm">
            View Our Work
          </Button>
          <Button variant="outline" size="lg" className="border-white/60 text-white hover:bg-white/10 backdrop-blur-sm">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;