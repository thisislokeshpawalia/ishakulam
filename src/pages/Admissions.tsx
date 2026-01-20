import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  FileText, Calendar, CheckCircle, AlertCircle, 
  Download, ArrowRight, ClipboardList, Users, GraduationCap
} from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const eligibility = [
  { class: "Class 1", age: "5-6 years", requirement: "Basic readiness test" },
  { class: "Class 2-5", age: "6-10 years", requirement: "Previous report cards + entrance test" },
  { class: "Class 6-8", age: "10-13 years", requirement: "Academic test + interview" },
  { class: "Class 9-10", age: "13-15 years", requirement: "Board-level assessment + interview" },
  { class: "Class 11-12", age: "15-17 years", requirement: "Stream-specific test + counseling" },
];

const documents = [
  "Birth Certificate (original + copy)",
  "Previous School Transfer Certificate",
  "Report Cards (last 2 years)",
  "4 Passport-size Photographs",
  "Aadhar Card (student & parents)",
  "Medical Fitness Certificate",
  "Caste Certificate (if applicable)",
  "Parent/Guardian ID Proof",
];

const admissionSteps = [
  { step: 1, title: "Submit Application", desc: "Fill the online/offline form with required documents" },
  { step: 2, title: "Entrance Assessment", desc: "Age-appropriate written test and interaction" },
  { step: 3, title: "Campus Visit & Interview", desc: "Meet with principal and tour the facilities" },
  { step: 4, title: "Admission Confirmation", desc: "Fee payment and enrollment completion" },
];

const importantDates = [
  { event: "Application Opens", date: "January 1, 2026" },
  { event: "Application Deadline", date: "March 31, 2026" },
  { event: "Entrance Tests", date: "April 10-15, 2026" },
  { event: "Results Declaration", date: "April 25, 2026" },
  { event: "Fee Payment Deadline", date: "May 15, 2026" },
  { event: "Session Begins", date: "June 1, 2026" },
];

const Admissions = () => {
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
              Join Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Admissions 2026-27
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Begin your child's journey towards excellence at Ishakulam. 
              Applications are now open for the upcoming academic session.
            </p>
            <Button variant="accent" size="xl">
              <Download className="w-5 h-5 mr-2" />
              Download Application Form
            </Button>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Admission <span className="text-gradient">Process</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A simple, transparent admission process designed to identify students 
                who will thrive in our unique educational environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-2xl p-6 shadow-card h-full">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Eligibility Table */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Eligibility Criteria
                  </h2>
                </div>
                
                <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-4 font-semibold">Class</th>
                        <th className="text-left p-4 font-semibold">Age</th>
                        <th className="text-left p-4 font-semibold">Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eligibility.map((item, index) => (
                        <tr key={index} className="border-b border-border last:border-0">
                          <td className="p-4 font-medium text-foreground">{item.class}</td>
                          <td className="p-4 text-muted-foreground">{item.age}</td>
                          <td className="p-4 text-muted-foreground text-sm">{item.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Documents Required */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="w-8 h-8 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Documents Required
                  </h2>
                </div>
                
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <ul className="space-y-4">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-muted rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      All documents must be submitted along with the application form. 
                      Original documents will be verified during admission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Important Dates
                  </h2>
                </div>
                <p className="text-muted-foreground">Mark your calendar for these key admission dates</p>
              </div>

              <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                {importantDates.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-5 border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground">{item.event}</span>
                    <span className="text-primary font-semibold">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-elevated p-8 md:p-12">
              <div className="text-center mb-8">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Ready to Apply?
                </h2>
                <p className="text-muted-foreground">
                  Download the application form or visit our campus for an offline form
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-xl p-6 text-center">
                  <Download className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-foreground mb-2">Online Application</h3>
                  <p className="text-muted-foreground text-sm mb-4">Download and fill the form</p>
                  <Button variant="outline" className="w-full">Download Form (PDF)</Button>
                </div>
                
                <div className="bg-muted/50 rounded-xl p-6 text-center">
                  <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-foreground mb-2">Visit Campus</h3>
                  <p className="text-muted-foreground text-sm mb-4">Collect form from office</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/#contact">Schedule Visit</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  For admission queries, contact us at:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="tel:+911234567890" className="text-primary font-medium hover:underline">
                    +91 12345 67890
                  </a>
                  <span className="text-muted">|</span>
                  <a href="mailto:admissions@ishakulam.edu" className="text-primary font-medium hover:underline">
                    admissions@ishakulam.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;
