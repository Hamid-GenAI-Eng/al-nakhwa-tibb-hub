import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Lightbulb, 
  Users, 
  Globe, 
  BookOpen,
  Leaf,
  Star,
  Award
} from "lucide-react";

const OurStory = () => {
  const storyPoints = [
    {
      icon: Heart,
      title: "A Personal Journey",
      description: "Our founder's grandmother, a traditional healer, inspired the vision to preserve ancient healing wisdom for future generations."
    },
    {
      icon: Lightbulb,
      title: "The Spark of Innovation",
      description: "Witnessing the gap between traditional knowledge and modern accessibility, we envisioned bridging this divide through technology."
    },
    {
      icon: BookOpen,
      title: "Research & Documentation",
      description: "Years of collecting, verifying, and documenting traditional remedies from master practitioners across Pakistan and beyond."
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Transforming local wisdom into a global resource, making authentic traditional medicine accessible worldwide."
    }
  ];

  const challenges = [
    {
      challenge: "Preserving Authenticity",
      solution: "Collaborating directly with master practitioners and maintaining strict verification processes"
    },
    {
      challenge: "Modern Skepticism",
      solution: "Backing traditional practices with scientific research and peer-reviewed studies"
    },
    {
      challenge: "Global Accessibility",
      solution: "Developing AI-powered platforms to make consultations available 24/7 worldwide"
    },
    {
      challenge: "Quality Assurance",
      solution: "Implementing rigorous sourcing and testing protocols for all herbal products"
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
              <BookOpen className="w-4 h-4 mr-2" />
              Our Journey
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From a grandmother's healing touch to a global platform - discover how 
              Al-Nukhwa emerged from deep-rooted tradition to become a beacon of authentic wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 card-gradient shadow-elegant">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">It All Started With Love</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  In a small village in Punjab, Pakistan, Bibi Khadija was known as the village healer. 
                  For over 50 years, she treated ailments with herbs from her garden, knowledge passed 
                  down through generations of women in her family. Her remedies were simple yet powerful - 
                  turmeric for inflammation, ginger for digestion, fennel for colic babies.
                </p>
                
                <p className="mb-6">
                  Her grandson, Dr. Ahmad Hassan, grew up watching her heal with compassion and wisdom. 
                  As he pursued modern medicine, he realized that while technology advanced, something 
                  precious was being lost - the holistic, natural approach that had healed communities 
                  for centuries.
                </p>
                
                <p>
                  When Bibi Khadija passed away in 2019, Dr. Hassan made a promise: to honor her legacy 
                  by preserving and sharing this ancient wisdom with the world. Al-Nukhwa was born from 
                  this promise - a bridge between the healing touch of his grandmother and the needs of 
                  modern families seeking natural, authentic wellness solutions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Points */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              The Journey
            </Badge>
            <h2 className="text-3xl font-bold mb-4">How We Grew</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a personal mission to a global movement - the key milestones that shaped Al-Nukhwa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {storyPoints.map((point, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Overcoming Challenges
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Turning Obstacles Into Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every challenge we faced became a stepping stone to create better solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {challenges.map((item, index) => (
              <Card key={index} className="p-6 card-gradient">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-destructive mb-2">Challenge</h3>
                    <p className="text-muted-foreground">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Our Solution</h3>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Looking Forward
            </Badge>
            <h2 className="text-3xl font-bold mb-6">The Future We're Building</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Sustainable Sourcing</h3>
                <p className="text-sm text-muted-foreground">
                  Building partnerships with organic farmers and sustainable herb cultivation
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Global Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connecting practitioners and patients worldwide in our wellness ecosystem
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Research Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Advancing scientific validation of traditional practices through modern research
                </p>
              </Card>
            </div>

            <div className="mt-12 p-8 card-gradient rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-muted-foreground leading-relaxed">
                We remain committed to Bibi Khadija's legacy - treating each person with the same care, 
                wisdom, and compassion she showed in her small village. As we grow globally, we never 
                forget that healing begins with love, understanding, and respect for the wisdom of our ancestors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;