import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Download, 
  Image, 
  FileText, 
  Users, 
  Globe,
  Award,
  Camera,
  Palette,
  ChevronRight
} from "lucide-react";

const PressKit = () => {
  const brandAssets = [
    {
      category: "Logos",
      items: [
        { name: "Primary Logo (PNG)", size: "2MB", format: "PNG" },
        { name: "Logo with Tagline", size: "1.8MB", format: "PNG" },
        { name: "Logo White Version", size: "1.5MB", format: "PNG" },
        { name: "Logo Icon Only", size: "800KB", format: "PNG" }
      ]
    },
    {
      category: "Brand Guidelines",
      items: [
        { name: "Brand Style Guide", size: "5MB", format: "PDF" },
        { name: "Color Palette", size: "2MB", format: "PDF" },
        { name: "Typography Guidelines", size: "3MB", format: "PDF" },
        { name: "Usage Guidelines", size: "4MB", format: "PDF" }
      ]
    },
    {
      category: "Images & Photography",
      items: [
        { name: "Product Photography", size: "15MB", format: "ZIP" },
        { name: "Team Photos", size: "12MB", format: "ZIP" },
        { name: "Office & Workspace", size: "10MB", format: "ZIP" },
        { name: "Lifestyle Images", size: "18MB", format: "ZIP" }
      ]
    }
  ];

  const pressReleases = [
    {
      date: "January 15, 2024",
      title: "Al-Nukhwa Launches AI-Powered Traditional Medicine Platform",
      description: "Revolutionary platform combines ancient healing wisdom with modern technology"
    },
    {
      date: "October 20, 2023", 
      title: "Al-Nukhwa Reaches 100,000 Users Milestone",
      description: "Global community celebrates major user milestone across 50+ countries"
    },
    {
      date: "July 8, 2023",
      title: "Partnership Announcement with Leading Herbal Research Institute",
      description: "Strategic collaboration to advance traditional medicine research"
    }
  ];

  const companyFacts = [
    { label: "Founded", value: "2020" },
    { label: "Headquarters", value: "Karachi, Pakistan" },
    { label: "Global Users", value: "100,000+" },
    { label: "Countries Served", value: "50+" },
    { label: "Team Size", value: "50+" },
    { label: "Funding Status", value: "Bootstrapped" }
  ];

  const leadership = [
    {
      name: "Dr. Ahmad Hassan",
      role: "Founder & CEO",
      bio: "Traditional medicine expert with 25+ years experience in healthcare innovation"
    },
    {
      name: "Dr. Fatima Malik",
      role: "Chief Medical Officer",
      bio: "Leading researcher in integrative medicine and herbal therapeutics"
    },
    {
      name: "Hakim Abdul Rahman",
      role: "Traditional Medicine Advisor", 
      bio: "Master practitioner with 40+ years in classical Unani medicine"
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
              <FileText className="w-4 h-4 mr-2" />
              Media Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Press Kit
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Everything you need to tell the Al-Nukhwa story. High-resolution assets, 
              company information, and media resources for journalists and partners.
            </p>
            <Button size="lg" className="hero-gradient">
              <Download className="w-5 h-5 mr-2" />
              Download Complete Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Company Overview
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Al-Nukhwa at a Glance</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {companyFacts.map((fact, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{fact.value}</div>
                <div className="text-sm text-muted-foreground">{fact.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Palette className="w-4 h-4 mr-2" />
              Brand Assets
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Logos & Brand Materials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-resolution logos, brand guidelines, and visual assets for media use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {brandAssets.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    {category.category === 'Logos' && <Image className="w-5 h-5" />}
                    {category.category === 'Brand Guidelines' && <FileText className="w-5 h-5" />}
                    {category.category === 'Images & Photography' && <Camera className="w-5 h-5" />}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.format} • {item.size}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Latest News
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Recent Press Releases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest announcements and company news
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">{release.date}</Badge>
                    <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                    <p className="text-muted-foreground">{release.description}</p>
                  </div>
                  <Button variant="outline">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
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
            <h2 className="text-3xl font-bold mb-4">Meet Our Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Executive biographies and high-resolution photos available for media use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-20 h-20 rounded-full hero-gradient mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-3">{leader.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="w-3 h-3 mr-1" />
                    Bio
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1">
                    <Camera className="w-3 h-3 mr-1" />
                    Photo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Media Contact
            </Badge>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3">General Media Inquiries</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Email: press@alnukhwa.com</p>
                  <p>Phone: +92 300 123 4567</p>
                  <p>Response Time: Within 24 hours</p>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3">Partnership Inquiries</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Email: partnerships@alnukhwa.com</p>
                  <p>Phone: +92 300 123 4568</p>
                  <p>Response Time: Within 48 hours</p>
                </div>
              </Card>
            </div>

            <div className="mt-8 p-6 card-gradient rounded-xl">
              <h3 className="text-xl font-bold mb-3">Media Guidelines</h3>
              <p className="text-muted-foreground text-sm">
                When featuring Al-Nukhwa in your publication, please use our official brand assets 
                and refer to our brand guidelines for proper logo usage and company description. 
                High-resolution images and executive photos are available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default PressKit;