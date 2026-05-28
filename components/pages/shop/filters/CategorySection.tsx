import { InputCheckbox } from "@/components/ui/inputs/InputCheckbox";
import {
  ShopFiltersAction,
  ShopFiltersState,
} from "@/hooks/shop/shopFiltersReducer";
import { Dispatch } from "react";

type CategorySectionProps = {
  categories: string[];
  selectedCategories: ShopFiltersState["categories"];
  dispatch: Dispatch<ShopFiltersAction>;
};

export default function CategorySection({
  categories,
  selectedCategories,
  dispatch,
}: CategorySectionProps) {
  const allProductsSelected = selectedCategories.length === 0;

  return (
    <div className="flex flex-col">
      <h3 className="text-base xl:text-lg text-on-surface border-b-2 border-on-surface pb-xs mb-sm">
        Categoría
      </h3>

      <label className="flex items-center gap-xs cursor-pointer group">
        <InputCheckbox
          checked={allProductsSelected}
          className="form-checkbox text-on-surface border-on-surface flex"
          onChange={() =>
            dispatch({
              type: "CLEAR_CATEGORIES",
            })
          }
        />

        <span className="text-on-surface text-sm xl:text-base">
          Todos los productos
        </span>
      </label>

      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category);

        return (
          <label
            key={category}
            className="flex items-center gap-sm cursor-pointer group"
          >
            <InputCheckbox
              checked={isSelected}
              className="form-checkbox text-on-surface border-on-surface flex"
              onChange={() =>
                dispatch({
                  type: "TOGGLE_CATEGORY",
                  payload: category,
                })
              }
            />

            <span className="text-on-surface text-sm xl:text-base">
              {category}
            </span>
          </label>
        );
      })}
    </div>
  );
}
