import { useState } from "react";
import AuthenticatedHeader from "@/components/auth/AuthenticatedHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, Search, Filter, Star, ShoppingCart, Users, Heart } from "lucide-react";

const mockProducts = [
  {
    id: "1",
    name: "Arjuna Bark Extract",
    category: "Cardiovascular",
    price: "Rs. 1,200",
    originalPrice: "Rs. 1,500",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 89,
    inStock: true,
    organic: true,
    description: "Pure Arjuna bark extract for heart health and circulation support"
  },
  {
    id: "2",
    name: "Turmeric & Black Pepper",
    category: "Anti-inflammatory",
    price: "Rs. 800",
    originalPrice: "Rs. 1,000",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    organic: true,
    description: "Traditional anti-inflammatory blend with enhanced bioavailability"
  },
  {
    id: "3",
    name: "Digestive Herbal Tea",
    category: "Digestive Health",
    price: "Rs. 600",
    originalPrice: "Rs. 800",
    image: "/placeholder.svg",
    rating: 4.3,
    reviews: 67,
    inStock: false,
    organic: false,
    description: "Soothing herbal blend for digestive comfort and wellness"
  },
  {
    id: "4",
    name: "Ashwagandha Root Powder",
    category: "Stress & Sleep",
    price: "Rs. 950",
    originalPrice: "Rs. 1,200",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 234,
    inStock: true,
    organic: true,
    description: "Premium quality adaptogenic herb for stress relief and vitality"
  }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader />

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gradient-primary mb-4">
              Traditional Medicine Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Authentic herbal remedies and supplements crafted using time-tested Tibb formulations
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-card rounded-lg p-6 shadow-soft mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiovascular">Cardiovascular</SelectItem>
                  <SelectItem value="digestive">Digestive Health</SelectItem>
                  <SelectItem value="respiratory">Respiratory</SelectItem>
                  <SelectItem value="stress">Stress & Sleep</SelectItem>
                  <SelectItem value="immunity">Immunity</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="hero" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {mockProducts.map((product) => (
              <Card key={product.id} className="hover-lift group">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      {product.organic && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Organic
                        </Badge>
                      )}
                      {!product.inStock && (
                        <Badge variant="destructive">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm mb-3">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant={product.inStock ? "hero" : "outline"}
                    className="w-full"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <Card className="bg-muted/30 border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                <p className="text-muted-foreground mb-6">
                  Get notified about new products, special offers, and traditional medicine insights
                </p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button variant="hero">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;