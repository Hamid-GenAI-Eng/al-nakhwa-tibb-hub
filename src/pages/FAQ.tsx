import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  HelpCircle, 
  Search, 
  MessageCircle,
  Leaf,
  Shield,
  Clock,
  Heart,
  Phone,
  Mail
} from "lucide-react";

const FAQ = () => {
  const categories = [
    { name: "General", icon: HelpCircle, count: 12 },
    { name: "Remedies", icon: Leaf, count: 18 },
    { name: "Safety", icon: Shield, count: 8 },
    { name: "Orders", icon: Clock, count: 15 },
    { name: "Consultation", icon: MessageCircle, count: 10 }
  ];

  const generalFAQs = [
    {
      question: "What is Al-Nukhwa and how does it work?",
      answer: "Al-Nukhwa is a comprehensive platform that bridges traditional Desi medicine with modern technology. We provide AI-powered health guidance, connect you with certified practitioners (Hakeems), offer authentic herbal products, and maintain a global community focused on natural wellness. Our platform combines centuries-old healing wisdom with scientific validation."
    },
    {
      question: "Are your remedies scientifically validated?",
      answer: "Yes, we take scientific validation seriously. Our team includes qualified doctors and researchers who review traditional remedies through a modern scientific lens. We publish peer-reviewed research, conduct clinical studies, and ensure all recommendations are backed by both traditional wisdom and contemporary evidence."
    },
    {
      question: "How do I know if traditional medicine is right for me?",
      answer: "Traditional medicine can complement modern healthcare, but it's important to consult with healthcare providers. Our AI guidance system asks detailed questions about your health status, and we always recommend speaking with our certified Hakeems for personalized advice. We also encourage consulting your regular doctor, especially if you have existing medical conditions."
    },
    {
      question: "What makes Al-Nukhwa different from other health platforms?",
      answer: "We specialize exclusively in traditional Desi medicine, combining authentic practices with modern technology. Our team includes master practitioners with decades of experience, we maintain strict quality standards for all products, and we focus on education and community building rather than just selling products."
    }
  ];

  const remedyFAQs = [
    {
      question: "How do I prepare the remedies correctly?",
      answer: "Each remedy comes with detailed preparation instructions including ingredient measurements, cooking times, and proper techniques. We provide step-by-step videos for complex preparations and have a support team available to answer specific questions about remedy preparation."
    },
    {
      question: "What if I'm allergic to certain herbs?",
      answer: "Always check ingredient lists carefully and consult with our practitioners if you have known allergies. Our AI system asks about allergies during consultations, and we maintain detailed allergen information for all recommended herbs and remedies."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary depending on the condition, remedy type, and individual constitution. Acute conditions may show improvement within days, while chronic issues may require weeks or months of consistent use. Our practitioners provide realistic timelines during consultations."
    },
    {
      question: "Can I combine traditional remedies with modern medicine?",
      answer: "Many traditional remedies can be safely combined with modern medicine, but this requires professional guidance. Always inform both your doctor and our practitioners about all medications and supplements you're taking to avoid potential interactions."
    }
  ];

  const safetyFAQs = [
    {
      question: "Are traditional medicines safe during pregnancy?",
      answer: "Some traditional remedies are safe during pregnancy while others should be avoided. We have specialized guidance for pregnant women and always recommend consulting with both your obstetrician and our experienced practitioners before using any herbal remedies during pregnancy."
    },
    {
      question: "What are the side effects of herbal medicines?",
      answer: "While generally safer than synthetic drugs, herbal medicines can still have side effects, especially if used incorrectly or in excessive amounts. We provide detailed information about potential side effects and contraindications for all remedies and products."
    },
    {
      question: "How do you ensure product quality?",
      answer: "We source ingredients from certified organic suppliers, conduct third-party testing for purity and potency, maintain proper storage conditions, and follow strict manufacturing protocols. All products come with quality certificates and batch information."
    }
  ];

  const consultationFAQs = [
    {
      question: "How does the AI consultation work?",
      answer: "Our AI system asks detailed questions about your symptoms, health history, lifestyle, and constitution. It then provides preliminary guidance based on traditional diagnostic principles and recommends whether you need a consultation with a human practitioner."
    },
    {
      question: "What qualifications do your practitioners have?",
      answer: "All our practitioners are certified in traditional medicine systems (Unani, Ayurveda, or similar) with minimum 5 years of experience. Many hold advanced degrees and have additional training in modern integrative medicine approaches."
    },
    {
      question: "Can I get consultations in my local language?",
      answer: "We offer consultations in multiple languages including English, Urdu, Hindi, Arabic, and others. Our practitioners are multilingual, and we also provide translation services when needed."
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
              <HelpCircle className="w-4 h-4 mr-2" />
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Find answers to common questions about traditional medicine, our platform, 
              and how to get started with natural healing.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Input 
                placeholder="Search for answers..." 
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
              Browse by Category
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 hover-lift cursor-pointer">
                <category.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-sm mb-1">{category.name}</h3>
                <Badge variant="secondary" className="text-xs">{category.count} questions</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              General Questions
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Remedy FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Leaf className="w-4 h-4 mr-2" />
              About Remedies
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Using Natural Remedies</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {remedyFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`remedy-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Safety FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Safety & Quality
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Safety Guidelines</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {safetyFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`safety-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Consultation FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              Consultations
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Getting Expert Advice</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {consultationFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`consultation-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Still Need Help?
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our support team is here to help 
              with personalized assistance for all your questions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="p-6">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Call Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak directly with our experts
                </p>
                <Button variant="outline" className="w-full">
                  +92 300 123 4567
                </Button>
              </Card>
              
              <Card className="p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get detailed answers via email
                </p>
                <Button className="w-full hero-gradient">
                  Contact Support
                </Button>
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

export default FAQ;