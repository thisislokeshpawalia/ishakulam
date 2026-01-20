import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Ishakulam Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-primary-foreground/20">
            ॐ विद्या ददाति विनयं । विद्या विनय संपन्ने
          </span>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-accent">Ishakulam</span>
            <br />
            Gurukul of Excellence
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Where ancient wisdom meets modern education. We nurture minds, build character, 
            and shape future leaders through a holistic approach to learning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/admissions" className="flex items-center gap-2">
                Begin Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "1000+", label: "Students" },
              { number: "50+", label: "Dedicated Teachers" },
              { number: "100%", label: "Holistic Development" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
                <div className="font-heading text-3xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/80 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
