import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Leaf,
  Shield,
  Award,
  Heart
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: {
      title: "Services",
      links: [
        { name: "AI Health Guidance", href: "#chatbot" },
        { name: "Find Hakeem", href: "#hakeem" },
        { name: "Medicine Store", href: "#store" },
        { name: "Global Community", href: "#community" },
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Our Story", href: "/our-story" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press-kit" },
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Health Articles", href: "/health-articles" },
        { name: "Remedy Guide", href: "/remedy-guide" },
        { name: "Research Papers", href: "/research-papers" },
        { name: "Al-Nukhwa Journal", href: "/al-nukhwa-journal" },
        { name: "FAQs", href: "/faq" },
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Medical Disclaimer", href: "/medical-disclaimer" },
        { name: "Refund Policy", href: "/refund-policy" },
      ]
    }
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const trustBadges = [
    { icon: Shield, text: "ISO Certified" },
    { icon: Award, text: "WHO Approved" },
    { icon: Leaf, text: "100% Natural" },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-primary/5 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Heart className="w-3 h-3 mr-2" />
            Stay Connected
          </Badge>
          <h3 className="text-2xl font-bold mb-4">Get Health Tips & Updates</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive weekly Desi health tips, new remedy discoveries, and exclusive offers.
          </p>
          <div className="flex max-w-md mx-auto gap-3">
            <Input 
              placeholder="Enter your email" 
              type="email"
              className="flex-1"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ا</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gradient-primary">Al-Nakhwa</h4>
                <p className="text-xs text-muted-foreground">Tibb Hub</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Reviving the wisdom of traditional Desi medicine with modern AI technology. 
              Your trusted partner in natural healing and wellness.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-1 text-xs">
                  <badge.icon size={14} className="text-primary" />
                  <span className="text-muted-foreground">{badge.text}</span>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={16} className="text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h5 className="font-semibold text-foreground">{section.title}</h5>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 p-6 card-gradient rounded-xl shadow-soft">
          <h5 className="font-semibold text-foreground mb-4">Get In Touch</h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="text-xs text-muted-foreground">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-xs text-muted-foreground">+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-xs text-muted-foreground">info@alnakhwa.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Al-Nakhwa Tibb Hub. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-muted-foreground">Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span className="text-muted-foreground">in Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;