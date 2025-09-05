import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users, 
  Heart, 
  Globe,
  Leaf,
  Star,
  ChevronRight,
  MapPin,
  Clock,
  GraduationCap
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: Leaf,
      title: "Natural Workspace",
      description: "Eco-friendly office with organic food and herbal teas"
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on projects that affect wellness worldwide"
    }
  ];

  const openings = [
    {
      title: "Senior Ayurvedic Consultant",
      department: "Medical Team",
      location: "Karachi, Pakistan",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead our traditional medicine consultation services and mentor junior practitioners.",
      requirements: ["BAMS/BUMS degree", "5+ years clinical experience", "Digital platform experience", "English proficiency"]
    },
    {
      title: "AI/ML Engineer - Healthcare",
      department: "Technology",
      location: "Remote/Hybrid",
      type: "Full-time", 
      experience: "3+ years",
      description: "Develop AI systems for traditional medicine recommendations and health guidance.",
      requirements: ["Computer Science degree", "ML/AI expertise", "Healthcare domain knowledge", "Python/TensorFlow"]
    },
    {
      title: "Herbal Product Specialist",
      department: "Product Development",
      location: "Lahore, Pakistan",
      type: "Full-time",
      experience: "2+ years",
      description: "Research and develop authentic herbal products based on traditional formulations.",
      requirements: ["Pharmacy/Botany degree", "Herbal medicine knowledge", "Quality control experience", "Research skills"]
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead digital marketing strategies to reach global wellness communities.",
      requirements: ["Marketing degree", "Digital marketing expertise", "Healthcare marketing experience", "Analytics skills"]
    }
  ];

  const values = [
    {
      title: "Authentic Innovation",
      description: "We innovate while staying true to traditional principles"
    },
    {
      title: "Compassionate Service",
      description: "Every action is guided by genuine care for human wellbeing"
    },
    {
      title: "Global Mindset",
      description: "We think globally while honoring local wisdom and practices"
    },
    {
      title: "Continuous Learning",
      description: "We embrace lifelong learning and knowledge sharing"
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
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Mission
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Careers at Al-Nukhwa
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our passionate team in revolutionizing healthcare through traditional wisdom 
              and modern technology. Make a meaningful impact on global wellness.
            </p>
            <Button size="lg" className="hero-gradient">
              <Users className="w-5 h-5 mr-2" />
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Why Al-Nukhwa?
            </Badge>
            <h2 className="text-3xl font-bold mb-4">More Than Just a Job</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be part of a mission that combines purpose, innovation, and the opportunity to impact millions of lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-16 h-16 rounded-full hero-gradient mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              Open Positions
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities across various departments and make your mark in healthcare innovation
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{job.department}</Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="secondary">{job.experience}</Badge>
                      </div>
                    </div>
                    <Button className="hero-gradient">
                      Apply Now
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6 card-gradient">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Application Process
            </Badge>
            <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full hero-gradient mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Submit Application</h3>
                <p className="text-sm text-muted-foreground">Send your resume and cover letter</p>
              </Card>
              
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full hero-gradient mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Interview Process</h3>
                <p className="text-sm text-muted-foreground">Initial screening and technical interview</p>
              </Card>
              
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full hero-gradient mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Welcome Aboard</h3>
                <p className="text-sm text-muted-foreground">Onboarding and integration with team</p>
              </Card>
            </div>

            <div className="mt-12 p-8 card-gradient rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals who share our passion for traditional medicine and innovation. 
                Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                General Application
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;