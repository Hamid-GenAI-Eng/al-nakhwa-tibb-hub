import CommunitySidebar from "@/components/community/CommunitySidebar";
import CommunityFeed from "@/components/community/CommunityFeed";
import CommunityHeader from "@/components/community/CommunityHeader";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <CommunityHeader />
      <div className="flex min-h-screen w-full pt-16">
        <CommunitySidebar />
        <main className="flex-1 overflow-hidden">
          <CommunityFeed />
        </main>
      </div>
    </div>
  );
};

export default Community;