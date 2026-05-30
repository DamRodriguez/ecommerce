"use client";
import SidebarFilters from "@/components/pages/shop/filters/SidebarFilters";
import ProductsSection from "@/components/pages/shop/ProductsSection";
import { useShopFilters } from "@/hooks/shop/useShopFilters";
import { ProductCardData } from "@/types/product";

type ShopClientPageProps = {
  data: ProductCardData[];
};

export default function ShopClientPage({ data }: ShopClientPageProps) {
  const { filters, dispatch, categories, filteredProducts, totalProducts } =
    useShopFilters(data);

  return (
    <div className="gap-md xl:gap-huge flex flex-col xl:flex-row">
      <SidebarFilters
        categories={categories}
        filters={filters}
        dispatch={dispatch}
      />
      <ProductsSection data={filteredProducts} totalProducts={totalProducts} />
    </div>
  );
}
