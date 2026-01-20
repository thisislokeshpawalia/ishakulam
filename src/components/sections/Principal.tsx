import { Quote } from "lucide-react";
import principalImg from "@/assets/principal.jpg";

const Principal = () => {
  return (
    <section className="py-24 bg-background pattern-dots">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-elevated overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image */}
              <div className="md:col-span-2 relative">
                <img
                  src={principalImg}
                  alt="Principal"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-primary/30 mb-4" />
                
                <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                  "At Ishakulam, we believe that true education is not merely the acquisition of knowledge, 
                  but the transformation of character. Our mission is to nurture students who will not 
                  only succeed in their careers but also contribute meaningfully to society."
                </blockquote>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every child who enters our gates becomes a part of our family. We guide them with 
                  patience, inspire them with wisdom, and empower them with skills. Our residential 
                  setting allows us to provide round-the-clock care and attention, ensuring each 
                  student flourishes in a nurturing environment.
                </p>

                <div className="border-t border-border pt-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">Acharya Vishwanath Sharma</h3>
                  <p className="text-primary font-medium">Principal & Founder</p>
                  <p className="text-sm text-muted-foreground mt-1">M.A., M.Ed., Ph.D. in Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
