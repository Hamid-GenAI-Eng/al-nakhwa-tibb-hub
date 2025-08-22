import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Bell, MessageCircle, Settings, ArrowLeft, Bot, Stethoscope, Package } from "lucide-react";

const CommunityHeader = () => {
  return (
    <header className="fixed top-0 w-full z-50 card-gradient shadow-medium border-b border-border/50 backdrop-blur-sm h-16">
      <div className="container mx-auto px-2 sm:px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <SidebarTrigger className="lg:hidden" />
            
            {/* Navigation buttons - visible on mobile */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Link to="/">
                <Button variant="ghost" size="sm" className="h-8 px-2 sm:px-3">
                  <ArrowLeft className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Home</span>
                </Button>
              </Link>
              <Link to="/ai-chat">
                <Button variant="ghost" size="sm" className="h-8 px-2 sm:px-3">
                  <Bot className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">AI Chat</span>
                </Button>
              </Link>
              <Link to="/find-hakeem">
                <Button variant="ghost" size="sm" className="h-8 px-2 sm:px-3">
                  <Stethoscope className="h-4 w-4 sm:mr-2" />
                  <span className="hidden md:inline">Find Hakeem</span>
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="ghost" size="sm" className="h-8 px-2 sm:px-3">
                  <Package className="h-4 w-4 sm:mr-2" />
                  <span className="hidden md:inline">Products</span>
                </Button>
              </Link>
            </div>
            
            {/* Logo - hidden on mobile to save space */}
            <div className="hidden lg:flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ا</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gradient-primary">Al-Nakhwa</h1>
                <p className="text-xs text-muted-foreground">Community</p>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search Hakeems, posts, groups..."
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {/* Search icon for mobile */}
            <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-10 sm:w-10">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-10 sm:w-10">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                5
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex h-8 w-8 sm:h-10 sm:w-10">
              <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Avatar className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-xs sm:text-sm">
                AH
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommunityHeader;