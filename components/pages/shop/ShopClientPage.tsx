"use client";
import {
  getFilteredProducts,
  initialShopFiltersState,
  shopFiltersReducer,
} from "@/components/pages/shop/filters/shopFiltersReducer";
import SidebarFilters from "@/components/pages/shop/filters/SidebarFilters";
import { ProductCardData } from "@/components/pages/shop/ProductCard";
import ProductsSection from "@/components/pages/shop/ProductsSection";
import { useMemo, useReducer } from "react";

type ShopClientPageProps = {
  data: ProductCardData[];
};

export default function ShopClientPage({ data }: ShopClientPageProps) {
  const [filters, dispatch] = useReducer(
    shopFiltersReducer,
    initialShopFiltersState,
  );

  const categories = useMemo(() => {
    return Array.from(new Set(data.map((product) => product.category)));
  }, [data]);

  const filteredProducts = useMemo(() => {
    return getFilteredProducts(data, filters);
  }, [data, filters]);

  return (
    <div className="gap-md xl:gap-huge flex flex-col xl:flex-row">
      <SidebarFilters
        categories={categories}
        filters={filters}
        dispatch={dispatch}
      />
      <ProductsSection data={filteredProducts} totalProducts={data.length} />
    </div>
  );
}
