import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Globe, Lock, Crown, Upload, X } from "lucide-react";

interface CreateGroupFormProps {
  onClose: () => void;
}

const CreateGroupForm = ({ onClose }: CreateGroupFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    type: "public",
    rules: ""
  });
  const [groupImage, setGroupImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Group Created!",
      description: `${formData.name} has been created successfully.`
    });
    
    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGroupImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Create a New Group</h2>
        <p className="text-muted-foreground">
          Build a community around shared interests and specialties
        </p>
      </div>

      {/* Group Image */}
      <div className="space-y-2">
        <Label>Group Image</Label>
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            {groupImage ? (
              <AvatarImage src={groupImage} alt="Group" />
            ) : (
              <AvatarFallback className="bg-muted">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </AvatarFallback>
            )}
          </Avatar>
          <div className="flex-1">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Recommended: Square image, at least 400x400px
            </p>
          </div>
          {groupImage && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setGroupImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Group Name */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Group Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          placeholder="e.g., Karachi Hakeems Network"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          maxLength={100}
        />
        <p className="text-xs text-muted-foreground">
          {formData.name.length}/100 characters
        </p>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">
          Description <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="description"
          placeholder="Describe what your group is about..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          maxLength={500}
        />
        <p className="text-xs text-muted-foreground">
          {formData.description.length}/500 characters
        </p>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          placeholder="e.g., Professional, Research, Education"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
      </div>

      {/* Group Type */}
      <div className="space-y-3">
        <Label>Group Privacy</Label>
        <RadioGroup
          value={formData.type}
          onValueChange={(value) => setFormData({ ...formData, type: value })}
        >
          <div className="flex items-start space-x-3 p-3 rounded-lg border hover:border-primary/50 transition-colors">
            <RadioGroupItem value="public" id="public" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="public" className="flex items-center space-x-2 cursor-pointer">
                <Globe className="h-5 w-5 text-primary" />
                <span className="font-medium">Public</span>
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                Anyone can see and join this group
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-lg border hover:border-primary/50 transition-colors">
            <RadioGroupItem value="private" id="private" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="private" className="flex items-center space-x-2 cursor-pointer">
                <Lock className="h-5 w-5 text-primary" />
                <span className="font-medium">Private</span>
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                Only members can see posts. Join requests need approval.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-lg border hover:border-primary/50 transition-colors">
            <RadioGroupItem value="premium" id="premium" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="premium" className="flex items-center space-x-2 cursor-pointer">
                <Crown className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">Premium</span>
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                Exclusive group for verified professionals only
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Group Rules */}
      <div className="space-y-2">
        <Label htmlFor="rules">Group Rules (Optional)</Label>
        <Textarea
          id="rules"
          placeholder="Set guidelines for your group members..."
          value={formData.rules}
          onChange={(e) => setFormData({ ...formData, rules: e.target.value })}
          rows={3}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-3 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" variant="hero">
          Create Group
        </Button>
      </div>
    </form>
  );
};

export default CreateGroupForm;
