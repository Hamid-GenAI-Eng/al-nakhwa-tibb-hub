import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HakeemRegistrationForm from "@/components/hakeem/HakeemRegistrationForm";
import {
  Edit,
  Trash2,
  Eye,
  MapPin,
  Star,
  Users,
  Heart,
  Clock,
  CreditCard,
  CheckCircle,
  Calendar,
  MessageSquare,
  Settings,
  BarChart3,
  FileText,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

// Mock Hakeem profile data
const mockHakeemProfile = {
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
  consultationFee: "Rs. 2,000",
  totalPatients: 5240,
  successRate: 92,
  monthlyConsultations: 156,
  totalEarnings: "Rs. 312,000",
};

const HakeemDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showEditForm, setShowEditForm] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handleEditProfile = () => {
    setShowEditForm(true);
  };

  const handleDeleteProfile = () => {
    // Handle profile deletion logic
    console.log("Profile deleted");
    navigate("/");
  };

  const handleViewPublicProfile = () => {
    navigate(`/hakeem/${mockHakeemProfile.id}`);
  };

  if (showEditForm) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Edit Profile</h1>
              <Button variant="outline" onClick={() => setShowEditForm(false)}>
                Cancel
              </Button>
            </div>
            <HakeemRegistrationForm 
              isEdit={true}
              initialData={mockHakeemProfile}
              onComplete={() => setShowEditForm(false)}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Dashboard Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={mockHakeemProfile.profilePicture} alt={mockHakeemProfile.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  {mockHakeemProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold">{mockHakeemProfile.name}</h1>
                  {mockHakeemProfile.verified && (
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground">{mockHakeemProfile.specialization}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {mockHakeemProfile.location}
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button onClick={handleViewPublicProfile} variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                View Public Profile
              </Button>
              <Button onClick={handleEditProfile}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Profile
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your Hakeem profile
                      and remove all your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteProfile} className="bg-destructive text-destructive-foreground">
                      Delete Profile
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Patients</p>
                    <p className="text-2xl font-bold text-primary">{mockHakeemProfile.totalPatients.toLocaleString()}</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-2xl font-bold text-green-500">{mockHakeemProfile.successRate}%</p>
                  </div>
                  <Heart className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">This Month</p>
                    <p className="text-2xl font-bold text-blue-500">{mockHakeemProfile.monthlyConsultations}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Earnings</p>
                    <p className="text-2xl font-bold text-purple-500">{mockHakeemProfile.totalEarnings}</p>
                  </div>
                  <CreditCard className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="consultations">Consultations</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-500" />
                      Recent Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b border-border pb-3 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarFallback>P{review}</AvatarFallback>
                              </Avatar>
                              <span className="font-medium text-sm">Patient {review}</span>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Excellent treatment and very knowledgeable doctor. Highly recommended!
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                      Recent Messages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[1, 2, 3].map((msg) => (
                        <div key={msg} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>P{msg}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">Patient {msg}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              Thank you for the consultation. The remedies are working well...
                            </p>
                          </div>
                          <Badge variant="outline" className="text-xs">New</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="consultations">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Consultations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((consultation) => (
                      <div key={consultation} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>P{consultation}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Patient {consultation}</p>
                            <p className="text-sm text-muted-foreground">Stomach issues consultation</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">2:00 PM</p>
                          <p className="text-sm text-muted-foreground">Today</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Start Chat
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Monthly Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Consultations</span>
                        <span className="font-bold">156</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>New Patients</span>
                        <span className="font-bold">24</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Follow-ups</span>
                        <span className="font-bold">132</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Revenue</span>
                        <span className="font-bold text-green-600">Rs. 312,000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Patient Satisfaction</span>
                          <span>4.8/5</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Response Time</span>
                          <span>Excellent</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      Profile Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Edit className="h-4 w-4 mr-2" />
                      Update Profile Information
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      Manage Availability
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Update Pricing
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Upload Documents
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/change-password')}>
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/notification-settings')}>
                      Notification Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700" onClick={logout}>
                      Logout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HakeemDashboard;