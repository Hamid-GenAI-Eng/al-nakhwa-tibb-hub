import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Calendar, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Legal Document
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your privacy and data security are our top priorities. Learn how we collect, 
              use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Last updated: January 15, 2024
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 card-gradient shadow-soft">
              <CardContent className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support. This includes your name, email address, 
                  health information for consultations, and communication preferences.
                </p>

                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="mb-6">
                  We use your information to provide our services, improve user experience, 
                  conduct research to advance traditional medicine, and communicate with you 
                  about updates and relevant health information.
                </p>

                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="mb-6">
                  We implement robust security measures to protect your personal information, 
                  including encryption, secure servers, and regular security audits. Your health 
                  information is handled with the highest level of confidentiality.
                </p>

                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>privacy@alnukhwa.com</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;