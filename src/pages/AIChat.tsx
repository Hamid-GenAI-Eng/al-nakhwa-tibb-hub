import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Sparkles, Users } from "lucide-react";

const AIChat = () => {
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
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gradient-primary">AI Hakeem Assistant</h1>
                  <p className="text-xs text-muted-foreground">Traditional Medicine AI</p>
                </div>
              </div>
            </div>
            <Link to="/community">
              <Button variant="outline" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Community
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full hero-gradient flex items-center justify-center mx-auto mb-6">
              <Bot className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-gradient-primary mb-4">
              AI Hakeem Assistant
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized traditional medicine advice powered by centuries of Tibb wisdom and modern AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Instant Consultation
                </CardTitle>
                <CardDescription>
                  Chat with our AI assistant trained on traditional Tibb knowledge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="hero" className="w-full">
                  Start AI Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" />
                  Personalized Advice
                </CardTitle>
                <CardDescription>
                  Get customized recommendations based on your symptoms and history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">AI Chat Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We're building an advanced AI assistant that combines traditional Tibb wisdom with modern technology. 
              Stay tuned for personalized health consultations based on Unani medicine principles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/community">
                <Button variant="hero">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
              </Link>
              <Link to="/find-hakeem">
                <Button variant="outline">
                  Find a Hakeem
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIChat;