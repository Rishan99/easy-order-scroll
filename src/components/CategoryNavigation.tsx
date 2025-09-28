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
    <div className="sticky top-16 z-40 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90 border-b border-slate-700 shadow-lg" id="category-nav">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "category-active" : "category"}
              size="sm"
              onClick={() => onCategoryClick(category.id)}
              className="shrink-0 transition-all duration-200 transform hover:scale-105"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};