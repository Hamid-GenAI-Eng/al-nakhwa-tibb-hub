import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthenticatedHeader from "@/components/auth/AuthenticatedHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  MapPin, 
  CreditCard,
  ArrowRight,
  Phone,
  Mail,
  Home
} from "lucide-react";

interface OrderData {
  orderId: string;
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

const OrderConfirmation = () => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem('currentOrder');
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
      // Store in order history
      const orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
      const newOrder = { ...JSON.parse(storedOrder), status: 'pending', placedAt: new Date().toISOString() };
      orderHistory.push(newOrder);
      localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
      localStorage.removeItem('currentOrder');
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <AuthenticatedHeader />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
            <Link to="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const getPaymentMethodIcon = () => {
    switch (orderData.paymentMethod) {
      case 'jazzcash': return <Phone className="h-4 w-4" />;
      case 'easypaisa': return <Phone className="h-4 w-4" />;
      case 'bank': return <CreditCard className="h-4 w-4" />;
      default: return <Truck className="h-4 w-4" />;
    }
  };

  const getPaymentMethodLabel = () => {
    switch (orderData.paymentMethod) {
      case 'jazzcash': return 'JazzCash';
      case 'easypaisa': return 'Easypaisa';
      case 'bank': return 'Bank Transfer';
      default: return 'Cash on Delivery';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">Order Placed Successfully!</h1>
            <p className="text-muted-foreground">Thank you for your order. We'll send you updates via email and SMS.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Order Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Order ID:</span>
                    <Badge variant="outline" className="font-mono">{orderData.orderId}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Status:</span>
                    <Badge className="bg-blue-100 text-blue-700">Processing</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Items:</span>
                    <span>{orderData.orderSummary.items} items</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Delivery Method:</span>
                    <span className="capitalize">{orderData.deliveryMethod} Delivery</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Payment Method:</span>
                    <div className="flex items-center gap-2">
                      {getPaymentMethodIcon()}
                      {getPaymentMethodLabel()}
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
                    <p className="font-medium">{orderData.deliveryAddress.fullName}</p>
                    <p className="text-muted-foreground">{orderData.deliveryAddress.address}</p>
                    <p className="text-muted-foreground">
                      {orderData.deliveryAddress.city}
                      {orderData.deliveryAddress.postalCode && `, ${orderData.deliveryAddress.postalCode}`}
                    </p>
                    <p className="text-muted-foreground">{orderData.deliveryAddress.phone}</p>
                    {orderData.deliveryAddress.email && (
                      <p className="text-muted-foreground">{orderData.deliveryAddress.email}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>What happens next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full flex-shrink-0">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Order Confirmation</p>
                      <p className="text-sm text-muted-foreground">We'll send you an email and SMS confirmation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full flex-shrink-0">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Processing</p>
                      <p className="text-sm text-muted-foreground">We'll prepare your order for shipment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full flex-shrink-0">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Your order will be delivered in {orderData.deliveryMethod === 'express' ? '1-2' : '3-5'} business days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal ({orderData.orderSummary.items} items)</span>
                      <span>Rs. {orderData.orderSummary.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>You Saved</span>
                      <span>-Rs. {orderData.orderSummary.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      {orderData.orderSummary.delivery === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        <span>Rs. {orderData.orderSummary.delivery}</span>
                      )}
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>Rs. {orderData.orderSummary.total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link to="/order-tracking" className="block">
                  <Button className="w-full" variant="outline">
                    <Package className="h-4 w-4 mr-2" />
                    Track Your Order
                  </Button>
                </Link>
                <Link to="/products" className="block">
                  <Button className="w-full hero-gradient hover-lift">
                    <Home className="h-4 w-4 mr-2" />
                    Continue Shopping
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Support */}
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

export default OrderConfirmation;