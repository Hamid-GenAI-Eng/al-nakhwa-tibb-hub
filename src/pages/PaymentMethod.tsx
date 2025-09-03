import { useState } from "react";
import { Link } from "react-router-dom";
import AuthenticatedHeader from "@/components/auth/AuthenticatedHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Truck, 
  Shield,
  CheckCircle,
  MapPin,
  User,
  Phone,
  Mail
} from "lucide-react";

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [deliveryAddress, setDeliveryAddress] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: ""
  });

  // Mock order summary with dynamic delivery cost
  const deliveryCost = deliveryMethod === "express" ? 200 : 0;
  const orderSummary = {
    subtotal: 2000,
    delivery: deliveryCost,
    total: 2000 + deliveryCost,
    savings: 500,
    items: 2
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
      paymentMethod,
      deliveryMethod,
      deliveryAddress,
      orderSummary,
      orderId: `ORD-${Date.now()}`
    };
    console.log("Order placed:", orderData);
    
    // Store order data in localStorage for demo purposes
    localStorage.setItem('currentOrder', JSON.stringify(orderData));
    
    // Redirect to order confirmation
    window.location.href = '/order-confirmation';
  };

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/cart" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Cart
            </Link>
            <h1 className="text-3xl font-bold">Checkout</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={deliveryAddress.fullName}
                        onChange={(e) => setDeliveryAddress(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={deliveryAddress.phone}
                        onChange={(e) => setDeliveryAddress(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+92 300 1234567"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={deliveryAddress.email}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      value={deliveryAddress.address}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="House #, Street, Area, Landmark"
                      required
                      rows={3}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={deliveryAddress.city}
                        onChange={(e) => setDeliveryAddress(prev => ({ ...prev, city: e.target.value }))}
                        placeholder="Karachi, Lahore, Islamabad..."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={deliveryAddress.postalCode}
                        onChange={(e) => setDeliveryAddress(prev => ({ ...prev, postalCode: e.target.value }))}
                        placeholder="74200"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Delivery Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="space-y-4">
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Standard Delivery</p>
                            <p className="text-sm text-muted-foreground">3-5 business days</p>
                          </div>
                          <span className="text-green-600 font-medium">FREE</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Express Delivery</p>
                            <p className="text-sm text-muted-foreground">1-2 business days</p>
                          </div>
                          <span className="font-medium">Rs. 200</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    {/* Cash on Delivery */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Truck className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium">Cash on Delivery</p>
                              <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700">Recommended</Badge>
                        </div>
                      </Label>
                    </div>

                    {/* JazzCash */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="jazzcash" id="jazzcash" />
                      <Label htmlFor="jazzcash" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Smartphone className="h-5 w-5 text-red-600" />
                          <div>
                            <p className="font-medium">JazzCash</p>
                            <p className="text-sm text-muted-foreground">Mobile wallet payment</p>
                          </div>
                        </div>
                      </Label>
                    </div>

                    {/* Easypaisa */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="easypaisa" id="easypaisa" />
                      <Label htmlFor="easypaisa" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Smartphone className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">Easypaisa</p>
                            <p className="text-sm text-muted-foreground">Mobile wallet payment</p>
                          </div>
                        </div>
                      </Label>
                    </div>

                    {/* Bank Transfer */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Bank Transfer</p>
                            <p className="text-sm text-muted-foreground">Direct bank account transfer</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {/* Payment Method Details */}
                  {paymentMethod === "jazzcash" && (
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">JazzCash Payment Instructions:</p>
                      <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                        <li>You will receive an SMS with payment details</li>
                        <li>Open JazzCash app or dial *786#</li>
                        <li>Follow the instructions to complete payment</li>
                      </ol>
                    </div>
                  )}

                  {paymentMethod === "easypaisa" && (
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Easypaisa Payment Instructions:</p>
                      <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                        <li>You will receive payment details via SMS</li>
                        <li>Open Easypaisa app or visit agent</li>
                        <li>Complete the transaction using provided details</li>
                      </ol>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Bank Transfer Details:</p>
                      <div className="text-sm space-y-1">
                        <p><span className="font-medium">Account Title:</span> Al-Nakhwa Tibb Hub</p>
                        <p><span className="font-medium">Account Number:</span> 1234567890</p>
                        <p><span className="font-medium">Bank:</span> HBL Bank</p>
                        <p><span className="font-medium">IBAN:</span> PK12HABB0001234567890</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal ({orderSummary.items} items)</span>
                      <span>Rs. {orderSummary.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>You Save</span>
                      <span>-Rs. {orderSummary.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      {deliveryCost === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        <span>Rs. {deliveryCost}</span>
                      )}
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>Rs. {orderSummary.total}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <Button type="submit" className="w-full hero-gradient hover-lift">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Place Order
                    </Button>
                  </form>

                  {/* Trust Indicators */}
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-green-500" />
                      100% Secure & Safe
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Truck className="h-4 w-4 text-green-500" />
                      Fast & Reliable Delivery
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Quality Guaranteed
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Support */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">Need Help?</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+92 300 1234567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>support@alnakhwa.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentMethod;