"use client";
import MotionFade from "@/components/motion/MotionFade";
import MotionSlide from "@/components/motion/MotionSlide";
import Drawer from "@/components/other/Drawer";
import Button from "@/components/ui/buttons/Button";
import {
  ShopFiltersAction,
  ShopFiltersState,
} from "@/hooks/shop/shopFiltersReducer";
import { useScrollLock } from "@/hooks/useScrollLock";
import { SlidersHorizontal } from "lucide-react";
import { Dispatch, useState } from "react";
import FiltersContent from "./FiltersContent";

type SidebarFiltersProps = {
  categories: string[];
  filters: ShopFiltersState;
  dispatch: Dispatch<ShopFiltersAction>;
};

export default function SidebarFilters({
  categories,
  filters,
  dispatch,
}: SidebarFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  useScrollLock(isFiltersOpen);

  const openFilters = () => {
    setIsFiltersOpen(true);
  };

  const closeFilters = () => {
    setIsFiltersOpen(false);
  };

  const filtersContent = (
    <FiltersContent
      categories={categories}
      filters={filters}
      dispatch={dispatch}
      isMobileFiltersOpen={isFiltersOpen}
    />
  );

  return (
    <>
      <div className="xl:hidden sticky top-[calc(var(--height-header-mobile)+env(safe-area-inset-top))] z-50">
        <MotionFade>
          <Button onClick={openFilters} full border variant="secondary">
            <span className="flex items-center justify-center gap-xs">
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
            </span>
          </Button>
        </MotionFade>
      </div>

      {/* Desktop */}
      <MotionSlide
        viewAmount={0}
        direction="down"
        order={1}
        className="xl:mt-xl"
      >
        <aside className="hidden xl:flex w-full md:w-64 flex-shrink-0 h-fit flex-col gap-xl top-[calc(var(--height-header-desktop)+2rem)] sticky">
          {filtersContent}
        </aside>
      </MotionSlide>

      {/* Mobile */}
      <Drawer
        visible={isFiltersOpen}
        onClose={closeFilters}
        position="bottom"
        closeButton={null}
        className="w-full scrollbarCustom max-h-[calc(100dvh-var(--height-header-mobile))] bg-surface-bright border-t border-outline p-md"
      >
        <div className="flex flex-col gap-md mb-sm">{filtersContent}</div>

        <Button onClick={closeFilters} full customUppercase>
          Ver resultados
        </Button>
      </Drawer>
    </>
  );
}
