import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowLeft, Languages, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ConsultationHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { name: "English", code: "en" },
    { name: "اردو", code: "ur" },
    { name: "العربية", code: "ar" },
    { name: "हिंदी", code: "hi" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 card-gradient shadow-medium border-b border-border/50 backdrop-blur-sm h-16">
      <div className="container mx-auto px-2 sm:px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <SidebarTrigger className="lg:hidden" />
            
            <Link to="/ai-chat">
              <Button variant="ghost" size="sm" className="h-8 px-2 sm:px-3">
                <ArrowLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Back</span>
              </Button>
            </Link>
            
            {/* Logo */}
            <div className="hidden lg:flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ا</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gradient-primary">Al-Nakhwa</h1>
                <p className="text-xs text-muted-foreground">Consultation</p>
              </div>
            </div>
          </div>

          {/* Center - Title for mobile */}
          <div className="lg:hidden">
            <h2 className="text-lg font-semibold text-gradient-primary">Consultation</h2>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 px-2 sm:px-3">
                  <Languages className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">{selectedLanguage}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.name)}
                    className={selectedLanguage === lang.name ? "bg-muted" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
              <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ConsultationHeader;