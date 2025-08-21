import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  ImageIcon,
  Smile,
  MapPin,
  Calendar,
  Hash,
  Users,
  Globe,
  Lock,
  MessageCircle,
  Stethoscope
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PostCreator = () => {
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [threadMode, setThreadMode] = useState(false);
  const [privacy, setPrivacy] = useState("public");
  
  const maxChars = 280;
  const progress = (content.length / maxChars) * 100;

  const handlePost = async () => {
    if (!content.trim()) return;
    
    setIsPosting(true);
    
    // Simulate posting delay
    setTimeout(() => {
      toast({
        title: "Post shared successfully!",
        description: "Your post has been shared with the Al-Nakhwa community.",
      });
      setContent("");
      setIsPosting(false);
      setThreadMode(false);
    }, 1000);
  };

  const handleAddThread = () => {
    setThreadMode(true);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Main Post Area */}
      <div className="flex space-x-3">
        <Avatar className="h-12 w-12 flex-shrink-0">
          <AvatarImage src="/placeholder.svg" alt="Your profile" />
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
            AH
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-3">
          {/* Privacy Selector */}
          <div className="flex items-center space-x-2">
            <Button
              variant={privacy === "public" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPrivacy("public")}
              className="h-7 px-3 text-xs"
            >
              <Globe className="h-3 w-3 mr-1" />
              Public
            </Button>
            <Button
              variant={privacy === "followers" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPrivacy("followers")}
              className="h-7 px-3 text-xs"
            >
              <Users className="h-3 w-3 mr-1" />
              Followers
            </Button>
            <Button
              variant={privacy === "private" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPrivacy("private")}
              className="h-7 px-3 text-xs"
            >
              <Lock className="h-3 w-3 mr-1" />
              Private Group
            </Button>
          </div>

          {/* Text Area */}
          <div className="relative">
            <Textarea
              placeholder="What's happening in the world of Tibb?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] text-lg border-0 resize-none focus-visible:ring-0 placeholder:text-muted-foreground/70"
              maxLength={maxChars}
            />
            
            {/* Character Counter */}
            {content.length > 0 && (
              <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                <div className="relative h-6 w-6">
                  <Progress
                    value={progress}
                    className="h-6 w-6 rounded-full rotate-90"
                  />
                  <span className={`absolute inset-0 flex items-center justify-center text-xs font-medium ${
                    progress > 90 ? 'text-destructive' : 'text-muted-foreground'
                  }`}>
                    {maxChars - content.length}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Thread Mode */}
          {threadMode && (
            <div className="border-l-2 border-primary/30 pl-4 ml-6">
              <div className="flex space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Your profile" />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-xs">
                    AH
                  </AvatarFallback>
                </Avatar>
                <Textarea
                  placeholder="Continue your thread..."
                  className="min-h-[80px] border-0 resize-none focus-visible:ring-0"
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="flex space-x-1">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary">
                <Smile className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary">
                <MapPin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary">
                <Calendar className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary">
                <Hash className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary">
                <Stethoscope className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              {!threadMode && content.trim() && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddThread}
                  className="h-8 px-3 text-xs"
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Thread
                </Button>
              )}
              
              <Button
                onClick={handlePost}
                disabled={!content.trim() || isPosting || progress > 100}
                className="h-8 px-6 text-sm font-medium"
                variant="hero"
              >
                {isPosting ? "Posting..." : threadMode ? "Post Thread" : "Post"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreator;