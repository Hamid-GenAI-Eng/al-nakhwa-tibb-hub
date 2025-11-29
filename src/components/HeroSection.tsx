import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, Sparkles, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const [chatMessage, setChatMessage] = useState("");
  const { t } = useLanguage();
  
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Chat message:", chatMessage);
    setChatMessage("");
  };

  const trustBadges = [
    { icon: Shield, label: t("hero.certified") },
    { icon: Award, label: t("hero.licensed") },
    { icon: Users, label: t("hero.satisfied") },
  ];

  const sampleQuestions = [
    t("hero.sample1"),
    t("hero.sample2"),
    t("hero.sample3")
  ];

  return (
    <section className="min-h-screen pattern-overlay flex items-center pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <Badge variant="secondary" className="w-fit">
              <Sparkles className="w-3 h-3 mx-2" />
              {t("hero.badge")}
            </Badge>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-primary">{t("hero.healing")}</span>
                <br />
                <span className="text-foreground">{t("hero.nature")}</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                {t("hero.description")}
              </p>
            </div>

            {/* AI Chatbot Interface */}
            <Card className="shadow-medium hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("hero.askAI")}</h3>
                    <p className="text-sm text-muted-foreground">{t("hero.aiSubtitle")}</p>
                  </div>
                </div>
                
                <form onSubmit={handleChatSubmit} className="space-y-3">
                  <Input
                    placeholder={t("hero.placeholder")}
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="border-primary/20 focus:border-primary"
                  />
                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="w-4 h-4 mx-2" />
                    {t("hero.getGuidance")}
                  </Button>
                </form>
                
                {/* Sample Questions */}
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-muted-foreground mb-2">{t("hero.tryAsking")}</p>
                  <div className="flex flex-wrap gap-2">
                    {sampleQuestions.map((sample) => (
                      <Badge 
                        key={sample} 
                        variant="outline" 
                        className="text-xs cursor-pointer hover:bg-primary/10"
                        onClick={() => setChatMessage(sample)}
                      >
                        {sample}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Traditional Desi Medicine and Modern Technology" 
                className="w-full h-auto animate-float"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 hero-gradient opacity-10"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 card-gradient p-4 rounded-xl shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full trust-gradient flex items-center justify-center">
                  <Award className="w-6 h-6 text-trust-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t("hero.premium")}</p>
                  <p className="text-xs text-muted-foreground">{t("hero.authenticated")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;