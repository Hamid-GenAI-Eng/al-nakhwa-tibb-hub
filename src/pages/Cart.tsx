import { useState } from "react";
import { Link } from "react-router-dom";
import AuthenticatedHeader from "@/components/auth/AuthenticatedHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowLeft, 
  Truck,
  Shield,
  Tag,
  CreditCard
} from "lucide-react";

// Mock cart data
const mockCartItems = [
  {
    id: "1",
    name: "Arjuna Bark Extract",
    price: 1200,
    originalPrice: 1500,
    image: "/placeholder.svg",
    quantity: 2,
    inStock: true
  },
  {
    id: "2", 
    name: "Turmeric & Black Pepper",
    price: 800,
    originalPrice: 1000,
    image: "/placeholder.svg", 
    quantity: 1,
    inStock: true
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const savings = originalTotal - subtotal;
  const deliveryFee = subtotal > 2000 ? 0 : 200;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/products" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Continue Shopping
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <ShoppingCart className="h-8 w-8 text-primary" />
              Shopping Cart
            </h1>
          </div>

          {cartItems.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Add some products to get started!</p>
                <Link to="/products">
                  <Button className="hero-gradient">
                    Start Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover-lift">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg truncate pr-4">{item.name}</h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl font-bold text-primary">Rs. {item.price}</span>
                            <span className="text-sm text-muted-foreground line-through">
                              Rs. {item.originalPrice}
                            </span>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                            </Badge>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border rounded-lg">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="px-4 py-2 font-medium">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <span className="font-semibold">
                              Rs. {item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tag className="h-5 w-5" />
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Subtotal ({cartItems.length} items)</span>
                        <span>Rs. {subtotal}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>You Save</span>
                        <span>-Rs. {savings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                          {deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`}
                        </span>
                      </div>
                      {deliveryFee > 0 && (
                        <p className="text-xs text-muted-foreground">
                          Add Rs. {2000 - subtotal} more for free delivery
                        </p>
                      )}
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>Rs. {total}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link to="/payment-method" className="w-full">
                        <Button className="w-full hero-gradient hover-lift">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Proceed to Checkout
                        </Button>
                      </Link>
                      
                      <div className="text-center">
                        <Link to="/products" className="text-primary hover:underline text-sm">
                          Continue Shopping
                        </Link>
                      </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 text-green-500" />
                        100% Secure Checkout
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Truck className="h-4 w-4 text-green-500" />
                        Free delivery on orders above Rs. 2000
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Promo Code */}
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3">Have a promo code?</h3>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Enter code" 
                        className="flex-1 px-3 py-2 border rounded-lg text-sm"
                      />
                      <Button variant="outline" size="sm">Apply</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;