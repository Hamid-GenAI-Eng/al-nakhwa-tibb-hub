import { useState } from "react";
import { Link } from "react-router-dom";
import AuthenticatedHeader from "@/components/auth/AuthenticatedHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  ShoppingCart, 
  Trash2, 
  ArrowLeft, 
  Star,
  Share2,
  Filter
} from "lucide-react";

// Mock wishlist data  
const mockWishlistItems = [
  {
    id: "1",
    name: "Arjuna Bark Extract",
    category: "Cardiovascular", 
    price: 1200,
    originalPrice: 1500,
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 89,
    inStock: true,
    organic: true,
    addedDate: "2024-01-15"
  },
  {
    id: "3",
    name: "Digestive Herbal Tea",
    category: "Digestive Health",
    price: 600,
    originalPrice: 800, 
    image: "/placeholder.svg",
    rating: 4.3,
    reviews: 67,
    inStock: false,
    organic: false,
    addedDate: "2024-01-10"
  },
  {
    id: "4", 
    name: "Ashwagandha Root Powder",
    category: "Stress & Sleep",
    price: 950,
    originalPrice: 1200,
    image: "/placeholder.svg",
    rating: 4.6, 
    reviews: 234,
    inStock: true,
    organic: true,
    addedDate: "2024-01-08"
  }
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);
  const [filter, setFilter] = useState("all"); // all, inStock, outOfStock

  const removeFromWishlist = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (id: string) => {
    console.log("Added to cart:", id);
    // Add to cart logic here
  };

  const filteredItems = wishlistItems.filter(item => {
    if (filter === "inStock") return item.inStock;
    if (filter === "outOfStock") return !item.inStock;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/products" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Products
              </Link>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Heart className="h-8 w-8 text-red-500 fill-current" />
                My Wishlist ({wishlistItems.length})
              </h1>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share Wishlist
            </Button>
          </div>

          {wishlistItems.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
                <p className="text-muted-foreground mb-6">Save your favorite products here!</p>
                <Link to="/products">
                  <Button className="hero-gradient">
                    Explore Products
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Filter Controls */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filter:</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={filter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("all")}
                  >
                    All ({wishlistItems.length})
                  </Button>
                  <Button
                    variant={filter === "inStock" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("inStock")}
                  >
                    In Stock ({wishlistItems.filter(item => item.inStock).length})
                  </Button>
                  <Button
                    variant={filter === "outOfStock" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("outOfStock")}
                  >
                    Out of Stock ({wishlistItems.filter(item => !item.inStock).length})
                  </Button>
                </div>
              </div>

              {/* Wishlist Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="hover-lift group relative">
                    <CardHeader className="p-0">
                      <div className="relative">
                        <Link to={`/product/${item.id}`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </Link>
                        
                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex gap-2">
                          {item.organic && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              Organic
                            </Badge>
                          )}
                          {!item.inStock && (
                            <Badge variant="destructive">
                              Out of Stock
                            </Badge>
                          )}
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromWishlist(item.id)}
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {item.category}
                      </Badge>
                      
                      <Link to={`/product/${item.id}`}>
                        <CardTitle className="text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                          {item.name}
                        </CardTitle>
                      </Link>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm font-medium">{item.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">
                          ({item.reviews})
                        </span>
                      </div>
                      
                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-lg font-bold text-primary">Rs. {item.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          Rs. {item.originalPrice}
                        </span>
                      </div>

                      {/* Added Date */}
                      <p className="text-xs text-muted-foreground">
                        Added on {new Date(item.addedDate).toLocaleDateString()}
                      </p>
                    </CardContent>
                    
                    <CardFooter className="p-4 pt-0">
                      <div className="w-full space-y-2">
                        <Button
                          onClick={() => addToCart(item.id)}
                          variant={item.inStock ? "default" : "outline"}
                          className={`w-full ${item.inStock ? 'hero-gradient' : ''}`}
                          disabled={!item.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {item.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                        
                        {item.inStock && (
                          <Link to={`/product/${item.id}`} className="block">
                            <Button variant="outline" className="w-full">
                              View Details
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <Card className="text-center py-12">
                  <CardContent>
                    <Filter className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No items found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters</p>
                  </CardContent>
                </Card>
              )}

              {/* Quick Actions */}
              {wishlistItems.length > 0 && (
                <div className="mt-12 text-center">
                  <div className="flex gap-4 justify-center">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        wishlistItems.filter(item => item.inStock).forEach(item => addToCart(item.id));
                      }}
                      disabled={!wishlistItems.some(item => item.inStock)}
                    >
                      Add All Available to Cart
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setWishlistItems([])}
                      className="text-red-600 hover:text-red-700"
                    >
                      Clear Wishlist
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Wishlist;