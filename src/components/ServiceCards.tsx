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
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceCards = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      id: "hakeem",
      title: t("services.hakeem.title"),
      description: t("services.hakeem.desc"),
      icon: Users,
      color: "primary",
      features: [
        t("services.hakeem.feat1"),
        t("services.hakeem.feat2"),
        t("services.hakeem.feat3"),
        t("services.hakeem.feat4")
      ],
      stats: { label: t("services.hakeem.stats"), value: "500+" },
      badge: t("services.hakeem.badge")
    },
    {
      id: "store",
      title: t("services.store.title"),
      description: t("services.store.desc"),
      icon: ShoppingBag,
      color: "secondary",
      features: [
        t("services.store.feat1"),
        t("services.store.feat2"),
        t("services.store.feat3"),
        t("services.store.feat4")
      ],
      stats: { label: t("services.store.stats"), value: "2000+" },
      badge: t("services.store.badge")
    },
    {
      id: "community",
      title: t("services.community.title"),
      description: t("services.community.desc"),
      icon: MessageSquare,
      color: "trust",
      features: [
        t("services.community.feat1"),
        t("services.community.feat2"),
        t("services.community.feat3"),
        t("services.community.feat4")
      ],
      stats: { label: t("services.community.stats"), value: "1200+" },
      badge: t("services.community.badge")
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
            <Leaf className="w-3 h-3 mx-2" />
            {t("services.badge")}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">{t("services.complete")}</span> {t("services.ecosystem")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.description")}
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
                  {t("services.explore")} {service.title.split(" ")[0]}
                  <Heart size={16} className="mx-2" />
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
            <h3 className="text-2xl font-bold mb-4">{t("services.join")}</h3>
            <p className="text-muted-foreground mb-6">
              {t("services.joinDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                {t("services.startJourney")}
              </Button>
              <Button variant="outline" size="lg">
                {t("services.learnMore")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;