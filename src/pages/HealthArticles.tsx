import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Search, 
  Clock, 
  User,
  Heart,
  Leaf,
  Star,
  Filter,
  ChevronRight,
  Calendar
} from "lucide-react";

const HealthArticles = () => {
  const categories = [
    { name: "All Articles", count: 156 },
    { name: "Herbal Remedies", count: 45 },
    { name: "Digestive Health", count: 32 },
    { name: "Mental Wellness", count: 28 },
    { name: "Seasonal Care", count: 25 },
    { name: "Women's Health", count: 26 }
  ];

  const featuredArticles = [
    {
      title: "The Complete Guide to Turmeric: Golden Spice for Modern Health",
      excerpt: "Discover the science-backed benefits of turmeric and how to incorporate this powerful herb into your daily routine for optimal wellness.",
      author: "Dr. Fatima Khan",
      date: "January 10, 2024",
      readTime: "8 min read",
      category: "Herbal Remedies",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      title: "Ancient Breathing Techniques for Anxiety Relief",
      excerpt: "Learn traditional pranayama and breathing exercises that have been used for centuries to calm the mind and reduce stress.",
      author: "Hakim Abdul Rahman",
      date: "January 8, 2024", 
      readTime: "6 min read",
      category: "Mental Wellness",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      title: "Winter Immunity: Traditional Foods for Cold Protection",
      excerpt: "Explore seasonal eating wisdom and traditional recipes that naturally boost your immune system during winter months.",
      author: "Dr. Ahmad Hassan",
      date: "January 5, 2024",
      readTime: "10 min read", 
      category: "Seasonal Care",
      featured: true,
      image: "/api/placeholder/400/250"
    }
  ];

  const recentArticles = [
    {
      title: "Ginger: Nature's Digestive Aid",
      excerpt: "How this common kitchen ingredient can transform your digestive health",
      author: "Dr. Fatima Khan",
      date: "January 12, 2024",
      readTime: "5 min read",
      category: "Digestive Health"
    },
    {
      title: "Sleep Herbs for Better Rest",
      excerpt: "Traditional herbs that promote deep, restorative sleep naturally",
      author: "Hakim Abdul Rahman", 
      date: "January 11, 2024",
      readTime: "7 min read",
      category: "Mental Wellness"
    },
    {
      title: "Postpartum Care in Traditional Medicine",
      excerpt: "Ancient wisdom for new mothers: herbs and practices for recovery",
      author: "Dr. Aisha Malik",
      date: "January 9, 2024",
      readTime: "9 min read",
      category: "Women's Health"
    },
    {
      title: "Holy Basil: Sacred Herb for Modern Stress",
      excerpt: "Understanding tulsi's adaptogenic properties and daily applications", 
      author: "Dr. Ahmad Hassan",
      date: "January 7, 2024",
      readTime: "6 min read",
      category: "Herbal Remedies"
    },
    {
      title: "Traditional Detox Methods for Spring",
      excerpt: "Gentle cleansing practices aligned with seasonal transitions",
      author: "Dr. Fatima Khan",
      date: "January 6, 2024",
      readTime: "8 min read",
      category: "Seasonal Care"
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
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Health Articles
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore evidence-based articles on traditional medicine, herbal remedies, 
              and holistic wellness practices written by our expert practitioners.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Input 
                placeholder="Search articles..." 
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
              Browse by Category
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

      {/* Featured Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Featured Articles
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Editor's Picks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular and comprehensive articles on traditional medicine and wellness
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    <Badge className="trust-gradient">Featured</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-tight">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <Button size="sm" variant="ghost">
                      Read More
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Latest Articles
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Recently Published</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentArticles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-12 h-12 text-primary/40" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <Button size="sm" variant="outline">
                        Read Article
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Stay Updated
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Never Miss an Article</h2>
            <p className="text-muted-foreground mb-8">
              Get our latest health articles and wellness tips delivered to your inbox weekly
            </p>
            
            <div className="flex max-w-md mx-auto gap-3">
              <Input 
                placeholder="Enter your email" 
                type="email"
                className="flex-1"
              />
              <Button className="hero-gradient">Subscribe</Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Join 50,000+ readers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthArticles;