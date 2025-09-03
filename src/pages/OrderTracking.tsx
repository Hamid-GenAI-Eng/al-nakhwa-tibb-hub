import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthenticatedHeader from "@/components/auth/AuthenticatedHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Package, 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Truck, 
  Home,
  Phone,
  Mail,
  ArrowLeft
} from "lucide-react";

interface Order {
  orderId: string;
  status: string;
  placedAt: string;
  paymentMethod: string;
  deliveryMethod: string;
  deliveryAddress: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
  };
  orderSummary: {
    subtotal: number;
    delivery: number;
    total: number;
    savings: number;
    items: number;
  };
}

const OrderTracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchedOrder, setSearchedOrder] = useState<Order | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    setOrders(orderHistory);
  }, []);

  const handleSearch = () => {
    setSearchAttempted(true);
    const foundOrder = orders.find(order => order.orderId === trackingId);
    setSearchedOrder(foundOrder || null);
  };

  const getStatusSteps = (status: string) => {
    const allSteps = [
      { key: 'pending', label: 'Order Placed', icon: Package, description: 'Your order has been received' },
      { key: 'processing', label: 'Processing', icon: Clock, description: 'We are preparing your order' },
      { key: 'shipped', label: 'Shipped', icon: Truck, description: 'Your order is on the way' },
      { key: 'delivered', label: 'Delivered', icon: CheckCircle, description: 'Order delivered successfully' }
    ];

    const currentIndex = allSteps.findIndex(step => step.key === status);
    return allSteps.map((step, index) => ({
      ...step,
      completed: index <= currentIndex,
      current: index === currentIndex
    }));
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'pending': return 'outline';
      case 'processing': return 'secondary';
      case 'shipped': return 'default';
      case 'delivered': return 'default';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600';
      case 'processing': return 'text-blue-600';
      case 'shipped': return 'text-purple-600';
      case 'delivered': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  // Mock status progression for demo
  const mockStatus = searchedOrder ? (
    Math.random() > 0.5 ? 'processing' : 
    Math.random() > 0.3 ? 'shipped' : 'delivered'
  ) : 'pending';

  const currentOrder = searchedOrder ? { ...searchedOrder, status: mockStatus } : null;

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold">Track Your Order</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search Order */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Enter Order ID
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="trackingId">Order ID</Label>
                    <Input
                      id="trackingId"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      placeholder="ORD-1234567890"
                      className="font-mono"
                    />
                  </div>
                  <Button onClick={handleSearch} className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Track Order
                  </Button>
                </CardContent>
              </Card>

              {/* Search Results */}
              {searchAttempted && (
                <>
                  {currentOrder ? (
                    <>
                      {/* Order Status */}
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                              <Package className="h-5 w-5" />
                              Order {currentOrder.orderId}
                            </CardTitle>
                            <Badge variant={getStatusBadgeVariant(currentOrder.status)} className={getStatusColor(currentOrder.status)}>
                              {currentOrder.status.charAt(0).toUpperCase() + currentOrder.status.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            {/* Status Timeline */}
                            <div className="space-y-4">
                              {getStatusSteps(currentOrder.status).map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                  <div key={step.key} className="flex items-start gap-4">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 ${
                                      step.completed 
                                        ? 'bg-primary text-primary-foreground' 
                                        : 'bg-muted text-muted-foreground'
                                    }`}>
                                      <IconComponent className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1 pb-8">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h3 className={`font-medium ${step.current ? 'text-primary' : ''}`}>
                                          {step.label}
                                        </h3>
                                        {step.completed && (
                                          <CheckCircle className="h-4 w-4 text-green-500" />
                                        )}
                                      </div>
                                      <p className="text-sm text-muted-foreground">{step.description}</p>
                                      {step.current && (
                                        <p className="text-xs text-primary mt-1">Current Status</p>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Order Details */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Order Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm text-muted-foreground">Order Date</span>
                              <p className="font-medium">
                                {new Date(currentOrder.placedAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Total Amount</span>
                              <p className="font-medium">Rs. {currentOrder.orderSummary.total}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Payment Method</span>
                              <p className="font-medium capitalize">{currentOrder.paymentMethod.replace(/([A-Z])/g, ' $1')}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Delivery Method</span>
                              <p className="font-medium capitalize">{currentOrder.deliveryMethod} Delivery</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Delivery Address */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            Delivery Address
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="font-medium">{currentOrder.deliveryAddress.fullName}</p>
                            <p className="text-muted-foreground">{currentOrder.deliveryAddress.address}</p>
                            <p className="text-muted-foreground">
                              {currentOrder.deliveryAddress.city}
                              {currentOrder.deliveryAddress.postalCode && `, ${currentOrder.deliveryAddress.postalCode}`}
                            </p>
                            <p className="text-muted-foreground">{currentOrder.deliveryAddress.phone}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  ) : (
                    <Card>
                      <CardContent className="text-center py-8">
                        <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Order Not Found</h3>
                        <p className="text-muted-foreground mb-4">
                          We couldn't find an order with ID: {trackingId}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Please check your order ID and try again, or contact our support team for assistance.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}

              {/* Recent Orders */}
              {orders.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Your Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.slice(-3).reverse().map((order) => (
                        <div key={order.orderId} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <Package className="h-8 w-8 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{order.orderId}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(order.placedAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">Rs. {order.orderSummary.total}</p>
                            <Badge variant="outline" className="text-xs">
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/products" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Home className="h-4 w-4 mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                  <Link to="/order-confirmation" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="h-4 w-4 mr-2" />
                      View Last Order
                    </Button>
                  </Link>
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
                  <Separator className="my-3" />
                  <p className="text-xs text-muted-foreground">
                    Our support team is available 24/7 to help you with your orders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderTracking;