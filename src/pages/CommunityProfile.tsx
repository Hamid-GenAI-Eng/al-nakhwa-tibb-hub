import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import CommunitySidebar from "@/components/community/CommunitySidebar";
import CommunityHeader from "@/components/community/CommunityHeader";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/community/PostCard";
import {
  MapPin,
  Calendar,
  Stethoscope,
  Award,
  Users,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Edit,
  ExternalLink
} from "lucide-react";

const CommunityProfile = () => {
  const navigate = useNavigate();
  const [following, setFollowing] = useState(false);

  // Mock user posts
  const userPosts = [
    {
      id: "1",
      author: {
        name: "Dr. Ahmad Hassan",
        username: "@dr_ahmad_hassan",
        avatar: "/placeholder.svg",
        verified: true,
        location: "Karachi, Pakistan",
        expertise: "Tibb-e-Unani Specialist"
      },
      content: "Just completed a successful treatment plan for chronic digestive issues using traditional Unani herbs. The power of natural medicine continues to amaze me! 🌿",
      timestamp: "2h ago",
      likes: 245,
      reposts: 32,
      comments: 18,
      bookmarks: 56,
      isLiked: false,
      isReposted: false,
      isBookmarked: false,
      type: "post" as const
    }
  ];

  const handleLike = (postId: string) => console.log("Like:", postId);
  const handleRepost = (postId: string) => console.log("Repost:", postId);
  const handleBookmark = (postId: string) => console.log("Bookmark:", postId);

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background w-full">
        <CommunityHeader />
        <div className="flex min-h-screen w-full pt-16">
          <CommunitySidebar />
          <main className="flex-1 overflow-hidden">
            <div className="max-w-3xl mx-auto">
              {/* Cover Image */}
              <div className="h-48 sm:h-64 hero-gradient relative">
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-4 right-4"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Cover
                </Button>
              </div>

              {/* Profile Header */}
              <div className="px-4 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 sm:-mt-20 mb-4">
                  <div className="relative mb-4 sm:mb-0">
                    <Avatar className="h-32 w-32 border-4 border-background">
                      <AvatarImage src="/placeholder.svg" alt="Dr. Ahmad Hassan" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold">
                        AH
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute bottom-0 right-0 rounded-full h-10 w-10 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button
                      variant={following ? "secondary" : "hero"}
                      size="sm"
                      onClick={() => setFollowing(!following)}
                    >
                      {following ? "Following" : "Follow"}
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <h1 className="text-2xl sm:text-3xl font-bold">Dr. Ahmad Hassan</h1>
                    <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">@dr_ahmad_hassan</p>

                  <p className="text-sm leading-relaxed">
                    Senior Hakeem specializing in Tibb-e-Unani medicine with 15+ years of experience.
                    Passionate about natural healing and traditional remedies. Helping people achieve
                    wellness through holistic approaches. 🌿
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>Karachi, Pakistan</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Joined March 2020</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Stethoscope className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium">15 years experience</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-primary hover:underline text-sm">
                      alnakhwa.com/hakeem/ahmad-hassan
                    </a>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 pt-2">
                    <button className="hover:underline">
                      <span className="font-semibold">1.2K</span>{" "}
                      <span className="text-muted-foreground">Following</span>
                    </button>
                    <button className="hover:underline">
                      <span className="font-semibold">2.8K</span>{" "}
                      <span className="text-muted-foreground">Followers</span>
                    </button>
                    <div>
                      <span className="font-semibold">450</span>{" "}
                      <span className="text-muted-foreground">Posts</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="text-xs">
                      <Award className="h-3 w-3 mr-1" />
                      Top Contributor
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      Community Leader
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Verified Hakeem
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="posts" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                  <TabsTrigger
                    value="posts"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Posts
                  </TabsTrigger>
                  <TabsTrigger
                    value="replies"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Replies
                  </TabsTrigger>
                  <TabsTrigger
                    value="media"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Media
                  </TabsTrigger>
                  <TabsTrigger
                    value="likes"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Likes
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="posts" className="mt-0">
                  <div className="divide-y divide-border">
                    {userPosts.map((post) => (
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

                <TabsContent value="replies" className="mt-0">
                  <div className="p-8 text-center text-muted-foreground">
                    No replies yet
                  </div>
                </TabsContent>

                <TabsContent value="media" className="mt-0">
                  <div className="p-8 text-center text-muted-foreground">
                    No media posts yet
                  </div>
                </TabsContent>

                <TabsContent value="likes" className="mt-0">
                  <div className="p-8 text-center text-muted-foreground">
                    No liked posts yet
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CommunityProfile;
