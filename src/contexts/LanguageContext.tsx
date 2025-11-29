import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ur";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    "nav.aiAssistant": "AI Assistant",
    "nav.findHakeem": "Find Hakeem",
    "nav.products": "Products",
    "nav.community": "Community",
    "nav.getStarted": "Get Started",
    
    // Hero Section
    "hero.badge": "Reviving Wisdom of Tibb with AI",
    "hero.healing": "Healing Through",
    "hero.nature": "Nature & Wisdom",
    "hero.description": "Al-Nakhwa combines ancient Desi medicine wisdom with modern AI technology. Get personalized health guidance, consult certified Hakeems, and access premium natural remedies.",
    "hero.askAI": "Ask Our AI Hakeem",
    "hero.aiSubtitle": "Get instant guidance on Desi remedies",
    "hero.placeholder": "Ask about any health concern, remedy, or ingredient...",
    "hero.getGuidance": "Get AI Guidance",
    "hero.tryAsking": "Try asking:",
    "hero.sample1": "Best remedy for cold",
    "hero.sample2": "Benefits of turmeric",
    "hero.sample3": "Digestive herbs",
    "hero.certified": "Certified Remedies",
    "hero.licensed": "Licensed Hakeems",
    "hero.satisfied": "10k+ Satisfied Users",
    "hero.premium": "Premium Quality",
    "hero.authenticated": "Authenticated Remedies",
    
    // Services
    "services.badge": "Our Services",
    "services.complete": "Complete Healthcare",
    "services.ecosystem": "Ecosystem",
    "services.description": "From AI-powered guidance to expert consultations, premium medicines to global community - everything you need for holistic Desi healthcare.",
    "services.hakeem.title": "Find & Consult Hakeem",
    "services.hakeem.desc": "Connect with certified Hakeems across Pakistan and globally. Book consultations, view ratings, and get personalized Tibb guidance.",
    "services.hakeem.feat1": "Verified Profiles",
    "services.hakeem.feat2": "Online/Offline Consultation",
    "services.hakeem.feat3": "Rating System",
    "services.hakeem.feat4": "Multi-language Support",
    "services.hakeem.stats": "Active Hakeems",
    "services.hakeem.badge": "Most Trusted",
    "services.store.title": "Premium Medicine Store",
    "services.store.desc": "Authentic Desi medicines, herbs, and natural ingredients. All products are quality-tested and certified for purity and effectiveness.",
    "services.store.feat1": "Certified Products",
    "services.store.feat2": "Same-day Delivery",
    "services.store.feat3": "Money-back Guarantee",
    "services.store.feat4": "Bulk Orders Available",
    "services.store.stats": "Products Available",
    "services.store.badge": "Quality Assured",
    "services.community.title": "Global Hakeem Community",
    "services.community.desc": "A professional network where Hakeems worldwide share knowledge, research, and collaborate on traditional medicine advancements.",
    "services.community.feat1": "Research Sharing",
    "services.community.feat2": "Case Discussions",
    "services.community.feat3": "Peer Review",
    "services.community.feat4": "Continuing Education",
    "services.community.stats": "Community Members",
    "services.community.badge": "Knowledge Hub",
    "services.explore": "Explore",
    "services.join": "Join Pakistan's Leading Tibb Platform",
    "services.joinDesc": "Over 10,000 satisfied customers trust Al-Nakhwa for their traditional medicine needs. Experience the perfect blend of ancient wisdom and modern convenience.",
    "services.startJourney": "Start Your Journey",
    "services.learnMore": "Learn More",
    
    // Footer
    "footer.stayConnected": "Stay Connected",
    "footer.getTips": "Get Health Tips & Updates",
    "footer.subscribeDesc": "Subscribe to receive weekly Desi health tips, new remedy discoveries, and exclusive offers.",
    "footer.emailPlaceholder": "Enter your email",
    "footer.subscribe": "Subscribe",
    "footer.tagline": "Reviving the wisdom of traditional Desi medicine with modern AI technology. Your trusted partner in natural healing and wellness.",
    "footer.isoCertified": "ISO Certified",
    "footer.whoApproved": "WHO Approved",
    "footer.natural": "100% Natural",
    "footer.services": "Services",
    "footer.aiHealth": "AI Health Guidance",
    "footer.findHakeem": "Find Hakeem",
    "footer.medicineStore": "Medicine Store",
    "footer.globalCommunity": "Global Community",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.ourStory": "Our Story",
    "footer.careers": "Careers",
    "footer.pressKit": "Press Kit",
    "footer.resources": "Resources",
    "footer.healthArticles": "Health Articles",
    "footer.remedyGuide": "Remedy Guide",
    "footer.researchPapers": "Research Papers",
    "footer.journal": "Al-Nukhwa Journal",
    "footer.faqs": "FAQs",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.disclaimer": "Medical Disclaimer",
    "footer.refund": "Refund Policy",
    "footer.getInTouch": "Get In Touch",
    "footer.address": "Address",
    "footer.addressValue": "Karachi, Pakistan",
    "footer.phone": "Phone",
    "footer.phoneValue": "+92 300 1234567",
    "footer.email": "Email",
    "footer.emailValue": "info@alnakhwa.com",
    "footer.copyright": "© 2024 Al-Nakhwa Tibb Hub. All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.inPakistan": "in Pakistan",
  },
  ur: {
    // Header - اردو
    "nav.aiAssistant": "اے آئی معاون",
    "nav.findHakeem": "حکیم تلاش کریں",
    "nav.products": "مصنوعات",
    "nav.community": "کمیونٹی",
    "nav.getStarted": "شروع کریں",
    
    // Hero Section - اردو
    "hero.badge": "جدید ٹیکنالوجی کے ساتھ طب کی حکمت کا احیاء",
    "hero.healing": "شفا کا سفر",
    "hero.nature": "قدرت اور حکمت کے ساتھ",
    "hero.description": "النخوہ قدیم دیسی طب کی حکمت کو جدید اے آئی ٹیکنالوجی کے ساتھ ملاتا ہے۔ ذاتی صحت کی رہنمائی حاصل کریں، تصدیق شدہ حکیموں سے مشورہ کریں، اور اعلیٰ قدرتی علاج تک رسائی حاصل کریں۔",
    "hero.askAI": "ہمارے اے آئی حکیم سے پوچھیں",
    "hero.aiSubtitle": "دیسی علاج پر فوری رہنمائی حاصل کریں",
    "hero.placeholder": "کسی بھی صحت کے مسئلے، علاج، یا اجزاء کے بارے میں پوچھیں...",
    "hero.getGuidance": "اے آئی رہنمائی حاصل کریں",
    "hero.tryAsking": "پوچھنے کی کوشش کریں:",
    "hero.sample1": "نزلہ زکام کا بہترین علاج",
    "hero.sample2": "ہلدی کے فوائد",
    "hero.sample3": "ہاضمے کی جڑی بوٹیاں",
    "hero.certified": "تصدیق شدہ علاج",
    "hero.licensed": "لائسنس یافتہ حکیم",
    "hero.satisfied": "10 ہزار سے زائد مطمئن صارفین",
    "hero.premium": "اعلیٰ معیار",
    "hero.authenticated": "تصدیق شدہ علاج",
    
    // Services - اردو
    "services.badge": "ہماری خدمات",
    "services.complete": "مکمل صحت کی دیکھ بھال",
    "services.ecosystem": "نظام",
    "services.description": "اے آئی سے چلنے والی رہنمائی سے لے کر ماہرین سے مشاورت، اعلیٰ ادویات سے لے کر عالمی کمیونٹی تک - جامع دیسی صحت کی دیکھ بھال کے لیے آپ کو جو کچھ چاہیے۔",
    "services.hakeem.title": "حکیم تلاش کریں اور مشورہ کریں",
    "services.hakeem.desc": "پاکستان اور دنیا بھر میں تصدیق شدہ حکیموں سے رابطہ کریں۔ مشاورت بک کریں، درجہ بندی دیکھیں، اور ذاتی طب رہنمائی حاصل کریں۔",
    "services.hakeem.feat1": "تصدیق شدہ پروفائلز",
    "services.hakeem.feat2": "آن لائن/آف لائن مشاورت",
    "services.hakeem.feat3": "درجہ بندی کا نظام",
    "services.hakeem.feat4": "کثیر لسانی معاونت",
    "services.hakeem.stats": "فعال حکیم",
    "services.hakeem.badge": "سب سے زیادہ قابل اعتماد",
    "services.store.title": "پریمیم دوا کی دکان",
    "services.store.desc": "مستند دیسی ادویات، جڑی بوٹیاں، اور قدرتی اجزاء۔ تمام مصنوعات کی معیار کی جانچ کی جاتی ہے اور پاکیزگی اور تاثیر کے لیے تصدیق شدہ ہیں۔",
    "services.store.feat1": "تصدیق شدہ مصنوعات",
    "services.store.feat2": "اسی دن ترسیل",
    "services.store.feat3": "رقم واپسی کی ضمانت",
    "services.store.feat4": "تھوک آرڈرز دستیاب",
    "services.store.stats": "دستیاب مصنوعات",
    "services.store.badge": "معیار کی یقین دہانی",
    "services.community.title": "عالمی حکیم کمیونٹی",
    "services.community.desc": "ایک پیشہ ورانہ نیٹ ورک جہاں دنیا بھر کے حکیم علم، تحقیق شیئر کرتے ہیں، اور روایتی طب کی ترقی میں تعاون کرتے ہیں۔",
    "services.community.feat1": "تحقیق کا اشتراک",
    "services.community.feat2": "کیس بحث",
    "services.community.feat3": "ہم مرتبہ جائزہ",
    "services.community.feat4": "مسلسل تعلیم",
    "services.community.stats": "کمیونٹی ممبران",
    "services.community.badge": "علم کا مرکز",
    "services.explore": "دریافت کریں",
    "services.join": "پاکستان کے سرکردہ طب پلیٹ فارم میں شامل ہوں",
    "services.joinDesc": "10,000 سے زیادہ مطمئن گاہک اپنی روایتی ادویات کی ضروریات کے لیے النخوہ پر اعتماد کرتے ہیں۔ قدیم حکمت اور جدید سہولت کے کامل امتزاج کا تجربہ کریں۔",
    "services.startJourney": "اپنا سفر شروع کریں",
    "services.learnMore": "مزید جانیں",
    
    // Footer - اردو
    "footer.stayConnected": "منسلک رہیں",
    "footer.getTips": "صحت کے نکات اور اپ ڈیٹس حاصل کریں",
    "footer.subscribeDesc": "ہفتہ وار دیسی صحت کے نکات، نئے علاج کی دریافتیں، اور خصوصی پیشکشیں حاصل کرنے کے لیے سبسکرائب کریں۔",
    "footer.emailPlaceholder": "اپنا ای میل درج کریں",
    "footer.subscribe": "سبسکرائب کریں",
    "footer.tagline": "جدید اے آئی ٹیکنالوجی کے ساتھ روایتی دیسی طب کی حکمت کا احیاء۔ قدرتی شفا اور تندرستی میں آپ کا قابل اعتماد ساتھی۔",
    "footer.isoCertified": "آئی ایس او تصدیق شدہ",
    "footer.whoApproved": "ڈبلیو ایچ او منظور شدہ",
    "footer.natural": "100% قدرتی",
    "footer.services": "خدمات",
    "footer.aiHealth": "اے آئی صحت کی رہنمائی",
    "footer.findHakeem": "حکیم تلاش کریں",
    "footer.medicineStore": "دوا کی دکان",
    "footer.globalCommunity": "عالمی کمیونٹی",
    "footer.company": "کمپنی",
    "footer.aboutUs": "ہمارے بارے میں",
    "footer.ourStory": "ہماری کہانی",
    "footer.careers": "کیریئر",
    "footer.pressKit": "پریس کٹ",
    "footer.resources": "وسائل",
    "footer.healthArticles": "صحت کے مضامین",
    "footer.remedyGuide": "علاج کی رہنما",
    "footer.researchPapers": "تحقیقی مقالے",
    "footer.journal": "النخوہ جرنل",
    "footer.faqs": "عمومی سوالات",
    "footer.legal": "قانونی",
    "footer.privacy": "رازداری کی پالیسی",
    "footer.terms": "خدمات کی شرائط",
    "footer.disclaimer": "طبی دستبرداری",
    "footer.refund": "رقم کی واپسی کی پالیسی",
    "footer.getInTouch": "رابطہ کریں",
    "footer.address": "پتہ",
    "footer.addressValue": "کراچی، پاکستان",
    "footer.phone": "فون",
    "footer.phoneValue": "0300 1234567+92",
    "footer.email": "ای میل",
    "footer.emailValue": "info@alnakhwa.com",
    "footer.copyright": "© 2024 النخوہ طب حب۔ تمام حقوق محفوظ ہیں۔",
    "footer.madeWith": "بنایا گیا",
    "footer.inPakistan": "پاکستان میں",
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Apply RTL and font for Urdu
    if (language === "ur") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ur";
      document.body.style.fontFamily = "'Noto Nastaliq Urdu', 'Amiri', serif";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
      document.body.style.fontFamily = "";
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ur" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};