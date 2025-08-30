import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Plus, MessageCircle, Clock, Trash2 } from "lucide-react";

interface ChatSession {
  id: string;
  title: string;
  timestamp: string;
  preview: string;
}

const ConsultationSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: "1",
      title: "Chest Pain Consultation",
      timestamp: "2 hours ago",
      preview: "I've been experiencing chest pain..."
    },
    {
      id: "2", 
      title: "Headache Treatment",
      timestamp: "1 day ago",
      preview: "What can I take for severe headaches?"
    },
    {
      id: "3",
      title: "Diabetes Management", 
      timestamp: "3 days ago",
      preview: "Need advice on blood sugar control..."
    },
    {
      id: "4",
      title: "Blood Pressure Query",
      timestamp: "1 week ago", 
      preview: "Is 140/90 considered high?"
    }
  ]);

  const [activeChat, setActiveChat] = useState<string>("1");

  const handleNewChat = () => {
    const newChat: ChatSession = {
      id: Date.now().toString(),
      title: "New Consultation",
      timestamp: "Now",
      preview: "Start your consultation..."
    };
    setChatSessions([newChat, ...chatSessions]);
    setActiveChat(newChat.id);
  };

  const handleDeleteChat = (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChatSessions(chatSessions.filter(chat => chat.id !== chatId));
    if (activeChat === chatId && chatSessions.length > 1) {
      const remainingChats = chatSessions.filter(chat => chat.id !== chatId);
      setActiveChat(remainingChats[0]?.id || "");
    }
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-80"} collapsible="icon">
      <SidebarHeader className="p-4 border-b border-border/50">
        {!collapsed && (
          <>
            <h2 className="text-lg font-semibold text-gradient-primary mb-3">
              Consultation History
            </h2>
            <Button 
              onClick={handleNewChat}
              className="w-full justify-start gap-2 hero-gradient hover:opacity-90"
              size="sm"
            >
              <Plus className="h-4 w-4" />
              Start New Consultation
            </Button>
          </>
        )}
        {collapsed && (
          <Button 
            onClick={handleNewChat}
            size="icon"
            className="hero-gradient hover:opacity-90 h-10 w-10"
          >
            <Plus className="h-4 w-4" />
          </Button>
        )}
      </SidebarHeader>

      <SidebarContent>
        <ScrollArea className="flex-1">
          <SidebarMenu className="p-2">
            {chatSessions.map((session) => (
              <SidebarMenuItem key={session.id}>
                <SidebarMenuButton
                  onClick={() => setActiveChat(session.id)}
                  className={`
                    w-full justify-start p-3 h-auto min-h-[60px] rounded-lg mb-2
                    ${activeChat === session.id ? 'bg-muted text-primary font-medium' : 'hover:bg-muted/50'}
                    ${collapsed ? 'px-2' : ''}
                  `}
                >
                  <div className="flex items-start gap-3 w-full">
                    <MessageCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                    {!collapsed && (
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-sm font-medium truncate">{session.title}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive"
                            onClick={(e) => handleDeleteChat(session.id, e)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground truncate mb-1">
                          {session.preview}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {session.timestamp}
                        </div>
                      </div>
                    )}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
};

export default ConsultationSidebar;