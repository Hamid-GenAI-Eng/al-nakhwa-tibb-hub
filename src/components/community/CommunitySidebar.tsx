import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Home,
  Users,
  MessageSquare,
  Bookmark,
  User,
  Settings,
  Plus,
  Hash,
  Crown,
  Stethoscope,
} from "lucide-react";

const mainItems = [
  { title: "Feed", url: "#", icon: Home },
  { title: "My Profile", url: "#profile", icon: User },
  { title: "Messages", url: "#messages", icon: MessageSquare },
  { title: "Groups", url: "#groups", icon: Users },
  { title: "Bookmarks", url: "#bookmarks", icon: Bookmark },
  { title: "Settings", url: "#settings", icon: Settings },
];

const trendingTopics = [
  { tag: "TibbWisdom", posts: "2.1K posts" },
  { tag: "HerbalMedicine", posts: "1.8K posts" },
  { tag: "NaturalHealing", posts: "1.2K posts" },
  { tag: "DesiRemedies", posts: "950 posts" },
];

const suggestedGroups = [
  {
    name: "Karachi Hakeems",
    members: "450",
    image: "/placeholder.svg",
    type: "verified"
  },
  {
    name: "Herbal Research",
    members: "1.2K",
    image: "/placeholder.svg",
    type: "premium"
  },
  {
    name: "Young Practitioners",
    members: "680",
    image: "/placeholder.svg",
    type: "open"
  }
];

const CommunitySidebar = () => {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";
  
  const isActive = (url: string) => location.hash === url;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
      isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"
    }`;

  return (
    <Sidebar className={collapsed ? "w-16 lg:w-20" : "w-72 lg:w-80"} collapsible="icon">
      <SidebarContent className="p-2 lg:p-4">
        {/* Profile Section */}
        {!collapsed && (
          <div className="mb-4 lg:mb-6 p-3 lg:p-4 rounded-lg card-gradient border">
            <div className="flex items-center space-x-2 lg:space-x-3 mb-2 lg:mb-3">
              <Avatar className="h-10 w-10 lg:h-12 lg:w-12">
                <AvatarImage src="/placeholder.svg" alt="Dr. Ahmad Hassan" />
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-xs lg:text-sm">
                  AH
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-xs lg:text-sm truncate">Dr. Ahmad Hassan</h3>
                <p className="text-xs text-muted-foreground truncate">Senior Hakeem • Karachi</p>
                <div className="flex items-center mt-1">
                  <Stethoscope className="h-3 w-3 text-primary mr-1" />
                  <span className="text-xs text-primary">15 years exp</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 text-xs text-muted-foreground">
              <div className="text-center">
                <div className="font-semibold text-foreground">1.2K</div>
                <div className="text-xs">Following</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">2.8K</div>
                <div className="text-xs">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">450</div>
                <div className="text-xs">Posts</div>
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className={getNavCls({ isActive: isActive(item.url) })}>
                      <item.icon className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                      {!collapsed && <span className="text-sm lg:text-base">{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Create Post Button */}
        {!collapsed && (
          <Button variant="hero" className="w-full mt-3 mb-4 lg:mt-4 lg:mb-6 text-sm lg:text-base h-9 lg:h-10">
            <Plus className="h-4 w-4 mr-1 lg:mr-2" />
            Create Post
          </Button>
        )}

        {/* Trending Topics */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel>Trending in Tibb</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-3">
                {trendingTopics.map((topic) => (
                  <div key={topic.tag} className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-2">
                      <Hash className="h-4 w-4 text-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">#{topic.tag}</p>
                        <p className="text-xs text-muted-foreground">{topic.posts}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Suggested Groups */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel>Suggested Groups</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-3">
                {suggestedGroups.map((group) => (
                  <div key={group.name} className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={group.image} alt={group.name} />
                        <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                          {group.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1">
                          <p className="text-sm font-medium truncate">{group.name}</p>
                          {group.type === 'verified' && (
                            <div className="h-4 w-4 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-primary-foreground text-xs">✓</span>
                            </div>
                          )}
                          {group.type === 'premium' && (
                            <Crown className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{group.members} members</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default CommunitySidebar;