"use client";
import MotionSlide from "@/components/motion/MotionSlide";
import {
  ShopFiltersAction,
  ShopFiltersState,
  SortOption,
} from "@/components/pages/shop/filters/shopFiltersReducer";
import Button from "@/components/ui/buttons/Button";
import { InputCheckbox } from "@/components/ui/inputs/InputCheckbox";
import { InputText } from "@/components/ui/inputs/InputText";
import { useScrollLock } from "@/hooks/useScrollLock";
import clsx from "clsx";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Dispatch, useState } from "react";

type SidebarFiltersProps = {
  categories: string[];
  filters: ShopFiltersState;
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

export default function SidebarFilters({
  categories,
  filters,
  dispatch,
}: SidebarFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  useScrollLock(isOpen);

  const allProductsSelected = filters.categories.length === 0;

  const closeFilters = () => {
    setIsOpen(false);
  };

  const filtersContent = (
    <>
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2">
          <Search className="w-5 h-5 stroke-on-surface" />
        </span>

        <InputText
          placeholder="Buscar catálogo ..."
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
          const isSelected = filters.categories.includes(category);

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

      <div className="flex flex-col">
        <h3 className="text-base xl:text-lg text-on-surface border-b-2 border-on-surface pb-xs mb-sm">
          Ordenar por
        </h3>

        {sortOptions.map((option) => {
          const isSelected = filters.sort === option.value;

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

      <Button
        onClick={() =>
          dispatch({
            type: "RESET_FILTERS",
          })
        }
        full
        customUppercase
      >
        Limpiar filtros
      </Button>
    </>
  );

  return (
    <>
      <MotionSlide
        direction="up"
        className="xl:hidden sticky top-header-mobile z-20"
      >
        <Button onClick={() => setIsOpen(true)} full border variant="secondary">
          <span className="flex items-center justify-center gap-xs">
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
          </span>
        </Button>
      </MotionSlide>

      {/* Desktop */}
      <MotionSlide direction="down" order={1} className="xl:mt-xl">
        <aside className="hidden xl:flex w-full md:w-64 flex-shrink-0 h-fit flex-col gap-xl top-[calc(var(--height-header-desktop)+2rem)] sticky">
          {filtersContent}
        </aside>
      </MotionSlide>

      {/* Mobile */}
      <div
        className={clsx(
          "fixed inset-0 z-50 xl:hidden custom-transition-all",
          isOpen
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none",
        )}
      >
        <button
          type="button"
          aria-label="Cerrar filtros"
          className={clsx(
            "absolute inset-0 bg-black/50 backdrop-blur-[0.3rem] custom-transition-all top-header-mobile",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={closeFilters}
        />

        <aside
          className={clsx(
            "absolute bottom-0 left-0 w-full overflow-y-auto max-h-[calc(100svh-var(--height-header-mobile))] bg-surface-bright border-t border-outline p-md custom-transition-all",
            isOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="flex items-center justify-end">
            <button
              type="button"
              aria-label="Cerrar filtros"
              onClick={closeFilters}
              className="cursor-pointer"
            >
              <X className="w-7 h-7 stroke-on-surface" />
            </button>
          </div>

          <div className="flex flex-col gap-md my-xs">{filtersContent}</div>

          <Button onClick={closeFilters} full customUppercase>
            Ver resultados
          </Button>
        </aside>
      </div>
    </>
  );
}
