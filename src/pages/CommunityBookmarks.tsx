import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import CommunitySidebar from "@/components/community/CommunitySidebar";
import CommunityHeader from "@/components/community/CommunityHeader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/community/PostCard";
import { Bookmark, Image, Video, FileText, Trash2 } from "lucide-react";

const CommunityBookmarks = () => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([
    {
      id: "1",
      author: {
        name: "Dr. Fatima Sheikh",
        username: "@dr_fatima",
        avatar: "/placeholder.svg",
        verified: true,
        location: "Lahore, Pakistan",
        expertise: "Women's Health Specialist"
      },
      content: "Important research findings on the effectiveness of Safoof-e-Mazar in treating menstrual disorders. Clinical trials show 87% improvement in symptoms. Full study details in thread 👇",
      timestamp: "1d ago",
      likes: 892,
      reposts: 145,
      comments: 67,
      bookmarks: 234,
      isLiked: false,
      isReposted: false,
      isBookmarked: true,
      type: "thread" as const,
      threadCount: 5
    },
    {
      id: "2",
      author: {
        name: "Hakeem Mohammad Ali",
        username: "@hakeem_ali",
        avatar: "/placeholder.svg",
        verified: true,
        location: "Islamabad, Pakistan",
        expertise: "Joint & Pain Specialist"
      },
      content: "Complete guide to treating arthritis using traditional Unani methods. This comprehensive approach combines herbal remedies, dietary changes, and therapeutic exercises. Saving this for your reference! 📚",
      timestamp: "3d ago",
      likes: 1245,
      reposts: 234,
      comments: 89,
      bookmarks: 567,
      images: ["/placeholder.svg"],
      isLiked: true,
      isReposted: false,
      isBookmarked: true,
      type: "post" as const
    },
    {
      id: "3",
      author: {
        name: "Dr. Sarah Khan",
        username: "@dr_sarah",
        avatar: "/placeholder.svg",
        verified: false,
        location: "Karachi, Pakistan",
        expertise: "Digestive Health"
      },
      content: "Sharing my successful case study on treating chronic IBS with herbal formulations. Patient showed 90% improvement within 3 months. Treatment protocol includes specific herbs, dietary modifications, and lifestyle changes.",
      timestamp: "1w ago",
      likes: 678,
      reposts: 98,
      comments: 45,
      bookmarks: 189,
      isLiked: false,
      isReposted: false,
      isBookmarked: true,
      type: "post" as const
    }
  ]);

  const handleLike = (postId: string) => {
    setBookmarkedPosts(posts =>
      posts.map(post =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };

  const handleRepost = (postId: string) => {
    setBookmarkedPosts(posts =>
      posts.map(post =>
        post.id === postId
          ? {
              ...post,
              isReposted: !post.isReposted,
              reposts: post.isReposted ? post.reposts - 1 : post.reposts + 1
            }
          : post
      )
    );
  };

  const handleBookmark = (postId: string) => {
    setBookmarkedPosts(posts =>
      posts.filter(post => post.id !== postId)
    );
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to remove all bookmarks?")) {
      setBookmarkedPosts([]);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background w-full">
        <CommunityHeader />
        <div className="flex min-h-screen w-full pt-16">
          <CommunitySidebar />
          <main className="flex-1 overflow-hidden px-2 sm:px-4 lg:px-6">
            <div className="max-w-3xl mx-auto py-6">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bookmark className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold">Bookmarks</h1>
                      <p className="text-muted-foreground">
                        {bookmarkedPosts.length} saved posts
                      </p>
                    </div>
                  </div>
                  {bookmarkedPosts.length > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleClearAll}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear All
                    </Button>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full sm:w-auto mb-6">
                  <TabsTrigger value="all">
                    <FileText className="h-4 w-4 mr-2" />
                    All
                  </TabsTrigger>
                  <TabsTrigger value="posts">
                    Posts
                  </TabsTrigger>
                  <TabsTrigger value="media">
                    <Image className="h-4 w-4 mr-2" />
                    Media
                  </TabsTrigger>
                  <TabsTrigger value="threads">
                    Threads
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  {bookmarkedPosts.length > 0 ? (
                    <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
                      {bookmarkedPosts.map((post) => (
                        <PostCard
                          key={post.id}
                          post={post}
                          onLike={handleLike}
                          onRepost={handleRepost}
                          onBookmark={handleBookmark}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 border border-border rounded-lg">
                      <Bookmark className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <h3 className="text-lg font-semibold mb-2">No bookmarks yet</h3>
                      <p className="text-muted-foreground mb-6">
                        Save posts to read them later
                      </p>
                      <Button variant="hero" onClick={() => window.history.back()}>
                        Explore Posts
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="posts">
                  <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
                    {bookmarkedPosts
                      .filter(post => post.type === "post" && !post.images)
                      .map((post) => (
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

                <TabsContent value="media">
                  <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
                    {bookmarkedPosts
                      .filter(post => post.images && post.images.length > 0)
                      .map((post) => (
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

                <TabsContent value="threads">
                  <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
                    {bookmarkedPosts
                      .filter(post => post.type === "thread")
                      .map((post) => (
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
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CommunityBookmarks;
