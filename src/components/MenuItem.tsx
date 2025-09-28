import { Plus, Minus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MenuItem as MenuItemType } from "@/types/menu";

interface MenuItemProps {
  item: MenuItemType;
  quantity: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

export const MenuItem = ({ item, quantity, onAddToCart, onRemoveFromCart }: MenuItemProps) => {
  const isInCart = quantity > 0;

  return (
    <Card 
      className={`group hover:shadow-card transition-smooth ${
        isInCart ? 'ring-2 ring-primary shadow-card bg-gradient-card' : 'hover:bg-food-cream'
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          {item.image && (
            <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-food-cream">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                {item.name}
              </CardTitle>
              {isInCart && (
                <Badge className="bg-primary text-primary-foreground font-bold">
                  {quantity} in cart
                </Badge>
              )}
            </div>
            {item.description && (
              <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            ${item.price.toFixed(2)}
          </div>
          
          <div className="flex items-center gap-2">
            {isInCart ? (
              <>
                <Button
                  variant="cart-secondary"
                  size="icon"
                  onClick={onRemoveFromCart}
                  className="h-8 w-8"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-semibold text-primary">
                  {quantity}
                </span>
                <Button
                  variant="cart"
                  size="icon"
                  onClick={onAddToCart}
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button
                variant="cart"
                size="sm"
                onClick={onAddToCart}
                className="gap-1"
              >
                <Plus className="h-4 w-4" />
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};