import { MenuCategory } from "@/types/menu";
import { MenuItem } from "./MenuItem";

interface MenuSectionProps {
  category: MenuCategory;
  getItemQuantity: (itemId: string) => number;
  onAddToCart: (item: any) => void;
  onRemoveFromCart: (itemId: string) => void;
}

export const MenuSection = ({
  category,
  getItemQuantity,
  onAddToCart,
  onRemoveFromCart,
}: MenuSectionProps) => {
  return (
    <section
      id={`category-${category.id}`}
      className="mb-8 scroll-mt-32"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          {category.name}
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full"></div>
      </div>
      
      <div className="grid gap-4">
        {category.items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            quantity={getItemQuantity(item.id)}
            onAddToCart={() => onAddToCart(item)}
            onRemoveFromCart={() => onRemoveFromCart(item.id)}
          />
        ))}
      </div>
    </section>
  );
};