import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const footerLinks = {
    services: {
      title: t("footer.services"),
      links: [
        { name: t("footer.aiHealth"), href: "#chatbot" },
        { name: t("footer.findHakeem"), href: "#hakeem" },
        { name: t("footer.medicineStore"), href: "#store" },
        { name: t("footer.globalCommunity"), href: "#community" },
      ]
    },
    company: {
      title: t("footer.company"),
      links: [
        { name: t("footer.aboutUs"), href: "/about-us" },
        { name: t("footer.ourStory"), href: "/our-story" },
        { name: t("footer.careers"), href: "/careers" },
        { name: t("footer.pressKit"), href: "/press-kit" },
      ]
    },
    resources: {
      title: t("footer.resources"),
      links: [
        { name: t("footer.healthArticles"), href: "/health-articles" },
        { name: t("footer.remedyGuide"), href: "/remedy-guide" },
        { name: t("footer.researchPapers"), href: "/research-papers" },
        { name: t("footer.journal"), href: "/al-nukhwa-journal" },
        { name: t("footer.faqs"), href: "/faq" },
      ]
    },
    legal: {
      title: t("footer.legal"),
      links: [
        { name: t("footer.privacy"), href: "/privacy-policy" },
        { name: t("footer.terms"), href: "/terms-of-service" },
        { name: t("footer.disclaimer"), href: "/medical-disclaimer" },
        { name: t("footer.refund"), href: "/refund-policy" },
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
    { icon: Shield, text: t("footer.isoCertified") },
    { icon: Award, text: t("footer.whoApproved") },
    { icon: Leaf, text: t("footer.natural") },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-primary/5 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Heart className="w-3 h-3 mx-2" />
            {t("footer.stayConnected")}
          </Badge>
          <h3 className="text-2xl font-bold mb-4">{t("footer.getTips")}</h3>
          <p className="text-muted-foreground mb-6">
            {t("footer.subscribeDesc")}
          </p>
          <div className="flex max-w-md mx-auto gap-3">
            <Input 
              placeholder={t("footer.emailPlaceholder")}
              type="email"
              className="flex-1"
            />
            <Button variant="hero">{t("footer.subscribe")}</Button>
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
              {t("footer.tagline")}
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
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 p-6 card-gradient rounded-xl shadow-soft">
          <h5 className="font-semibold text-foreground mb-4">{t("footer.getInTouch")}</h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{t("footer.address")}</p>
                <p className="text-xs text-muted-foreground">{t("footer.addressValue")}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{t("footer.phone")}</p>
                <p className="text-xs text-muted-foreground">{t("footer.phoneValue")}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{t("footer.email")}</p>
                <p className="text-xs text-muted-foreground">{t("footer.emailValue")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-muted-foreground">{t("footer.madeWith")}</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span className="text-muted-foreground">{t("footer.inPakistan")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;