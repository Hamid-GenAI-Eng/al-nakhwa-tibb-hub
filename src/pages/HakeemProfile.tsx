import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Star,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  Calendar,
  Award,
  GraduationCap,
  Shield,
  Users,
  Heart,
  CheckCircle,
  Video,
  Home,
  CreditCard,
} from "lucide-react";

// Mock data - in real app, this would come from API
const mockHakeem = {
  id: "1",
  name: "Dr. Ahmad Hassan",
  fatherName: "Mohammad Hassan",
  profilePicture: "/placeholder.svg",
  specialization: "Cardiovascular Tibb & Digestive Disorders",
  location: "Model Town, Lahore, Punjab, Pakistan",
  experience: "15 years",
  rating: 4.8,
  reviews: 245,
  verified: true,
  languages: ["Urdu", "English", "Arabic"],
  consultationFee: "Rs. 2,000",
  clinicName: "Hassan Tibb Center",
  
  // Professional Details
  degrees: ["BEMS", "Tibb-e-Unani", "Hikmat"],
  instituteName: "Hamdard University Karachi",
  licenseNumber: "TU-2024-1234",
  yearsExperience: "15 years",
  
  // Services & Availability
  consultationType: ["In-person", "Online"],
  availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  availableTimings: "9:00 AM - 6:00 PM",
  servicesOffered: ["Diagnosis", "Herbal Remedies", "Diet Counseling", "Cupping Therapy"],
  paymentMethods: ["Cash", "JazzCash", "Easypaisa", "Bank Transfer"],
  
  // Contact Information
  phoneNumber: "+92 300 1234567",
  email: "dr.ahmad@example.com",
  clinicAddress: "123 Model Town, Block A, Lahore, Punjab",
  
  // Additional Information
  biography: "Dr. Ahmad Hassan has been practicing traditional medicine for over 15 years, specializing in cardiovascular and digestive disorders. He combines ancient wisdom with modern diagnostic techniques to provide holistic healing solutions.",
  experienceHighlights: "Successfully treated over 5,000 patients with stomach and liver diseases. Expert in herbal formulations and dietary therapy.",
  
  // Specialties
  specialties: ["Stomach Issues", "Liver Diseases", "Cardiovascular", "Joint Pain"],
  areasOfFocus: ["General Hakeem", "Herbalist", "Diet & Nutrition"],
  
  // Stats
  totalPatients: 5240,
  successRate: 92,
  awards: ["Best Traditional Healer 2023", "Excellence in Herbal Medicine 2022"],
};

const HakeemProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // In real app, fetch hakeem data based on id
  const hakeem = mockHakeem;

  const handleBookConsultation = () => {
    navigate(`/consultation/${id}`);
  };

  const handleStartChat = () => {
    navigate(`/chat/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>

          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Avatar & Basic Info */}
                <div className="flex flex-col items-center lg:items-start">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src={hakeem.profilePicture} alt={hakeem.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                      {hakeem.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <h1 className="text-3xl font-bold">{hakeem.name}</h1>
                      {hakeem.verified && (
                        <Badge variant="default" className="bg-green-500">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-1">S/O {hakeem.fatherName}</p>
                    <p className="text-xl text-primary font-semibold mb-2">{hakeem.specialization}</p>
                    <div className="flex items-center justify-center lg:justify-start text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {hakeem.location}
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-semibold">{hakeem.rating}</span>
                        <span className="text-muted-foreground ml-1">({hakeem.reviews} reviews)</span>
                      </div>
                      <Badge variant="outline">{hakeem.experience}</Badge>
                    </div>
                  </div>
                </div>

                {/* Stats & Action Buttons */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-primary">{hakeem.totalPatients.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Total Patients</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-red-500">{hakeem.successRate}%</p>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-500">{hakeem.experience}</p>
                      <p className="text-sm text-muted-foreground">Experience</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <CreditCard className="h-6 w-6 text-green-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-500">{hakeem.consultationFee}</p>
                      <p className="text-sm text-muted-foreground">Consultation</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" onClick={handleBookConsultation} className="flex-1">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Consultation
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleStartChat} className="flex-1">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="credentials">Credentials</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>About Dr. {hakeem.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Biography</h3>
                    <p className="text-muted-foreground">{hakeem.biography}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Experience Highlights</h3>
                    <p className="text-muted-foreground">{hakeem.experienceHighlights}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {hakeem.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Areas of Focus</h3>
                    <div className="flex flex-wrap gap-2">
                      {hakeem.areasOfFocus.map((focus) => (
                        <Badge key={focus} variant="outline">
                          {focus}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Languages</h3>
                    <p className="text-muted-foreground">{hakeem.languages.join(', ')}</p>
                  </div>

                  {hakeem.awards.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-yellow-500" />
                        Awards & Achievements
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {hakeem.awards.map((award, index) => (
                          <li key={index}>{award}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="credentials">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Professional Credentials
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Education & Certifications</h3>
                    <div className="space-y-2">
                      {hakeem.degrees.map((degree) => (
                        <Badge key={degree} variant="secondary" className="mr-2">
                          {degree}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground mt-2">
                      Institute: {hakeem.instituteName}
                    </p>
                  </div>

                  {hakeem.licenseNumber && (
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-green-500" />
                        Professional License
                      </h3>
                      <p className="text-muted-foreground">
                        License Number: {hakeem.licenseNumber}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold mb-2">Years of Practice</h3>
                    <p className="text-muted-foreground">{hakeem.yearsExperience}</p>
                  </div>

                  <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <p className="font-semibold text-green-800">Verified Professional</p>
                      <p className="text-sm text-green-600">
                        All credentials have been verified and authenticated
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle>Services & Consultation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Clinic Information</h3>
                    <p className="text-muted-foreground">{hakeem.clinicName}</p>
                    <p className="text-muted-foreground">{hakeem.clinicAddress}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Consultation Types</h3>
                    <div className="flex gap-2">
                      {hakeem.consultationType.map((type) => (
                        <Badge key={type} variant="outline">
                          {type === "In-person" && <Home className="h-3 w-3 mr-1" />}
                          {type === "Online" && <Video className="h-3 w-3 mr-1" />}
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Services Offered</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {hakeem.servicesOffered.map((service) => (
                        <div key={service} className="flex items-center p-2 bg-muted/50 rounded">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Consultation Fee</h3>
                    <p className="text-2xl font-bold text-primary">{hakeem.consultationFee}</p>
                    <p className="text-sm text-muted-foreground">Per session</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Payment Methods</h3>
                    <div className="flex flex-wrap gap-2">
                      {hakeem.paymentMethods.map((method) => (
                        <Badge key={method} variant="outline">
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="availability">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Availability & Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Available Days</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                        <div
                          key={day}
                          className={`p-2 text-center rounded text-sm ${
                            hakeem.availableDays.includes(day)
                              ? 'bg-green-100 text-green-800 border border-green-200'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {day.substring(0, 3)}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Working Hours
                    </h3>
                    <p className="text-lg text-primary font-semibold">{hakeem.availableTimings}</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Appointment booking is recommended. Walk-in consultations 
                      are subject to availability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">Get in Touch</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-muted-foreground mr-3" />
                          <span>{hakeem.phoneNumber}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-muted-foreground mr-3" />
                          <span>{hakeem.email}</span>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-muted-foreground mr-3 mt-1" />
                          <span>{hakeem.clinicAddress}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Quick Actions</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link to={`/chat/${hakeem.id}`}>
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Start Chat
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Location Map</h3>
                    <div className="bg-muted/30 rounded-lg p-8 text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive map would be displayed here</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {hakeem.clinicAddress}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HakeemProfile;