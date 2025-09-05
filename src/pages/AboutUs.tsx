import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Users, 
  Globe, 
  Award,
  Leaf,
  Shield,
  BookOpen,
  Star,
  Target,
  Lightbulb
} from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every remedy and guidance stems from genuine care for human wellbeing"
    },
    {
      icon: Leaf,
      title: "Natural Wisdom",
      description: "Preserving and sharing the pure essence of traditional herbal medicine"
    },
    {
      icon: Shield,
      title: "Trust & Authenticity",
      description: "Building confidence through verified practices and transparent processes"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Making ancient wisdom available to everyone, everywhere"
    }
  ];

  const milestones = [
    { year: "2020", title: "Foundation", description: "Al-Nukhwa established with vision to modernize traditional medicine" },
    { year: "2021", title: "Digital Platform", description: "Launched AI-powered health guidance system" },
    { year: "2022", title: "Global Expansion", description: "Reached 50+ countries with our digital services" },
    { year: "2023", title: "Research Initiative", description: "Published first quarterly journal and research papers" },
    { year: "2024", title: "Community Growth", description: "Built thriving community of 100K+ health enthusiasts" }
  ];

  const team = [
    {
      name: "Dr. Ahmad Hassan",
      role: "Founder & CEO",
      expertise: "Traditional Medicine & Healthcare Innovation",
      experience: "25+ years"
    },
    {
      name: "Dr. Fatima Malik",
      role: "Chief Medical Officer",
      expertise: "Integrative Medicine & Research",
      experience: "20+ years"
    },
    {
      name: "Hakim Abdul Rahman",
      role: "Traditional Medicine Advisor",
      expertise: "Classical Unani & Ayurvedic Practices",
      experience: "40+ years"
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
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              About Al-Nukhwa
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Where ancient healing wisdom meets modern innovation. We're dedicated to preserving, 
              researching, and sharing traditional Desi medicine for global wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 card-gradient shadow-soft">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between traditional Desi medicine and modern healthcare needs, 
                making authentic herbal remedies and wellness practices accessible to everyone 
                while maintaining the highest standards of quality and safety.
              </p>
            </Card>

            <Card className="p-8 card-gradient shadow-soft">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted platform for traditional medicine, 
                where ancient wisdom is validated by modern research and made available 
                through innovative technology for the wellness of humanity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every decision and guide our mission to serve global wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-16 h-16 rounded-full hero-gradient mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Milestones & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to global impact - our journey of growth and innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 p-6 group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Leadership Team
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Meet Our Experts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Led by passionate professionals with decades of experience in traditional medicine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-20 h-20 rounded-full hero-gradient mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.expertise}</p>
                <Badge variant="outline" className="text-xs">{member.experience}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Our Impact
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Making a Difference</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Journal Issues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>

          <Separator className="my-12" />

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Certified & Trusted</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">WHO Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">100% Natural</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;