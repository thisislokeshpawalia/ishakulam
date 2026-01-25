import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ishakulamLogo from "@/assets/ishakulamlogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Academics", path: "/#academics" },
  { name: "Sports", path: "/#sports" },
  { name: "Hostel", path: "/hostel" },
  { name: "Gaushala", path: "/#gaushala" },
  { name: "Gallery", path: "/#gallery" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (hash: string) => {
    if (location.pathname !== "/") {
      window.location.href = hash;
      return;
    }
    const element = document.querySelector(hash.replace("/#", "#"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919760990064"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 9760990064
            </a>
            <a
              href="mailto:ishakulamschool@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              ishakulamschool@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/14QvXs8gypR/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/ishakulamschool?utm_source=qr&igsh=eGZ1azdtc3ZmajIx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center text-primary-foreground font-heading font-bold text-xl">
              <img
                src={ishakulamLogo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="font-heading text-xl font-bold text-foreground">
                Ishakulam
              </h1>
              <p className="text-xs text-muted-foreground">
                Gurukul of Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() =>
                  link.path.includes("#") ? scrollToSection(link.path) : null
                }
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.path.includes("#") ? (
                  link.name
                ) : (
                  <Link to={link.path}>{link.name}</Link>
                )}
              </button>
            ))}
            <Button variant="hero" size="sm" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() =>
                    link.path.includes("#")
                      ? scrollToSection(link.path)
                      : setIsOpen(false)
                  }
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.path.includes("#") ? (
                    link.name
                  ) : (
                    <Link to={link.path}>{link.name}</Link>
                  )}
                </button>
              ))}
              <Button variant="hero" size="sm" className="mt-2" asChild>
                <Link to="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
