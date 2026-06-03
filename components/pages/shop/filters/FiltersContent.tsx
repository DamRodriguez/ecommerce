import CategorySection from "@/components/pages/shop/filters/CategorySection";
import OrderSection from "@/components/pages/shop/filters/OrderSection";
import Button from "@/components/ui/buttons/Button";
import { InputText } from "@/components/ui/inputs/InputText";
import {
  ShopFiltersAction,
  ShopFiltersState,
} from "@/hooks/shop/shopFiltersReducer";
import { Search } from "lucide-react";
import { Dispatch } from "react";

type FiltersContentProps = {
  categories: string[];
  filters: ShopFiltersState;
  dispatch: Dispatch<ShopFiltersAction>;
  isMobileFiltersOpen: boolean;
};

export default function FiltersContent({
  categories,
  filters,
  dispatch,
  isMobileFiltersOpen,
}: FiltersContentProps) {
  return (
    <>
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2">
          <Search className="w-5 h-5 stroke-on-surface" />
        </span>

        <InputText
          placeholder="Buscar artículos..."
          type="text"
          value={filters.search}
          onChange={(event) =>
            dispatch({
              type: "SET_SEARCH",
              payload: event.target.value,
            })
          }
          className="pl-[1.8rem]"
        />
      </div>

      <CategorySection
        categories={categories}
        selectedCategories={filters.categories}
        dispatch={dispatch}
      />

      <OrderSection selectedSort={filters.sort} dispatch={dispatch} />

      <Button
        onClick={() =>
          dispatch({
            type: "RESET_FILTERS",
          })
        }
        full
        customUppercase
        outline={isMobileFiltersOpen}
      >
        <p>Limpiar filtros</p>
      </Button>
    </>
  );
}
