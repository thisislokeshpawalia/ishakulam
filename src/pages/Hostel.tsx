import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Home, Utensils, BookOpen, Shield, Users, Wifi, 
  Bed, Bath, Shirt, HeartPulse, Clock, CheckCircle 
} from "lucide-react";
import hostelImg from "@/assets/hostel.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const facilities = [
  { icon: Bed, title: "Comfortable Dormitories", desc: "Spacious rooms with proper ventilation and furniture" },
  { icon: Utensils, title: "Nutritious Meals", desc: "4 balanced meals daily, vegetarian cuisine" },
  { icon: BookOpen, title: "Study Halls", desc: "Quiet spaces for evening study hours" },
  { icon: Shield, title: "24/7 Security", desc: "CCTV monitoring and security personnel" },
  { icon: HeartPulse, title: "Medical Care", desc: "On-campus nurse and doctor visits" },
  { icon: Wifi, title: "Connectivity", desc: "Limited supervised internet access" },
];

const dailyRoutine = [
  { time: "5:00 AM", activity: "Wake up & Morning Prayers" },
  { time: "5:30 AM", activity: "Yoga & Physical Exercise" },
  { time: "6:30 AM", activity: "Personal Hygiene & Breakfast" },
  { time: "7:30 AM", activity: "Morning Assembly" },
  { time: "8:00 AM", activity: "Classes Begin" },
  { time: "1:00 PM", activity: "Lunch Break" },
  { time: "2:00 PM", activity: "Afternoon Classes" },
  { time: "4:00 PM", activity: "Sports & Activities" },
  { time: "6:00 PM", activity: "Evening Snacks & Rest" },
  { time: "7:00 PM", activity: "Study Hall" },
  { time: "9:00 PM", activity: "Dinner" },
  { time: "10:00 PM", activity: "Lights Out" },
];

const roomTypes = [
  { type: "Junior Dormitory", capacity: "8-10 Students", ages: "Class 1-5", features: ["Supervised care", "Play area", "Early bedtime"] },
  { type: "Senior Dormitory", capacity: "6-8 Students", ages: "Class 6-10", features: ["Study desks", "Personal lockers", "Sports access"] },
  { type: "Higher Secondary", capacity: "4-6 Students", ages: "Class 11-12", features: ["Extended study hours", "Career counseling", "Library access"] },
];

const Hostel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-hero" />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-4">
              Residential Life
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Hostel
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              A home away from home where students learn, grow, and thrive in a 
              nurturing residential environment.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Nurturing <span className="text-gradient">Home</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our residential facilities are designed to provide students with a safe, 
                  comfortable, and enriching environment. Living on campus allows students 
                  to fully immerse in the Gurukul experience, developing independence, 
                  discipline, and lifelong friendships.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Experienced house parents and wardens ensure round-the-clock supervision, 
                  while maintaining a warm, family-like atmosphere. Students participate in 
                  structured daily routines that balance academics, physical activities, 
                  cultural programs, and personal time.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Boys Hostel", "Girls Hostel", "Separate Wings", "Age-appropriate", "24/7 Care"].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={hostelImg} 
                  alt="Hostel Interior" 
                  className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-elevated hidden md:block">
                  <Home className="w-8 h-8 mb-2" />
                  <div className="font-heading text-xl font-bold">300+</div>
                  <div className="text-sm opacity-90">Residential Students</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hostel <span className="text-gradient">Facilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Modern amenities combined with traditional values create the perfect 
                environment for holistic development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <facility.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground text-sm">{facility.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Room Types */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Accommodation <span className="text-gradient">Types</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {roomTypes.map((room, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{room.type}</h3>
                  <p className="text-primary font-medium mb-1">{room.capacity}</p>
                  <p className="text-muted-foreground text-sm mb-4">{room.ages}</p>
                  <ul className="space-y-2">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Routine */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Daily <span className="text-gradient">Routine</span>
                </h2>
                <p className="text-muted-foreground">A balanced schedule for holistic development</p>
              </div>

              <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                <div className="bg-primary p-4">
                  <h3 className="font-heading text-lg font-bold text-primary-foreground flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Hostel Daily Schedule
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  {dailyRoutine.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-4 border-b border-border last:border-0 even:bg-muted/30"
                    >
                      <span className="font-mono text-sm text-primary font-bold w-20">{item.time}</span>
                      <span className="text-foreground">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Join Our Residential Family?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Experience the transformative power of Gurukul education in our 
              nurturing residential environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/#contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hostel;
