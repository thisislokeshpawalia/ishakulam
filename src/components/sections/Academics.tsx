import { GraduationCap, Calculator, FlaskConical, Globe, Palette, Languages } from "lucide-react";
import academicsImg from "@/assets/academics.jpg";

const subjects = [
  { icon: Languages, name: "Languages", description: "Hindi, English, Sanskrit" },
  { icon: Calculator, name: "Mathematics", description: "Vedic & Modern Math" },
  { icon: FlaskConical, name: "Sciences", description: "Physics, Chemistry, Biology" },
  { icon: Globe, name: "Social Studies", description: "History, Geography, Civics" },
  { icon: Palette, name: "Arts & Music", description: "Visual Arts, Classical Music" },
  { icon: GraduationCap, name: "Vedic Studies", description: "Shlokas, Philosophy" },
];

const Academics = () => {
  return (
    <section id="academics" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={academicsImg}
                alt="Students in classroom"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-card">
                  <h4 className="font-heading font-bold text-foreground mb-1">CBSE Affiliated</h4>
                  <p className="text-sm text-muted-foreground">
                    Following CBSE curriculum with additional Vedic studies
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-elevated hidden md:block">
              <div className="font-heading text-3xl font-bold">Class</div>
              <div className="text-sm opacity-90">1st to 12th</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Education
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Academic <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our curriculum blends the best of traditional Gurukul education with modern 
              academic standards. Students receive a comprehensive education that prepares 
              them for competitive examinations while instilling timeless values.
            </p>

            {/* Subjects Grid */}
            <div className="grid grid-cols-2 gap-4">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <subject.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{subject.name}</h4>
                    <p className="text-xs text-muted-foreground">{subject.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Small Class Sizes", "Expert Faculty", "Modern Labs", "Library", "Smart Classes"].map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 rounded-full border border-border text-sm text-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
