import { InputCheckbox } from "@/components/ui/inputs/InputCheckbox";
import {
  ShopFiltersAction,
  ShopFiltersState,
  SortOption,
} from "@/hooks/shop/shopFiltersReducer";
import { Dispatch } from "react";

type OrderSectionProps = {
  selectedSort: ShopFiltersState["sort"];
  dispatch: Dispatch<ShopFiltersAction>;
};

const sortOptions: {
  label: string;
  value: Exclude<SortOption, "default">;
}[] = [
  {
    label: "Novedades",
    value: "newest",
  },
  {
    label: "Precio: Menor a Mayor",
    value: "price-asc",
  },
  {
    label: "Precio: Mayor a Menor",
    value: "price-desc",
  },
];

export default function OrderSection({
  selectedSort,
  dispatch,
}: OrderSectionProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-base xl:text-lg text-on-surface border-b-2 border-on-surface pb-xs mb-sm">
        Ordenar por
      </h3>

      {sortOptions.map((option) => {
        const isSelected = selectedSort === option.value;

        return (
          <label
            key={option.value}
            className="flex items-center gap-sm cursor-pointer group"
          >
            <InputCheckbox
              checked={isSelected}
              className="form-checkbox text-on-surface border-on-surface flex"
              onChange={() =>
                dispatch({
                  type: "TOGGLE_SORT",
                  payload: option.value,
                })
              }
            />

            <span className="text-on-surface text-sm xl:text-base">
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}
