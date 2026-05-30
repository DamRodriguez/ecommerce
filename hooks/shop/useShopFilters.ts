"use client";
import {
  getFilteredProducts,
  initialShopFiltersState,
  shopFiltersReducer,
} from "@/hooks/shop/shopFiltersReducer";
import { ProductCardData } from "@/types/product";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useReducer } from "react";

export function useShopFilters(data: ProductCardData[]) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [filters, dispatch] = useReducer(
    shopFiltersReducer,
    initialShopFiltersState,
  );

  const categories = useMemo(() => {
    return Array.from(new Set(data.map((product) => product.category)));
  }, [data]);

  useEffect(() => {
    if (!categoryParam) return;

    const categoryExists = categories.includes(categoryParam);

    if (!categoryExists) return;

    dispatch({
      type: "SET_CATEGORIES",
      payload: [categoryParam],
    });
  }, [categoryParam, categories]);

  const filteredProducts = useMemo(() => {
    return getFilteredProducts(data, filters);
  }, [data, filters]);

  return {
    filters,
    dispatch,
    categories,
    filteredProducts,
    totalProducts: data.length,
  };
}
