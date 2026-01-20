import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CreditCard, Building, Smartphone, FileText, CheckCircle } from "lucide-react";

const feeStructure = [
  { class: "Class 1-5", annual: "₹85,000", monthly: "₹7,083" },
  { class: "Class 6-8", annual: "₹95,000", monthly: "₹7,917" },
  { class: "Class 9-10", annual: "₹1,10,000", monthly: "₹9,167" },
  { class: "Class 11-12", annual: "₹1,25,000", monthly: "₹10,417" },
];

const paymentMethods = [
  { icon: Building, name: "Bank Transfer", desc: "Direct NEFT/RTGS" },
  { icon: CreditCard, name: "Online Payment", desc: "Cards & NetBanking" },
  { icon: Smartphone, name: "UPI Payment", desc: "GPay, PhonePe, Paytm" },
  { icon: FileText, name: "Demand Draft", desc: "Payable to Ishakulam" },
];

const inclusions = [
  "Tuition & Academic Materials",
  "Hostel Accommodation",
  "Nutritious Meals (4 times)",
  "Sports & Activities",
  "Medical Care",
  "Library Access",
];

const Fees = () => {
  return (
    <section id="fees" className="py-24 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Fee Information
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transparent <span className="text-gradient">Fee Structure</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe quality education should be accessible. Our fee structure is 
            comprehensive and includes all residential facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Fee Table */}
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="bg-primary p-6">
              <h3 className="font-heading text-xl font-bold text-primary-foreground">
                Annual Fee Structure 2025-26
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-1">
                All fees are inclusive of hostel and meals
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Class</th>
                    <th className="text-left p-4 font-semibold text-foreground">Annual Fee</th>
                    <th className="text-left p-4 font-semibold text-foreground">Monthly Equiv.</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((item, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="p-4 text-foreground font-medium">{item.class}</td>
                      <td className="p-4 text-foreground font-bold">{item.annual}</td>
                      <td className="p-4 text-muted-foreground">{item.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-muted/50">
              <p className="text-sm text-muted-foreground">
                * One-time admission fee: ₹15,000 | Security deposit: ₹10,000 (refundable)
              </p>
            </div>
          </div>

          {/* Payment Methods & Inclusions */}
          <div className="space-y-6">
            {/* Inclusions */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <h4 className="font-heading font-bold text-foreground mb-4">Fee Includes</h4>
              <ul className="space-y-3">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <h4 className="font-heading font-bold text-foreground mb-4">Payment Methods</h4>
              <div className="space-y-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <method.icon className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{method.name}</div>
                      <div className="text-xs text-muted-foreground">{method.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="hero" className="w-full" asChild>
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
