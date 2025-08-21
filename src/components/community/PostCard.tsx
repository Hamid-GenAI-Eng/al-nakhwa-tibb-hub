import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
  Share,
  MoreHorizontal,
  MapPin,
  Calendar,
  Users,
  Play,
  ExternalLink,
  Hash
} from "lucide-react";

interface PostAuthor {
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  location: string;
  expertise: string;
}

interface Post {
  id: string;
  author: PostAuthor;
  content: string;
  timestamp: string;
  likes: number;
  reposts: number;
  comments: number;
  bookmarks: number;
  images?: string[];
  isLiked: boolean;
  isReposted: boolean;
  isBookmarked: boolean;
  type: "post" | "thread" | "event";
  threadCount?: number;
  isLive?: boolean;
}

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onRepost: (postId: string) => void;
  onBookmark: (postId: string) => void;
}

const PostCard = ({ post, onLike, onRepost, onBookmark }: PostCardProps) => {
  const [showFullContent, setShowFullContent] = useState(false);
  
  const isLongContent = post.content.length > 280;
  const displayContent = showFullContent ? post.content : post.content.slice(0, 280);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <article className="p-4 hover:bg-muted/20 transition-colors cursor-pointer">
      <div className="flex space-x-3">
        {/* Avatar */}
        <Avatar className="h-12 w-12 flex-shrink-0">
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">
            {post.author.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 flex-wrap">
                <h3 className="font-semibold text-sm hover:underline truncate">
                  {post.author.name}
                </h3>
                {post.author.verified && (
                  <div className="h-4 w-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                )}
                <span className="text-muted-foreground text-sm truncate">
                  {post.author.username}
                </span>
                <span className="text-muted-foreground text-sm">•</span>
                <span className="text-muted-foreground text-sm">{post.timestamp}</span>
              </div>
              
              <div className="flex items-center space-x-3 mt-1 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{post.author.location}</span>
                </div>
                <span>•</span>
                <span>{post.author.expertise}</span>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 flex-shrink-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Post Type Badge */}
          {post.type !== "post" && (
            <div className="flex items-center space-x-2">
              {post.type === "thread" && (
                <Badge variant="secondary" className="text-xs">
                  <Hash className="h-3 w-3 mr-1" />
                  Thread ({post.threadCount} parts)
                </Badge>
              )}
              {post.type === "event" && (
                <Badge variant="secondary" className="text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.isLive ? "Live Event" : "Event"}
                </Badge>
              )}
              {post.isLive && (
                <Badge variant="destructive" className="text-xs animate-pulse">
                  <Play className="h-3 w-3 mr-1" />
                  LIVE
                </Badge>
              )}
            </div>
          )}

          {/* Content */}
          <div className="space-y-3">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {displayContent}
              {isLongContent && !showFullContent && (
                <>
                  ...
                  <button 
                    onClick={() => setShowFullContent(true)}
                    className="text-primary hover:underline ml-2"
                  >
                    Show more
                  </button>
                </>
              )}
            </p>

            {/* Images */}
            {post.images && post.images.length > 0 && (
              <div className={`rounded-xl overflow-hidden border border-border/50 ${
                post.images.length === 1 ? 'aspect-video' : 
                post.images.length === 2 ? 'grid grid-cols-2 gap-1' : 
                'grid grid-cols-2 gap-1'
              }`}>
                {post.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className={`relative bg-muted ${
                      post.images!.length === 1 ? 'aspect-video' : 'aspect-square'
                    } ${
                      post.images!.length === 3 && index === 0 ? 'row-span-2' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Post image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                    {post.images!.length > 4 && index === 3 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-medium">
                          +{post.images!.length - 4} more
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-8">
              {/* Comments */}
              <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-2 rounded-full group-hover:bg-primary/10">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span className="text-sm">{formatNumber(post.comments)}</span>
              </button>

              {/* Reposts */}
              <button 
                onClick={() => onRepost(post.id)}
                className={`flex items-center space-x-2 transition-colors group ${
                  post.isReposted ? 'text-green-600' : 'text-muted-foreground hover:text-green-600'
                }`}
              >
                <div className="p-2 rounded-full group-hover:bg-green-600/10">
                  <Repeat2 className="h-4 w-4" />
                </div>
                <span className="text-sm">{formatNumber(post.reposts)}</span>
              </button>

              {/* Likes */}
              <button 
                onClick={() => onLike(post.id)}
                className={`flex items-center space-x-2 transition-colors group ${
                  post.isLiked ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'
                }`}
              >
                <div className="p-2 rounded-full group-hover:bg-red-500/10">
                  <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                </div>
                <span className="text-sm">{formatNumber(post.likes)}</span>
              </button>

              {/* Bookmarks */}
              <button 
                onClick={() => onBookmark(post.id)}
                className={`flex items-center space-x-2 transition-colors group ${
                  post.isBookmarked ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <div className="p-2 rounded-full group-hover:bg-primary/10">
                  <Bookmark className={`h-4 w-4 ${post.isBookmarked ? 'fill-current' : ''}`} />
                </div>
                <span className="text-sm">{formatNumber(post.bookmarks)}</span>
              </button>
            </div>

            {/* Share */}
            <button className="text-muted-foreground hover:text-primary transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-primary/10">
                <Share className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;