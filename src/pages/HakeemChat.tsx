import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Send,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Info,
  Star,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  Image as ImageIcon,
  Mic,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'voice';
  isRead: boolean;
}

// Mock data
const mockHakeem = {
  id: "1",
  name: "Dr. Ahmad Hassan",
  specialization: "Cardiovascular Tibb",
  avatar: "/placeholder.svg",
  verified: true,
  rating: 4.8,
  location: "Lahore, Pakistan",
  consultationFee: "Rs. 2,000",
  isOnline: true,
  lastSeen: new Date(),
};

const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "hakeem",
    senderName: "Dr. Ahmad Hassan",
    content: "Assalam Alaikum! How can I help you today?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    type: 'text',
    isRead: true,
  },
  {
    id: "2",
    senderId: "user",
    senderName: "You",
    content: "Walaikum Assalam Doctor. I've been experiencing severe stomach pain for the past few days.",
    timestamp: new Date(Date.now() - 1000 * 60 * 25),
    type: 'text',
    isRead: true,
  },
  {
    id: "3",
    senderId: "hakeem",
    senderName: "Dr. Ahmad Hassan",
    content: "I understand your concern. Can you tell me more about the pain? When does it occur and what triggers it?",
    timestamp: new Date(Date.now() - 1000 * 60 * 20),
    type: 'text',
    isRead: true,
  },
  {
    id: "4",
    senderId: "user",
    senderName: "You",
    content: "It usually happens after meals, especially spicy food. The pain is in the upper abdomen.",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    type: 'text',
    isRead: true,
  },
];

const HakeemChat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hakeem = mockHakeem;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: "user",
      senderName: "You",
      content: newMessage,
      timestamp: new Date(),
      type: 'text',
      isRead: false,
    };

    setMessages(prev => [...prev, message]);
    setNewMessage("");

    // Simulate hakeem typing and response
    setIsTyping(true);
    setTimeout(() => {
      const responses = [
        "Thank you for sharing these details. Based on your symptoms, it sounds like you might be experiencing gastritis or acid reflux.",
        "I recommend avoiding spicy and oily foods for now. Let me suggest some natural remedies that can help.",
        "Have you tried any treatments so far? Also, are you taking any medications currently?",
        "I suggest we schedule a proper consultation to examine you thoroughly and provide appropriate treatment.",
      ];
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        senderId: "hakeem",
        senderName: hakeem.name,
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: 'text',
        isRead: true,
      };

      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const handleBookConsultation = () => {
    navigate(`/consultation/${id}`);
  };

  const handleVoiceCall = () => {
    toast({
      title: "Voice Call",
      description: "Voice calling feature will be available soon!",
    });
  };

  const handleVideoCall = () => {
    toast({
      title: "Video Call", 
      description: "Video calling feature will be available soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Card className="rounded-none border-x-0 border-t-0">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              
              <Avatar className="h-12 w-12">
                <AvatarImage src={hakeem.avatar} alt={hakeem.name} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {hakeem.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h2 className="font-semibold">{hakeem.name}</h2>
                  {hakeem.verified && (
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className={`w-2 h-2 rounded-full ${hakeem.isOnline ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                  <span>{hakeem.isOnline ? 'Online' : 'Last seen ' + formatTime(hakeem.lastSeen)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleVoiceCall}>
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleVideoCall}>
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="flex flex-1 max-h-[calc(100vh-80px)]">
        {/* Chat Messages */}
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[70%] ${message.senderId === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-2`}>
                    <Avatar className="h-8 w-8">
                      <AvatarImage 
                        src={message.senderId === 'user' ? '/placeholder.svg' : hakeem.avatar} 
                        alt={message.senderName} 
                      />
                      <AvatarFallback className="bg-muted text-xs">
                        {message.senderId === 'user' ? 'U' : hakeem.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className={`${message.senderId === 'user' ? 'mr-2' : 'ml-2'}`}>
                      <div
                        className={`px-4 py-2 rounded-lg ${
                          message.senderId === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-1">
                        {formatTime(message.timestamp)}
                        {message.senderId === 'user' && (
                          <span className="ml-1">
                            {message.isRead ? '✓✓' : '✓'}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={hakeem.avatar} alt={hakeem.name} />
                      <AvatarFallback className="bg-muted text-xs">
                        {hakeem.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-2 px-4 py-2 bg-muted rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Message Input */}
          <Card className="rounded-none border-x-0 border-b-0">
            <CardContent className="p-4">
              <div className="flex items-end space-x-2">
                <Button variant="outline" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ImageIcon className="h-4 w-4" />
                </Button>
                
                <div className="flex-1">
                  <Textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    rows={1}
                    className="min-h-[40px] resize-none"
                  />
                </div>
                
                <Button variant="outline" size="sm">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Hakeem Info */}
        <Card className="w-80 rounded-none border-r-0 border-y-0 hidden lg:block">
          <CardHeader className="p-6">
            <div className="text-center">
              <Avatar className="h-20 w-20 mx-auto mb-4">
                <AvatarImage src={hakeem.avatar} alt={hakeem.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {hakeem.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">{hakeem.name}</h3>
              <p className="text-sm text-primary">{hakeem.specialization}</p>
              <div className="flex items-center justify-center mt-2">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm font-medium">{hakeem.rating}</span>
              </div>
            </div>
          </CardHeader>
          
          <Separator />
          
          <CardContent className="p-6 space-y-6">
            <div>
              <h4 className="font-medium mb-2 flex items-center">
                <Info className="h-4 w-4 mr-2" />
                Quick Info
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-2 text-muted-foreground" />
                  <span>{hakeem.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-2 text-muted-foreground" />
                  <span>Fee: {hakeem.consultationFee}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Button variant="hero" className="w-full" onClick={handleBookConsultation}>
                <Calendar className="h-4 w-4 mr-2" />
                Book Consultation
              </Button>
              <Button variant="outline" className="w-full" onClick={() => navigate(`/hakeem/${id}`)}>
                <Info className="h-4 w-4 mr-2" />
                View Full Profile
              </Button>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Safety Tips</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Never share personal financial information</li>
                <li>• Meet in person only at verified clinics</li>
                <li>• Report any suspicious behavior</li>
                <li>• Always verify prescriptions</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HakeemChat;