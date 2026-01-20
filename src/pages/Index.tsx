import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import Sports from "@/components/sections/Sports";
import Principal from "@/components/sections/Principal";
import Fees from "@/components/sections/Fees";
import Gaushala from "@/components/sections/Gaushala";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Academics />
        <Sports />
        <Principal />
        <Fees />
        <Gaushala />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
