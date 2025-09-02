import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles, Users, ShoppingBag, MessageSquare, LogOut, User, Heart, ShoppingCart } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AuthenticatedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [cartItemsCount] = useState(2); // Mock cart count
  const [wishlistCount] = useState(3); // Mock wishlist count

  const navItems = [
    { name: "AI Chatbot", href: "/ai-chat", icon: Sparkles },
    { name: "Find Hakeem", href: "/find-hakeem", icon: Users },
    { name: "Products", href: "/products", icon: ShoppingBag },
    { name: "Community", href: "/community", icon: MessageSquare },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 card-gradient shadow-medium border-b border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/ai-chat" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ا</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-primary">Al-Nakhwa</h1>
              <p className="text-xs text-muted-foreground">Tibb Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary font-medium'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                <item.icon size={16} />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Menu & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart and Wishlist Icons */}
            <Link to="/wishlist" className="relative p-2 hover:bg-muted rounded-lg transition-colors">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0">
                  {wishlistCount}
                </Badge>
              )}
            </Link>
            
            <Link to="/cart" className="relative p-2 hover:bg-muted rounded-lg transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge variant="default" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0">
                  {cartItemsCount}
                </Badge>
              )}
            </Link>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">{user?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 transition-colors duration-200 py-2 ${
                    isActive(item.href)
                      ? 'text-primary font-medium'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Cart & Wishlist */}
              <div className="flex space-x-4 py-2">
                <Link
                  to="/wishlist"
                  className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative">
                    <Heart size={18} />
                    {wishlistCount > 0 && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center text-xs p-0">
                        {wishlistCount}
                      </Badge>
                    )}
                  </div>
                  <span>Wishlist</span>
                </Link>
                
                <Link
                  to="/cart"
                  className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative">
                    <ShoppingCart size={18} />
                    {cartItemsCount > 0 && (
                      <Badge variant="default" className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center text-xs p-0">
                        {cartItemsCount}
                      </Badge>
                    )}
                  </div>
                  <span>Cart</span>
                </Link>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center space-x-3 pb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">{user?.name}</span>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AuthenticatedHeader;