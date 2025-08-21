import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Bell, MessageCircle, Settings } from "lucide-react";

const CommunityHeader = () => {
  return (
    <header className="fixed top-0 w-full z-50 card-gradient shadow-medium border-b border-border/50 backdrop-blur-sm h-16">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="lg:hidden" />
            <div className="flex items-center space-x-2">
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
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search Hakeems, posts, groups..."
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                5
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
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