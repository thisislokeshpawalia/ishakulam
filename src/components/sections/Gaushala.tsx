import { Leaf, Heart, Droplets, Sun } from "lucide-react";
import gaushalaImg from "@/assets/gaushala.jpg";

const features = [
  { icon: Heart, title: "50+ Indigenous Cows", desc: "Gir, Sahiwal, and local breeds" },
  { icon: Droplets, title: "Organic Products", desc: "Pure milk, ghee, and dairy" },
  { icon: Leaf, title: "Go-seva Training", desc: "Students learn cow care" },
  { icon: Sun, title: "Sustainable Practices", desc: "Biogas and organic farming" },
];

const Gaushala = () => {
  return (
    <section id="gaushala" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Gaushala
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sacred <span className="text-gradient">Gaushala</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our campus is home to a beautiful Gaushala (cow shelter) that serves as both a 
              sanctuary for indigenous cows and a living classroom for students to learn 
              about traditional Indian values, sustainability, and animal care.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-secondary mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft border-l-4 border-secondary">
              <h4 className="font-heading font-bold text-foreground mb-2">
                Learning Through Service
              </h4>
              <p className="text-muted-foreground text-sm">
                Students participate in daily go-seva activities, learning responsibility, 
                compassion, and the importance of protecting our environment. The Gaushala 
                also provides fresh organic milk and dairy products for our students.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={gaushalaImg}
                alt="Ishakulam Gaushala"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-xl p-4 shadow-elevated hidden md:block">
              <Leaf className="w-8 h-8 mb-2" />
              <div className="font-heading text-xl font-bold">100% Organic</div>
              <div className="text-sm opacity-90">Farm to Table</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gaushala;
