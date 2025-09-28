import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryNavigation } from "@/components/CategoryNavigation";
import { MenuSection } from "@/components/MenuSection";
import { CartModal } from "@/components/CartModal";
import { useCart } from "@/hooks/useCart";
import { menuData } from "@/data/menuData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id || "");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, removeFromCart, getItemQuantity, clearCart } = useCart();

  // Auto-update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.map(category => 
        document.getElementById(`category-${category.id}`)
      );
      
      const scrollPosition = window.scrollY + 200; // Offset for sticky headers

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(menuData[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const yOffset = -128; // Account for sticky headers
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleAddToCart = (item: any) => {
    addToCart(item);
  };

  const handleCartItemAdd = (itemId: string) => {
    const item = menuData
      .flatMap(category => category.items)
      .find(item => item.id === itemId);
    if (item) {
      addToCart(item);
    }
  };

  return (
    <div className="min-h-screen bg-food-light">
      <Header 
        cartItemCount={cart.itemCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      {/* Hero Image */}
      <div className="relative h-48 bg-gradient-warm overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Our Delicious Menu
          </h1>
        </div>
      </div>
      
      <CategoryNavigation
        categories={menuData}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      
      <main className="container mx-auto px-4 py-8">
        
        {menuData.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            getItemQuantity={getItemQuantity}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={removeFromCart}
          />
        ))}
      </main>
      
      <Footer />
      
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onAddToCart={handleCartItemAdd}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default Index;
