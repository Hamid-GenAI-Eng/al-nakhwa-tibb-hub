import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import CommunitySidebar from "@/components/community/CommunitySidebar";
import CommunityHeader from "@/components/community/CommunityHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MoreVertical,
  Send,
  Smile,
  Paperclip,
  Phone,
  Video,
  Info,
  Image as ImageIcon
} from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  username: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

const conversations: Conversation[] = [
  {
    id: "1",
    name: "Dr. Fatima Sheikh",
    username: "@dr_fatima",
    avatar: "/placeholder.svg",
    lastMessage: "Thank you for the herbal remedy advice!",
    timestamp: "2m ago",
    unread: 2,
    online: true
  },
  {
    id: "2",
    name: "Hakeem Mohammad Ali",
    username: "@hakeem_ali",
    avatar: "/placeholder.svg",
    lastMessage: "The conference was very informative",
    timestamp: "1h ago",
    unread: 0,
    online: true
  },
  {
    id: "3",
    name: "Dr. Sarah Khan",
    username: "@dr_sarah",
    avatar: "/placeholder.svg",
    lastMessage: "Would love to collaborate on the research paper",
    timestamp: "3h ago",
    unread: 1,
    online: false
  },
  {
    id: "4",
    name: "Hakeem Zubair",
    username: "@hakeem_zubair",
    avatar: "/placeholder.svg",
    lastMessage: "Can you share the treatment protocol?",
    timestamp: "1d ago",
    unread: 0,
    online: false
  }
];

const CommunityMessages = () => {
  const [selectedChat, setSelectedChat] = useState<Conversation | null>(conversations[0]);
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: "1",
      sender: "them",
      content: "Assalamualaikum! I wanted to ask about the treatment plan you mentioned in your recent post.",
      timestamp: "10:30 AM"
    },
    {
      id: "2",
      sender: "me",
      content: "Walaikum Assalam! Of course, I'd be happy to help. Which specific aspect are you interested in?",
      timestamp: "10:32 AM"
    },
    {
      id: "3",
      sender: "them",
      content: "The herbal remedy for digestive issues. I have a patient with similar symptoms.",
      timestamp: "10:35 AM"
    },
    {
      id: "4",
      sender: "me",
      content: "Great! For digestive issues, I typically recommend a combination of saunf (fennel), ajwain (carom seeds), and pudina (mint). The key is the proper dosage and timing.",
      timestamp: "10:37 AM"
    },
    {
      id: "5",
      sender: "them",
      content: "Thank you for the herbal remedy advice!",
      timestamp: "10:40 AM"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background w-full">
        <CommunityHeader />
        <div className="flex min-h-screen w-full pt-16">
          <CommunitySidebar />
          <main className="flex-1 overflow-hidden">
            <div className="flex h-[calc(100vh-4rem)]">
              {/* Conversations List */}
              <div className="w-full sm:w-80 lg:w-96 border-r border-border flex flex-col">
                <div className="p-4 border-b border-border">
                  <h2 className="text-xl font-bold mb-3">Messages</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search messages..."
                      className="pl-10 bg-muted/50 border-0"
                    />
                  </div>
                </div>

                <ScrollArea className="flex-1">
                  <div className="divide-y divide-border">
                    {conversations.map((conv) => (
                      <button
                        key={conv.id}
                        onClick={() => setSelectedChat(conv)}
                        className={`w-full p-4 hover:bg-muted/50 transition-colors text-left ${
                          selectedChat?.id === conv.id ? "bg-muted/50" : ""
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="relative">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={conv.avatar} alt={conv.name} />
                              <AvatarFallback className="bg-secondary text-secondary-foreground">
                                {conv.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            {conv.online && (
                              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold text-sm truncate">{conv.name}</h3>
                              <span className="text-xs text-muted-foreground flex-shrink-0">
                                {conv.timestamp}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-muted-foreground truncate">
                                {conv.lastMessage}
                              </p>
                              {conv.unread > 0 && (
                                <Badge className="ml-2 flex-shrink-0 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                                  {conv.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Chat Area */}
              {selectedChat ? (
                <div className="hidden sm:flex flex-1 flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={selectedChat.avatar} alt={selectedChat.name} />
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            {selectedChat.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {selectedChat.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedChat.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {selectedChat.online ? "Active now" : "Offline"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Info className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                              msg.sender === "me"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                            <p
                              className={`text-xs mt-1 ${
                                msg.sender === "me"
                                  ? "text-primary-foreground/70"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {msg.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Paperclip className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ImageIcon className="h-5 w-5" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button variant="ghost" size="icon">
                        <Smile className="h-5 w-5" />
                      </Button>
                      <Button onClick={handleSendMessage} size="icon" variant="hero">
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="hidden sm:flex flex-1 items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Send className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Select a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CommunityMessages;
