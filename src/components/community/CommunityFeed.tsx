import { useState } from "react";
import PostCreator from "./PostCreator";
import PostCard from "./PostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Filter, TrendingUp, Clock, Users } from "lucide-react";

const mockPosts = [
  {
    id: "1",
    author: {
      name: "Dr. Fatima Sheikh",
      username: "@drfatimasheikh",
      avatar: "/placeholder.svg",
      verified: true,
      location: "Lahore",
      expertise: "Cardiovascular Tibb"
    },
    content: "New research shows that combination of Arjuna bark with Garlic extract shows 85% improvement in heart patients. Here's my 20-year experience thread 🧵👇",
    timestamp: "2h",
    likes: 245,
    reposts: 89,
    comments: 34,
    bookmarks: 67,
    images: ["/placeholder.svg"],
    isLiked: false,
    isReposted: false,
    isBookmarked: false,
    type: "thread" as const,
    threadCount: 8
  },
  {
    id: "2",
    author: {
      name: "Hakeem Mohammad Ali",
      username: "@hakeemali",
      avatar: "/placeholder.svg",
      verified: false,
      location: "Karachi",
      expertise: "Digestive Disorders"
    },
    content: "Patient update: 65-year-old with chronic gastritis completely healed using traditional Unani formulation. The power of Tibb never ceases to amaze me. #TibbWisdom #NaturalHealing",
    timestamp: "4h",
    likes: 156,
    reposts: 23,
    comments: 19,
    bookmarks: 45,
    images: [],
    isLiked: true,
    isReposted: false,
    isBookmarked: true,
    type: "post" as const
  },
  {
    id: "3",
    author: {
      name: "Young Healers Society",
      username: "@younghealers",
      avatar: "/placeholder.svg",
      verified: true,
      location: "Islamabad",
      expertise: "Medical Education"
    },
    content: "🔥 LIVE NOW: Join our masterclass on 'Modern Integration of Classical Tibb Principles' with renowned Hakeem Dr. Rashid Ahmad. Free for all members!",
    timestamp: "6h",
    likes: 412,
    reposts: 156,
    comments: 67,
    bookmarks: 234,
    images: ["/placeholder.svg", "/placeholder.svg"],
    isLiked: false,
    isReposted: true,
    isBookmarked: false,
    type: "event" as const,
    isLive: true
  }
];

const CommunityFeed = () => {
  const [activeTab, setActiveTab] = useState("for-you");
  const [posts, setPosts] = useState(mockPosts);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  const handleRepost = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isReposted: !post.isReposted, 
            reposts: post.isReposted ? post.reposts - 1 : post.reposts + 1 
          }
        : post
    ));
  };

  const handleBookmark = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isBookmarked: !post.isBookmarked, 
            bookmarks: post.isBookmarked ? post.bookmarks - 1 : post.bookmarks + 1 
          }
        : post
    ));
  };

  return (
    <div className="w-full max-w-2xl mx-auto lg:border-x border-border/50 min-h-screen">
      {/* Feed Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-40 border-b border-border/50">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-10 lg:h-12 bg-transparent p-0 rounded-none border-0">
            <TabsTrigger 
              value="for-you" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs sm:text-sm px-2 sm:px-4"
            >
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">For You</span>
              <span className="sm:hidden">For You</span>
            </TabsTrigger>
            <TabsTrigger 
              value="following" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs sm:text-sm px-2 sm:px-4"
            >
              <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Following</span>
              <span className="sm:hidden">Following</span>
            </TabsTrigger>
            <TabsTrigger 
              value="latest" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs sm:text-sm px-2 sm:px-4"
            >
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Latest</span>
              <span className="sm:hidden">Latest</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex justify-end p-2 border-t border-border/50">
          <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
            <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Post Creator */}
      <div className="border-b border-border/50">
        <PostCreator />
      </div>

      {/* Feed Content */}
      <Tabs value={activeTab}>
        <TabsContent value="for-you" className="m-0">
          <div className="divide-y divide-border/50">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={handleLike}
                onRepost={handleRepost}
                onBookmark={handleBookmark}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="following" className="m-0">
          <div className="p-8 text-center">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No posts from your network</h3>
            <p className="text-muted-foreground">Follow more Hakeems to see their posts here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="latest" className="m-0">
          <div className="divide-y divide-border/50">
            {posts.reverse().map((post) => (
              <PostCard
                key={`latest-${post.id}`}
                post={post}
                onLike={handleLike}
                onRepost={handleRepost}
                onBookmark={handleBookmark}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityFeed;