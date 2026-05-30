import { ProductCardData } from "@/types/product";

export const hasDiscount = (product: ProductCardData) =>
  product.salePrice !== undefined && product.salePrice < product.originalPrice;
