import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Leaf, 
  Search, 
  Filter,
  Star,
  Clock,
  Shield,
  Heart,
  ChevronRight,
  BookOpen,
  Award
} from "lucide-react";

const RemedyGuide = () => {
  const categories = [
    { name: "All Remedies", count: 250, icon: Leaf },
    { name: "Digestive Issues", count: 45, icon: Heart },
    { name: "Cold & Flu", count: 38, icon: Shield },
    { name: "Skin Care", count: 32, icon: Star },
    { name: "Sleep & Anxiety", count: 28, icon: Clock },
    { name: "Pain Relief", count: 25, icon: Award }
  ];

  const popularRemedies = [
    {
      name: "Golden Milk (Haldi Doodh)",
      purpose: "Anti-inflammatory & Immunity",
      difficulty: "Easy",
      time: "5 minutes",
      ingredients: ["Turmeric", "Milk", "Honey", "Black Pepper"],
      rating: 4.9,
      uses: "Reduces inflammation, boosts immunity, improves sleep",
      featured: true
    },
    {
      name: "Ginger-Honey Tea", 
      purpose: "Digestive Health & Nausea",
      difficulty: "Easy",
      time: "10 minutes",
      ingredients: ["Fresh Ginger", "Honey", "Water", "Lemon"],
      rating: 4.8,
      uses: "Soothes digestion, reduces nausea, fights cold symptoms",
      featured: true
    },
    {
      name: "Ajwain Water",
      purpose: "Digestive Relief",
      difficulty: "Very Easy", 
      time: "2 minutes",
      ingredients: ["Ajwain Seeds", "Water"],
      rating: 4.7,
      uses: "Relieves gas, bloating, and stomach discomfort",
      featured: true
    }
  ];

  const quickRemedies = [
    {
      name: "Fennel Seed Tea",
      purpose: "After-meal digestive",
      time: "5 min",
      difficulty: "Easy"
    },
    {
      name: "Tulsi Steam Inhalation",
      purpose: "Respiratory relief",
      time: "10 min", 
      difficulty: "Easy"
    },
    {
      name: "Aloe Vera Face Mask",
      purpose: "Skin soothing",
      time: "15 min",
      difficulty: "Easy"
    },
    {
      name: "Cumin Water",
      purpose: "Weight management",
      time: "3 min",
      difficulty: "Very Easy"
    },
    {
      name: "Neem Oil Treatment",
      purpose: "Skin conditions",
      time: "20 min",
      difficulty: "Medium"
    },
    {
      name: "Ashwagandha Latte",
      purpose: "Stress relief",
      time: "8 min",
      difficulty: "Easy"
    }
  ];

  const safetyTips = [
    {
      title: "Always Consult First",
      description: "Speak with a healthcare provider before starting any new herbal remedy"
    },
    {
      title: "Quality Ingredients",
      description: "Use organic, high-quality herbs and spices for maximum effectiveness"
    },
    {
      title: "Proper Dosage",
      description: "Follow recommended quantities - more isn't always better"
    },
    {
      title: "Watch for Reactions",
      description: "Monitor your body's response and discontinue if adverse effects occur"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Leaf className="w-4 h-4 mr-2" />
              Natural Healing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Remedy Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover time-tested natural remedies from traditional Desi medicine. 
              Simple, safe, and effective solutions for common health concerns.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Input 
                placeholder="Search remedies..." 
                className="pl-10 pr-4 py-3"
              />
              <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Filter className="w-4 h-4 mr-2" />
              Browse by Condition
            </Badge>
            <h2 className="text-2xl font-bold mb-4">Find Remedies for Your Needs</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer">
                <category.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-sm mb-1">{category.name}</h3>
                <Badge variant="secondary" className="text-xs">{category.count}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Remedies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Most Popular
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Tried & Trusted Remedies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most effective and widely-used traditional remedies with step-by-step guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {popularRemedies.map((remedy, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{remedy.purpose}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{remedy.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{remedy.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{remedy.uses}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{remedy.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>{remedy.difficulty}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Ingredients:</h4>
                    <div className="flex flex-wrap gap-1">
                      {remedy.ingredients.map((ingredient, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full hero-gradient">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Remedies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Quick Solutions
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Fast-Acting Remedies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple remedies you can prepare in minutes for immediate relief
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickRemedies.map((remedy, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{remedy.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{remedy.purpose}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {remedy.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        {remedy.difficulty}
                      </div>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="ghost">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Safety First
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Important Guidelines</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these essential safety tips when using natural remedies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {safetyTips.map((tip, index) => (
              <Card key={index} className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Expert Guidance
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Need Personalized Advice?</h2>
            <p className="text-muted-foreground mb-8">
              Consult with our experienced practitioners for customized remedy recommendations 
              based on your specific health needs and constitution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient">
                <BookOpen className="w-5 h-5 mr-2" />
                Consult a Hakeem
              </Button>
              <Button size="lg" variant="outline">
                <Leaf className="w-5 h-5 mr-2" />
                Browse All Remedies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemedyGuide;