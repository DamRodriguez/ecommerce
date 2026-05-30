import { ProductCardData } from "@/types/product";

export function getCurrentPrice(product: ProductCardData) {
  return product.salePrice ?? product.originalPrice;
}
