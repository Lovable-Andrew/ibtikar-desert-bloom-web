import { Button } from "@/components/ui/button";
import { ChevronRight, Sprout, Droplets, Sun } from "lucide-react";
import heroImage from "@/assets/hero-greenhouse.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern greenhouse facility in desert"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 text-accent/20 float-animation">
        <Sprout size={80} />
      </div>
      <div className="absolute bottom-32 left-10 text-primary/20 float-animation" style={{animationDelay: '2s'}}>
        <Droplets size={60} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-accent/20 float-animation" style={{animationDelay: '4s'}}>
        <Sun size={50} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 fade-in-up">
            <span className="text-primary font-medium text-sm">
              Innovation Rooted in the Desert
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up stagger-1">
            Cultivating the
            <span className="bg-gradient-nature bg-clip-text text-transparent"> Future </span>
            of Agriculture
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl fade-in-up stagger-2">
            Ibtikar is Saudi Arabia's premier horticulture innovation center, accelerating 
            climate-smart agricultural solutions for arid regions through cutting-edge 
            research and collaboration.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
            <Button size="lg" className="btn-nature group">
              Explore Our Facilities
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="btn-outline-nature">
              Partner With Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 fade-in-up stagger-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Tech Levels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Sustainable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;