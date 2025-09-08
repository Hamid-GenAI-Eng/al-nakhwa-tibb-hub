import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import Community from "./pages/Community";
import AIChat from "./pages/AIChat";
import FindHakeem from "./pages/FindHakeem";
import HakeemProfile from "./pages/HakeemProfile";
import HakeemChat from "./pages/HakeemChat";
import HakeemDashboard from "./pages/HakeemDashboard";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import PaymentMethod from "./pages/PaymentMethod";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderTracking from "./pages/OrderTracking";
import AboutUs from "./pages/AboutUs";
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import PressKit from "./pages/PressKit";
import HealthArticles from "./pages/HealthArticles";
import RemedyGuide from "./pages/RemedyGuide";
import ResearchPapers from "./pages/ResearchPapers";
import AlNukhwaJournal from "./pages/AlNukhwaJournal";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/community" 
              element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ai-chat" 
              element={
                <ProtectedRoute>
                  <AIChat />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/find-hakeem" 
              element={
                <ProtectedRoute>
                  <FindHakeem />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/hakeem/:id" 
              element={
                <ProtectedRoute>
                  <HakeemProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/chat/:id" 
              element={
                <ProtectedRoute>
                  <HakeemChat />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/hakeem-dashboard" 
              element={
                <ProtectedRoute>
                  <HakeemDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/products" 
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/consultation" 
              element={
                <ProtectedRoute>
                  <Consultation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/product/:id" 
              element={
                <ProtectedRoute>
                  <ProductDetail />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/cart" 
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/wishlist" 
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/payment-method" 
              element={
                <ProtectedRoute>
                  <PaymentMethod />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/order-confirmation" 
              element={
                <ProtectedRoute>
                  <OrderConfirmation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/order-tracking" 
              element={
                <ProtectedRoute>
                  <OrderTracking />
                </ProtectedRoute>
              } 
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="/health-articles" element={<HealthArticles />} />
            <Route path="/remedy-guide" element={<RemedyGuide />} />
            <Route path="/research-papers" element={<ResearchPapers />} />
            <Route path="/al-nukhwa-journal" element={<AlNukhwaJournal />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
