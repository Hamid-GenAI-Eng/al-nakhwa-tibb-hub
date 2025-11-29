import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bot, Stethoscope, Package, MessageSquare, Languages } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.aiAssistant"), href: "/ai-chat", icon: Bot },
    { name: t("nav.findHakeem"), href: "/find-hakeem", icon: Stethoscope },
    { name: t("nav.products"), href: "/products", icon: Package },
    { name: t("nav.community"), href: "/community", icon: MessageSquare },
  ];

  return (
    <header className="fixed top-0 w-full z-50 card-gradient shadow-medium border-b border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/6bad9adc-cf94-4aaf-a2d9-ecc9d6233dd8.png" 
              alt="Al Nukhwa - Where Purity Meets Prestige" 
              className="h-12 w-auto hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
                >
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
                >
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              )
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-medium">{language === "en" ? "اردو" : "English"}</span>
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => setIsAuthModalOpen(true)}
            >
              {t("nav.getStarted")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </a>
                )
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="w-full gap-2"
              >
                <Languages className="h-4 w-4" />
                <span>{language === "en" ? "اردو میں دیکھیں" : "View in English"}</span>
              </Button>
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full mt-2"
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                {t("nav.getStarted")}
              </Button>
            </nav>
          </div>
        )}
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;