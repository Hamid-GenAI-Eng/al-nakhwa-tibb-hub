import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import AuthenticatedHeader from "@/components/auth/AuthenticatedHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  ShoppingCart, 
  Truck, 
  Shield, 
  Award,
  Plus,
  Minus,
  CreditCard,
  Smartphone,
  Building2
} from "lucide-react";

// Mock product data (in real app, this would come from API)
const mockProduct = {
  id: "1",
  name: "Arjuna Bark Extract",
  category: "Cardiovascular",
  price: 1200,
  originalPrice: 1500,
  discount: 20,
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  rating: 4.5,
  reviews: 89,
  inStock: true,
  stockCount: 25,
  organic: true,
  description: "Pure Arjuna bark extract for heart health and circulation support. This premium quality extract is sourced directly from sustainable farms and processed using traditional methods to preserve its natural potency.",
  benefits: [
    "Supports cardiovascular health",
    "Improves blood circulation",
    "Natural heart tonic",
    "Rich in antioxidants",
    "Traditional Ayurvedic remedy"
  ],
  ingredients: "100% Pure Arjuna (Terminalia arjuna) bark extract",
  dosage: "Take 1-2 capsules twice daily with water, or as recommended by your healthcare provider",
  manufacturer: "Al-Nakhwa Herbal Labs",
  certifications: ["Organic", "GMP Certified", "Lab Tested"],
  customerReviews: [
    {
      id: 1,
      name: "Ahmed Hassan",
      rating: 5,
      comment: "Excellent quality product. I've been using it for 3 months and feel much better.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Fatima Khan",
      rating: 4,
      comment: "Good product, fast delivery. Packaging could be better.",
      date: "2024-01-10"
    }
  ]
};

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log("Added to cart:", { productId: id, quantity });
    
    // Show toast with cart reference
    toast({
      title: "✅ Added to Cart!",
      description: (
        <div className="flex items-center gap-2">
          <span>{mockProduct.name} has been added to your cart.</span>
          <div className="flex items-center text-primary font-medium">
            <ShoppingCart className="h-4 w-4 mr-1" />
            View Cart →
          </div>
        </div>
      ),
      duration: 4000,
    });
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link to="/products" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src={mockProduct.images[selectedImage]}
                  alt={mockProduct.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {mockProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${mockProduct.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-3">{mockProduct.category}</Badge>
                <h1 className="text-3xl font-bold mb-4">{mockProduct.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(mockProduct.rating) 
                            ? 'text-yellow-500 fill-current' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {mockProduct.rating} ({mockProduct.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-primary">Rs. {mockProduct.price}</span>
                  <span className="text-xl text-muted-foreground line-through">Rs. {mockProduct.originalPrice}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {mockProduct.discount}% OFF
                  </Badge>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-3 h-3 rounded-full ${mockProduct.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={`font-medium ${mockProduct.inStock ? 'text-green-700' : 'text-red-700'}`}>
                    {mockProduct.inStock ? `In Stock (${mockProduct.stockCount} available)` : 'Out of Stock'}
                  </span>
                </div>

                {/* Certifications */}
                <div className="flex gap-2 mb-6">
                  {mockProduct.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <Award className="h-3 w-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-medium">Quantity:</label>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= mockProduct.stockCount}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleAddToCart} className="flex-1 hero-gradient hover-lift">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleAddToWishlist}
                    className={isWishlisted ? 'text-red-500 border-red-200' : ''}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                </div>

                {/* Payment Options */}
                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Payment & Delivery Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Cash on Delivery</p>
                        <p className="text-sm text-muted-foreground">Pay when you receive</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <p className="font-medium">Digital Payment Options:</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Smartphone className="h-4 w-4 mr-2" />
                          JazzCash
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Smartphone className="h-4 w-4 mr-2" />
                          Easypaisa
                        </Button>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Building2 className="h-4 w-4 mr-2" />
                        Bank Transfer
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    Secure Payment
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="h-4 w-4" />
                    Free Delivery
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Authentic Products
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({mockProduct.customerReviews.length})</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Product Description</h3>
                      <p className="text-muted-foreground leading-relaxed">{mockProduct.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {mockProduct.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">How to Use</h3>
                      <p className="text-muted-foreground">{mockProduct.dosage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {mockProduct.customerReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-1">Ingredients</h4>
                        <p className="text-muted-foreground">{mockProduct.ingredients}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Manufacturer</h4>
                        <p className="text-muted-foreground">{mockProduct.manufacturer}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Category</h4>
                        <p className="text-muted-foreground">{mockProduct.category}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Stock Status</h4>
                        <p className={`font-medium ${mockProduct.inStock ? 'text-green-600' : 'text-red-600'}`}>
                          {mockProduct.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;