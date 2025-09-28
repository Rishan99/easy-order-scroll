import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CartState } from "@/types/menu";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartState;
  onAddToCart: (itemId: string) => void;
  onRemoveFromCart: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartModal = ({
  isOpen,
  onClose,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}: CartModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <ShoppingCart className="h-5 w-5" />
            Your Order ({cart.itemCount} items)
          </DialogTitle>
          <DialogDescription>
            Review your order before checkout
          </DialogDescription>
        </DialogHeader>
        
        <div className="max-h-96 overflow-y-auto">
          {cart.items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Your cart is empty</p>
              <p className="text-sm">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-food-cream"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover bg-muted"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-primary font-semibold">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemoveFromCart(item.id)}
                      className="h-7 w-7"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    
                    <span className="w-8 text-center font-semibold text-sm">
                      {item.quantity}
                    </span>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onAddToCart(item.id)}
                      className="h-7 w-7"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary">${cart.total.toFixed(2)}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={onClearCart}
                    className="flex-1"
                  >
                    Clear Cart
                  </Button>
                  <Button
                    variant="cart"
                    className="flex-1"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};