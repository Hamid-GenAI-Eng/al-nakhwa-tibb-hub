import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Download, 
  Calendar,
  Star,
  Award,
  Users,
  Globe,
  ChevronRight,
  Heart,
  Leaf
} from "lucide-react";

const AlNukhwaJournal = () => {
  const journalIssues = [
    {
      issue: "Winter 2024",
      title: "Ancient Remedies for Modern Ailments",
      description: "Exploring traditional winter wellness practices and their scientific validation",
      cover: "/api/placeholder/300/400",
      featured: true,
      topics: ["Winter Immunity", "Herbal Teas", "Cold Prevention", "Seasonal Nutrition"]
    },
    {
      issue: "Autumn 2023",
      title: "The Science of Saffron",
      description: "Deep dive into saffron's therapeutic properties and cultural significance",
      cover: "/api/placeholder/300/400",
      topics: ["Saffron Research", "Mental Health", "Digestive Wellness", "Beauty Secrets"]
    },
    {
      issue: "Summer 2023",
      title: "Cooling Herbs & Heat Management",
      description: "Traditional cooling methods and heat-related wellness practices",
      cover: "/api/placeholder/300/400",
      topics: ["Heat Stroke Prevention", "Cooling Foods", "Summer Detox", "Hydration"]
    }
  ];

  const expertContributors = [
    {
      name: "Dr. Muhammad Iqbal",
      title: "Lead Hakeem & Research Director",
      expertise: "40+ years in traditional medicine",
      publications: "50+ research papers"
    },
    {
      name: "Dr. Fatima Khan",
      title: "Botanical Medicine Specialist", 
      expertise: "Phytotherapy & Modern Applications",
      publications: "30+ peer-reviewed articles"
    },
    {
      name: "Hakim Abdul Rahman",
      title: "Classical Unani Medicine Expert",
      expertise: "Traditional diagnostics & treatments",
      publications: "25+ years of practice"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Quarterly Publication
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Al-Nukhwa Journal
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Where ancient wisdom meets modern research. Our quarterly journal bridges 
              traditional Desi medicine with contemporary scientific understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient">
                <Download className="w-5 h-5 mr-2" />
                Read Latest Issue
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Subscribe for Print
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Issues Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Global Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Expert Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Issue */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Latest Issue
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Featured This Quarter</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden card-gradient shadow-elegant">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-primary/60" />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">{journalIssues[0].issue}</Badge>
                    <Badge className="trust-gradient">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{journalIssues[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{journalIssues[0].description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">This Issue Covers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {journalIssues[0].topics.map((topic, index) => (
                        <Badge key={index} variant="secondary">{topic}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="hero-gradient">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Order Print Copy
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Issues */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Past Issues</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our archive of carefully researched articles and traditional wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalIssues.slice(1).map((issue, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{issue.issue}</Badge>
                  <h3 className="text-xl font-bold mb-3">{issue.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{issue.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {issue.topics.slice(0, 2).map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">{topic}</Badge>
                    ))}
                    {issue.topics.length > 2 && (
                      <Badge variant="secondary" className="text-xs">+{issue.topics.length - 2} more</Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="w-3 h-3 mr-1" />
                      Read
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Contributors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Expert Contributors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from renowned practitioners and researchers who share their knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertContributors.map((expert, index) => (
              <Card key={index} className="text-center p-6 card-gradient">
                <div className="w-16 h-16 rounded-full hero-gradient mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{expert.name}</h3>
                <p className="text-primary font-medium mb-2">{expert.title}</p>
                <p className="text-sm text-muted-foreground mb-2">{expert.expertise}</p>
                <p className="text-xs text-muted-foreground">{expert.publications}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Join Our Community
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Never Miss an Issue</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive our quarterly journal and stay connected with the latest 
              research and traditional medicine insights
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">Digital Subscription</CardTitle>
                  <p className="text-sm text-muted-foreground">PDF access to all issues</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold">Free</span>
                  </div>
                  <Button className="w-full hero-gradient">
                    Subscribe Digital
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">Print + Digital</CardTitle>
                  <p className="text-sm text-muted-foreground">Physical journal delivered</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold">$24</span>
                    <span className="text-sm text-muted-foreground">/year</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Order Print Edition
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default AlNukhwaJournal;