import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Stethoscope, MapPin, Star, Filter, Search, Users, MessageSquare } from "lucide-react";

const mockHakeems = [
  {
    id: "1",
    name: "Dr. Ahmad Hassan",
    specialization: "Cardiovascular Tibb",
    location: "Karachi, Pakistan",
    experience: "15 years",
    rating: 4.8,
    reviews: 245,
    avatar: "/placeholder.svg",
    verified: true,
    languages: ["Urdu", "English", "Arabic"],
    consultationFee: "Rs. 2,000"
  },
  {
    id: "2",
    name: "Dr. Fatima Sheikh",
    specialization: "Women's Health & Fertility",
    location: "Lahore, Pakistan",
    experience: "12 years",
    rating: 4.9,
    reviews: 189,
    avatar: "/placeholder.svg",
    verified: true,
    languages: ["Urdu", "English"],
    consultationFee: "Rs. 2,500"
  },
  {
    id: "3",
    name: "Hakeem Mohammad Ali",
    specialization: "Digestive Disorders",
    location: "Islamabad, Pakistan",
    experience: "20 years",
    rating: 4.7,
    reviews: 312,
    avatar: "/placeholder.svg",
    verified: false,
    languages: ["Urdu", "Punjabi"],
    consultationFee: "Rs. 1,500"
  }
];

const FindHakeem = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 card-gradient shadow-medium border-b border-border/50 backdrop-blur-sm h-16">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gradient-primary">Find Hakeem</h1>
                  <p className="text-xs text-muted-foreground">Certified Practitioners</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link to="/ai-chat">
                <Button variant="outline" size="sm">
                  AI Chat
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gradient-primary mb-4">
              Find Certified Hakeems
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with experienced traditional medicine practitioners in your area
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-card rounded-lg p-6 shadow-soft mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name or condition..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                  <SelectItem value="faisalabad">Faisalabad</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                <SelectTrigger>
                  <SelectValue placeholder="Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiovascular">Cardiovascular</SelectItem>
                  <SelectItem value="womens-health">Women's Health</SelectItem>
                  <SelectItem value="digestive">Digestive Disorders</SelectItem>
                  <SelectItem value="respiratory">Respiratory</SelectItem>
                  <SelectItem value="dermatology">Skin Conditions</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="hero" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="grid gap-6">
            {mockHakeems.map((hakeem) => (
              <Card key={hakeem.id} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={hakeem.avatar} alt={hakeem.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                          {hakeem.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-xl font-semibold">{hakeem.name}</h3>
                          {hakeem.verified && (
                            <Badge variant="secondary" className="text-xs">
                              ✓ Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary font-medium">{hakeem.specialization}</p>
                        <div className="flex items-center text-muted-foreground text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {hakeem.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Experience</p>
                        <p className="font-semibold">{hakeem.experience}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Rating</p>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-semibold">{hakeem.rating}</span>
                          <span className="text-muted-foreground ml-1">({hakeem.reviews})</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Languages</p>
                        <p className="font-semibold">{hakeem.languages.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Consultation Fee</p>
                        <p className="font-semibold text-primary">{hakeem.consultationFee}</p>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Button variant="hero" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Book Consultation
                      </Button>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-muted/30 border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Are you a Hakeem?</h2>
                <p className="text-muted-foreground mb-6">
                  Join our platform to connect with patients seeking traditional medicine expertise
                </p>
                <Button variant="hero" size="lg">
                  Register as Hakeem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FindHakeem;