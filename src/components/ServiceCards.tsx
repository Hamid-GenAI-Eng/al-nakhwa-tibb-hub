import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ShoppingBag, 
  MessageSquare, 
  Star, 
  Shield, 
  Clock,
  MapPin,
  Award,
  Leaf,
  Heart
} from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      id: "hakeem",
      title: "Find & Consult Hakeem",
      description: "Connect with certified Hakeems across Pakistan and globally. Book consultations, view ratings, and get personalized Tibb guidance.",
      icon: Users,
      color: "primary",
      features: ["Verified Profiles", "Online/Offline Consultation", "Rating System", "Multi-language Support"],
      stats: { label: "Active Hakeems", value: "500+" },
      badge: "Most Trusted"
    },
    {
      id: "store",
      title: "Premium Medicine Store", 
      description: "Authentic Desi medicines, herbs, and natural ingredients. All products are quality-tested and certified for purity and effectiveness.",
      icon: ShoppingBag,
      color: "secondary",
      features: ["Certified Products", "Same-day Delivery", "Money-back Guarantee", "Bulk Orders Available"],
      stats: { label: "Products Available", value: "2000+" },
      badge: "Quality Assured"
    },
    {
      id: "community",
      title: "Global Hakeem Community",
      description: "A professional network where Hakeems worldwide share knowledge, research, and collaborate on traditional medicine advancements.",
      icon: MessageSquare,
      color: "trust",
      features: ["Research Sharing", "Case Discussions", "Peer Review", "Continuing Education"],
      stats: { label: "Community Members", value: "1200+" },
      badge: "Knowledge Hub"
    }
  ];

  const getCardClasses = (color: string) => {
    const baseClasses = "hover-lift shadow-soft hover:shadow-large transition-all duration-300 border-0";
    switch (color) {
      case "primary": return `${baseClasses} bg-gradient-to-br from-card to-primary-light/20`;
      case "secondary": return `${baseClasses} bg-gradient-to-br from-card to-secondary-light/20`;
      case "trust": return `${baseClasses} bg-gradient-to-br from-card to-blue-50`;
      default: return `${baseClasses} card-gradient`;
    }
  };

  const getIconClasses = (color: string) => {
    switch (color) {
      case "primary": return "w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center";
      case "secondary": return "w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center";
      case "trust": return "w-12 h-12 rounded-xl bg-trust/10 text-trust flex items-center justify-center";
      default: return "w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Leaf className="w-3 h-3 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Complete Healthcare</span> Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered guidance to expert consultations, premium medicines to global community - 
            everything you need for holistic Desi healthcare.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className={getCardClasses(service.color)}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={getIconClasses(service.color)}>
                    <service.icon size={24} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent>
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Shield size={12} className="text-success" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{service.stats.value}</p>
                    <p className="text-xs text-muted-foreground">{service.stats.label}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-secondary fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant={service.color === "primary" ? "hero" : service.color === "secondary" ? "premium" : "trust"} 
                  className="w-full"
                >
                  Explore {service.title.split(" ")[0]}
                  <Heart size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto card-gradient p-8 rounded-2xl shadow-large">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Award className="w-8 h-8 text-secondary" />
              <Clock className="w-8 h-8 text-primary" />
              <MapPin className="w-8 h-8 text-trust" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Join Pakistan's Leading Tibb Platform</h3>
            <p className="text-muted-foreground mb-6">
              Over 10,000 satisfied customers trust Al-Nakhwa for their traditional medicine needs. 
              Experience the perfect blend of ancient wisdom and modern convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;