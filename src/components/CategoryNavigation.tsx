import { Button } from "@/components/ui/button";
import { MenuCategory } from "@/types/menu";

interface CategoryNavigationProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

export const CategoryNavigation = ({
  categories,
  activeCategory,
  onCategoryClick,
}: CategoryNavigationProps) => {
  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft" id="category-nav">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "category-active" : "category"}
              size="sm"
              onClick={() => onCategoryClick(category.id)}
              className="shrink-0 transition-bounce"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};