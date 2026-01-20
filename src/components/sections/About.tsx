import { BookOpen, Heart, Users, Award } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Ancient Wisdom",
    description: "Rooted in the timeless traditions of Gurukul education, blending Vedic knowledge with contemporary learning.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Nurturing the mind, body, and spirit through a balanced curriculum of academics, arts, and athletics.",
  },
  {
    icon: Users,
    title: "Residential Community",
    description: "A close-knit family of learners living, studying, and growing together in a supportive environment.",
  },
  {
    icon: Award,
    title: "Excellence in All",
    description: "Striving for the highest standards in academics, character building, and extracurricular achievements.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 gradient-warm pattern-lines">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Ishakulam</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Founded on the principles of the ancient Gurukul system, Ishakulam is a modern 
            residential school that preserves the essence of traditional Indian education 
            while embracing contemporary academic excellence.
          </p>
        </div>

        {/* History & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our History</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Established over two decades ago by visionary educators, Ishakulam began as a small 
              ashram-based school with just 50 students. Today, we have grown into one of the 
              most respected residential institutions in the region.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our journey has been guided by the belief that education should cultivate not just 
              intellectual prowess, but also moral strength, physical wellness, and spiritual awareness.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To provide a transformative educational experience that develops well-rounded 
              individuals equipped with knowledge, values, and skills to excel in the modern 
              world while staying rooted in cultural heritage.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We aim to create future leaders who are academically excellent, ethically grounded, 
              environmentally conscious, and committed to serving society.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
