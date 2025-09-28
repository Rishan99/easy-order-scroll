import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent">
            FoodieMenu
          </h1>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onCartClick}
          className="relative hover:bg-food-cream transition-smooth"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartItemCount > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-cart-badge text-white text-xs font-bold flex items-center justify-center shadow-cart animate-bounce"
            >
              {cartItemCount}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  );
};