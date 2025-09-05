import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Search, 
  Download,
  ExternalLink,
  Calendar,
  User,
  Award,
  Globe,
  ChevronRight,
  Filter,
  Star
} from "lucide-react";

const ResearchPapers = () => {
  const categories = [
    { name: "All Papers", count: 125 },
    { name: "Herbal Medicine", count: 45 },
    { name: "Clinical Studies", count: 32 },
    { name: "Phytochemistry", count: 28 },
    { name: "Traditional Systems", count: 20 }
  ];

  const featuredPapers = [
    {
      title: "Efficacy of Curcumin in Inflammatory Bowel Disease: A Systematic Review",
      authors: ["Dr. Fatima Khan", "Dr. Ahmad Hassan", "Prof. Sarah Ahmed"],
      journal: "Journal of Traditional Medicine",
      year: "2024",
      category: "Clinical Studies",
      abstract: "This comprehensive review analyzes 25 clinical trials examining curcumin's anti-inflammatory properties in IBD treatment, showing significant promise as adjunctive therapy.",
      citations: 47,
      impact: "High Impact",
      status: "Published",
      featured: true
    },
    {
      title: "Molecular Mechanisms of Ashwagandha in Stress Response: A Multi-Center Study",
      authors: ["Dr. Abdul Rahman", "Dr. Aisha Malik", "Dr. Imran Sheikh"],
      journal: "Phytomedicine Research",
      year: "2024",
      category: "Phytochemistry",
      abstract: "Investigation of ashwagandha's adaptogenic properties at the molecular level, revealing novel pathways in cortisol regulation and neuroprotection.",
      citations: 89,
      impact: "Very High Impact",
      status: "Published",
      featured: true
    },
    {
      title: "Traditional Unani Medicine in Diabetes Management: Evidence-Based Analysis",
      authors: ["Hakim Abdul Rahman", "Dr. Fatima Khan", "Dr. Mohammad Ali"],
      journal: "Traditional Medicine Today",
      year: "2023",
      category: "Traditional Systems",
      abstract: "Comprehensive analysis of traditional Unani formulations for diabetes management, validating ancient practices through modern clinical parameters.",
      citations: 156,
      impact: "Very High Impact", 
      status: "Published",
      featured: true
    }
  ];

  const recentPapers = [
    {
      title: "Antimicrobial Properties of Neem: Modern Validation of Ancient Wisdom",
      authors: ["Dr. Ahmad Hassan", "Dr. Sarah Khan"],
      journal: "Herbal Medicine Journal",
      year: "2024",
      category: "Herbal Medicine",
      citations: 23,
      status: "Published"
    },
    {
      title: "Ginger in Chemotherapy-Induced Nausea: Randomized Controlled Trial",
      authors: ["Dr. Fatima Khan", "Dr. Ali Ahmed"],
      journal: "Integrative Medicine Review",
      year: "2024",
      category: "Clinical Studies",
      citations: 31,
      status: "Published"
    },
    {
      title: "Tulsi (Holy Basil) in Respiratory Health: Pharmacological Insights",
      authors: ["Dr. Aisha Malik", "Prof. Imran Sheikh"],
      journal: "Respiratory Medicine & Herbs",
      year: "2024",
      category: "Phytochemistry",
      citations: 18,
      status: "In Press"
    },
    {
      title: "Traditional Pulse Diagnosis: Digital Analysis and Validation",
      authors: ["Hakim Abdul Rahman", "Dr. Tech Ahmad"],
      journal: "Digital Medicine Traditional",
      year: "2024",
      category: "Traditional Systems",
      citations: 12,
      status: "Under Review"
    }
  ];

  const researchStats = [
    { label: "Total Publications", value: "125+" },
    { label: "Citations Received", value: "2,500+" },
    { label: "H-Index", value: "28" },
    { label: "International Journals", value: "45+" }
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
              Scientific Research
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Research Papers
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bridging traditional wisdom with modern science. Explore our peer-reviewed 
              research validating traditional medicine through rigorous scientific methods.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Input 
                placeholder="Search research papers..." 
                className="pl-10 pr-4 py-3"
              />
              <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Research Impact
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {researchStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Filter className="w-4 h-4 mr-2" />
              Research Categories
            </Badge>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                className="rounded-full"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Featured Research
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Groundbreaking Studies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most impactful research papers that are advancing the field of traditional medicine
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {featuredPapers.map((paper, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{paper.category}</Badge>
                      <Badge 
                        className={paper.impact === "Very High Impact" ? "trust-gradient" : "hero-gradient"}
                      >
                        {paper.impact}
                      </Badge>
                      <Badge variant="secondary">{paper.status}</Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{paper.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {paper.authors.join(", ")}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {paper.journal}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {paper.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {paper.citations} citations
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{paper.abstract}</p>
                  </div>
                  
                  <div className="flex flex-col gap-3 lg:w-48">
                    <Button className="hero-gradient">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Online
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Latest Publications
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Recent Research</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest scientific contributions to traditional medicine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {recentPapers.map((paper, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline">{paper.category}</Badge>
                  <Badge 
                    variant={paper.status === "Published" ? "default" : "secondary"}
                  >
                    {paper.status}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold mb-3">{paper.title}</h3>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {paper.authors.join(", ")}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {paper.journal}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {paper.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {paper.citations} citations
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="w-3 h-3 mr-1" />
                    PDF
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Publications
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Research Collaboration
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Join Our Research Initiative</h2>
            <p className="text-muted-foreground mb-8">
              Collaborate with our research team to advance the scientific understanding 
              of traditional medicine and contribute to global health knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient">
                <User className="w-5 h-5 mr-2" />
                Become a Collaborator
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="w-5 h-5 mr-2" />
                Submit Research
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPapers;