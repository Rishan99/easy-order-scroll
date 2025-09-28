import { useState, useCallback } from 'react';
import { CartItem, CartState, MenuItem } from '@/types/menu';

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    total: 0,
    itemCount: 0,
  });

  const addToCart = useCallback((menuItem: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.id === menuItem.id);
      
      let newItems: CartItem[];
      if (existingItem) {
        newItems = prevCart.items.map(item =>
          item.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [
          ...prevCart.items,
          {
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
            image: menuItem.image,
          },
        ];
      }

      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        items: newItems,
        total,
        itemCount,
      };
    });
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.id === itemId);
      if (!existingItem) return prevCart;

      let newItems: CartItem[];
      if (existingItem.quantity === 1) {
        newItems = prevCart.items.filter(item => item.id !== itemId);
      } else {
        newItems = prevCart.items.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        items: newItems,
        total,
        itemCount,
      };
    });
  }, []);

  const getItemQuantity = useCallback((itemId: string) => {
    const item = cart.items.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  }, [cart.items]);

  const clearCart = useCallback(() => {
    setCart({
      items: [],
      total: 0,
      itemCount: 0,
    });
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
    getItemQuantity,
    clearCart,
  };
};