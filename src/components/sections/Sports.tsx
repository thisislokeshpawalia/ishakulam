import { Trophy, Medal, Target, Dumbbell } from "lucide-react";
import sportsImg from "@/assets/sports.jpg";

const achievements = [
  { icon: Trophy, stat: "50+", label: "State Championships" },
  { icon: Medal, stat: "200+", label: "District Medals" },
  { icon: Target, stat: "15", label: "Sports Offered" },
  { icon: Dumbbell, stat: "5", label: "Training Coaches" },
];

const sports = [
  "Cricket", "Football", "Kabaddi", "Kho-Kho", "Athletics", 
  "Yoga", "Archery", "Chess", "Badminton", "Volleyball"
];

const Sports = () => {
  return (
    <section id="sports" className="py-24 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Sports & Activities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building Champions <span className="text-gradient">On & Off the Field</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Physical education is integral to our holistic approach. Our students excel in 
            various sports, winning accolades at district and state levels.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-soft hover:shadow-card transition-all"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <div className="font-heading text-2xl font-bold text-foreground">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Sports List */}
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">Sports We Offer</h3>
            <div className="flex flex-wrap gap-2">
              {sports.map((sport) => (
                <span
                  key={sport}
                  className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default"
                >
                  {sport}
                </span>
              ))}
            </div>

            {/* Extra Activities */}
            <div className="mt-8 p-6 bg-card rounded-xl shadow-soft">
              <h4 className="font-heading font-bold text-foreground mb-2">Extra-curricular Activities</h4>
              <p className="text-muted-foreground text-sm">
                Beyond sports, students participate in cultural programs, debates, dramatics, 
                music, art, and various clubs that nurture their diverse talents.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={sportsImg}
                alt="Students playing sports"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Achievement */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-xl p-4 shadow-elevated hidden md:block">
              <Trophy className="w-8 h-8 mb-2" />
              <div className="font-heading text-xl font-bold">State Champions</div>
              <div className="text-sm opacity-90">Cricket 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
