import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, Sparkles, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [chatMessage, setChatMessage] = useState("");
  
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Chat message:", chatMessage);
    setChatMessage("");
  };

  const trustBadges = [
    { icon: Shield, label: "Certified Remedies" },
    { icon: Award, label: "Licensed Hakeems" },
    { icon: Users, label: "10k+ Satisfied Users" },
  ];

  return (
    <section className="min-h-screen pattern-overlay flex items-center pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <Badge variant="secondary" className="w-fit">
              <Sparkles className="w-3 h-3 mr-2" />
              Reviving Wisdom of Tibb with AI
            </Badge>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-primary">Healing Through</span>
                <br />
                <span className="text-foreground">Nature & Wisdom</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Al-Nakhwa combines ancient Desi medicine wisdom with modern AI technology. 
                Get personalized health guidance, consult certified Hakeems, and access 
                premium natural remedies.
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
                    <h3 className="font-semibold text-foreground">Ask Our AI Hakeem</h3>
                    <p className="text-sm text-muted-foreground">Get instant guidance on Desi remedies</p>
                  </div>
                </div>
                
                <form onSubmit={handleChatSubmit} className="space-y-3">
                  <Input
                    placeholder="Ask about any health concern, remedy, or ingredient..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="border-primary/20 focus:border-primary"
                  />
                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Get AI Guidance
                  </Button>
                </form>
                
                {/* Sample Questions */}
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Best remedy for cold", "Benefits of turmeric", "Digestive herbs"].map((sample) => (
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
                  <p className="font-semibold text-foreground text-sm">Premium Quality</p>
                  <p className="text-xs text-muted-foreground">Authenticated Remedies</p>
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