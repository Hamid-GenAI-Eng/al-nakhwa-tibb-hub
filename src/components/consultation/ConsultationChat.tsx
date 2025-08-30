import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Mic, MicOff, Paperclip } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "doctor";
  timestamp: string;
  language?: string;
}

const ConsultationChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "السلام علیکم! I'm Dr. Ahmed, your virtual medical consultant. How can I help you today? آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
      sender: "doctor",
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // Simulate doctor response
    setTimeout(() => {
      const doctorResponses = [
        "I understand your concern. Can you provide more details about when this started?",
        "Based on what you've described, I'd recommend monitoring this for the next 24-48 hours.",
        "یہ عام طور پر کوئی سنگین مسئلہ نہیں ہے، لیکن احتیاط بہتر ہے۔ This is usually not serious, but precaution is better.",
        "I suggest you consult with a local physician for a proper examination.",
        "آپ کو پانی زیادہ پینا چاہیے اور آرام کرنا چاہیے۔ You should drink more water and rest.",
      ];
      
      const randomResponse = doctorResponses[Math.floor(Math.random() * doctorResponses.length)];
      
      const doctorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "doctor",
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages(prev => [...prev, doctorMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast({
        title: "Voice Recording Started",
        description: "Speak now... (This is a demo feature)",
      });
    } else {
      toast({
        title: "Voice Recording Stopped",
        description: "Processing your message...",
      });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "doctor" && (
                <Avatar className="h-8 w-8 border-2 border-primary/20">
                  <AvatarImage src="/placeholder.svg" alt="Dr. Ahmed" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    Dr
                  </AvatarFallback>
                </Avatar>
              )}
              
              <div
                className={`
                  max-w-[70%] rounded-2xl px-4 py-3 shadow-sm
                  ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground ml-12"
                      : "bg-card text-card-foreground border border-border/50"
                  }
                `}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
                <span className="text-xs opacity-70 mt-2 block">
                  {message.timestamp}
                </span>
              </div>

              {message.sender === "user" && (
                <Avatar className="h-8 w-8 border-2 border-muted">
                  <AvatarImage src="/placeholder.svg" alt="You" />
                  <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                    You
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <Avatar className="h-8 w-8 border-2 border-primary/20">
                <AvatarImage src="/placeholder.svg" alt="Dr. Ahmed" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  Dr
                </AvatarFallback>
              </Avatar>
              <div className="bg-card text-card-foreground border border-border/50 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-3">
            <Button
              variant="outline"
              size="icon"
              className="flex-shrink-0 h-12 w-12 rounded-xl"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            
            <div className="flex-1 relative">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message in English, Urdu, or any language... / اپنا پیغام ٹائپ کریں..."
                className="min-h-[48px] pr-12 text-sm rounded-xl border-border/50 bg-background/50 backdrop-blur-sm resize-none"
                disabled={isTyping}
              />
            </div>

            <Button
              variant={isRecording ? "destructive" : "outline"}
              size="icon"
              onClick={toggleRecording}
              className="flex-shrink-0 h-12 w-12 rounded-xl"
            >
              {isRecording ? (
                <MicOff className="h-4 w-4" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
            </Button>

            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || isTyping}
              className="flex-shrink-0 h-12 px-6 rounded-xl hero-gradient hover:opacity-90 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-2 text-center">
            This is a demo consultation. For real medical advice, please consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationChat;