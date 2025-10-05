import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import CommunitySidebar from "@/components/community/CommunitySidebar";
import CommunityHeader from "@/components/community/CommunityHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateGroupForm from "@/components/community/CreateGroupForm";
import {
  Search,
  Users,
  Crown,
  Lock,
  Globe,
  Plus,
  TrendingUp,
  Clock
} from "lucide-react";

interface Group {
  id: string;
  name: string;
  description: string;
  members: number;
  posts: number;
  image: string;
  type: "public" | "private" | "premium";
  category: string;
  verified?: boolean;
}

const groups: Group[] = [
  {
    id: "1",
    name: "Karachi Hakeems Network",
    description: "Professional network for Hakeems practicing in Karachi. Share knowledge, cases, and collaborate.",
    members: 1250,
    posts: 3840,
    image: "/placeholder.svg",
    type: "public",
    category: "Professional",
    verified: true
  },
  {
    id: "2",
    name: "Herbal Medicine Research",
    description: "Dedicated to research and scientific studies in herbal and traditional medicine.",
    members: 2100,
    posts: 5620,
    image: "/placeholder.svg",
    type: "public",
    category: "Research",
    verified: true
  },
  {
    id: "3",
    name: "Young Practitioners Forum",
    description: "Supporting new generation of Hakeems. Q&A, mentorship, and career guidance.",
    members: 850,
    posts: 2150,
    image: "/placeholder.svg",
    type: "public",
    category: "Education"
  },
  {
    id: "4",
    name: "Premium Tibb Masters",
    description: "Exclusive group for senior practitioners. Advanced case discussions and treatment protocols.",
    members: 320,
    posts: 1840,
    image: "/placeholder.svg",
    type: "premium",
    category: "Professional",
    verified: true
  },
  {
    id: "5",
    name: "Digestive Health Specialists",
    description: "Focus group for Hakeems specializing in gastrointestinal and digestive disorders.",
    members: 680,
    posts: 1920,
    image: "/placeholder.svg",
    type: "private",
    category: "Specialty"
  },
  {
    id: "6",
    name: "Unani Medicine Society",
    description: "Preserving and promoting authentic Unani medicine practices and knowledge.",
    members: 1540,
    posts: 4280,
    image: "/placeholder.svg",
    type: "public",
    category: "Traditional",
    verified: true
  }
];

const CommunityGroups = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [createGroupOpen, setCreateGroupOpen] = useState(false);

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const GroupCard = ({ group }: { group: Group }) => (
    <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-soft">
      <div className="flex items-start space-x-4">
        <Avatar className="h-16 w-16 flex-shrink-0">
          <AvatarImage src={group.image} alt={group.name} />
          <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">
            {group.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-lg truncate">{group.name}</h3>
                {group.verified && (
                  <div className="h-5 w-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                {group.type === "public" && (
                  <Badge variant="secondary" className="text-xs">
                    <Globe className="h-3 w-3 mr-1" />
                    Public
                  </Badge>
                )}
                {group.type === "private" && (
                  <Badge variant="secondary" className="text-xs">
                    <Lock className="h-3 w-3 mr-1" />
                    Private
                  </Badge>
                )}
                {group.type === "premium" && (
                  <Badge variant="secondary" className="text-xs">
                    <Crown className="h-3 w-3 mr-1 text-yellow-500" />
                    Premium
                  </Badge>
                )}
                <span className="text-xs text-muted-foreground">{group.category}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{group.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{group.members.toLocaleString()} members</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4" />
                <span>{group.posts.toLocaleString()} posts</span>
              </div>
            </div>
            <Button size="sm" variant="hero">
              Join Group
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background w-full">
        <CommunityHeader />
        <div className="flex min-h-screen w-full pt-16">
          <CommunitySidebar />
          <main className="flex-1 overflow-hidden px-2 sm:px-4 lg:px-6">
            <div className="max-w-5xl mx-auto py-6">
              {/* Header */}
              <div className="mb-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold">Groups</h1>
                    <p className="text-muted-foreground mt-1">
                      Connect with like-minded Hakeems and specialists
                    </p>
                  </div>
                  <Dialog open={createGroupOpen} onOpenChange={setCreateGroupOpen}>
                    <DialogTrigger asChild>
                      <Button variant="hero" size="lg">
                        <Plus className="h-5 w-5 mr-2" />
                        Create Group
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <CreateGroupForm onClose={() => setCreateGroupOpen(false)} />
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search groups..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="discover" className="w-full">
                <TabsList className="w-full sm:w-auto">
                  <TabsTrigger value="discover">
                    <Globe className="h-4 w-4 mr-2" />
                    Discover
                  </TabsTrigger>
                  <TabsTrigger value="my-groups">
                    <Users className="h-4 w-4 mr-2" />
                    My Groups
                  </TabsTrigger>
                  <TabsTrigger value="recent">
                    <Clock className="h-4 w-4 mr-2" />
                    Recent
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="discover" className="mt-6 space-y-4">
                  {filteredGroups.length > 0 ? (
                    filteredGroups.map((group) => (
                      <GroupCard key={group.id} group={group} />
                    ))
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>No groups found matching your search</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="my-groups" className="mt-6">
                  <div className="text-center py-12 text-muted-foreground">
                    <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="mb-4">You haven't joined any groups yet</p>
                    <Button variant="hero" onClick={() => {}}>
                      Discover Groups
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="recent" className="mt-6">
                  <div className="text-center py-12 text-muted-foreground">
                    <Clock className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>No recent group activity</p>
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

export default CommunityGroups;
