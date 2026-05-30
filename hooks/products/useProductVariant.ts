import {
  ProductCardData,
  ProductColor,
  ProductSize,
  ProductVariant,
} from "@/types/product";
import { useMemo, useState } from "react";

export default function useProductVariant(product: ProductCardData) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0],
  );

  const availableColors = useMemo(
    () =>
      [
        ...new Map(
          product.variants.map((variant) => [
            variant.color.name,
            variant.color,
          ]),
        ).values(),
      ] satisfies ProductColor[],
    [product.variants],
  );

  const availableSizes = useMemo(
    () =>
      [
        ...new Set(
          product.variants
            .filter(
              (variant) =>
                variant.color.name === selectedVariant.color.name &&
                variant.stock > 0,
            )
            .map((variant) => variant.size),
        ),
      ] satisfies ProductSize[],
    [product.variants, selectedVariant.color.name],
  );

  const handleColorChange = (colorName: string) => {
    const firstAvailableVariant = product.variants.find(
      (v) => v.color.name === colorName && v.stock > 0,
    );

    if (firstAvailableVariant) {
      setSelectedVariant(firstAvailableVariant);
    }
  };

  const handleSizeChange = (size: ProductSize) => {
    const variant = product.variants.find(
      (v) =>
        v.size === size &&
        v.color.name === selectedVariant.color.name &&
        v.stock > 0,
    );

    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const totalStock = useMemo(
    () => product.variants.reduce((acc, variant) => acc + variant.stock, 0),
    [product.variants],
  );

  const isLowStock = totalStock > 0 && totalStock <= 5;

  return {
    selectedVariant,
    availableColors,
    availableSizes,
    totalStock,
    isLowStock,
    handleColorChange,
    handleSizeChange,
  };
}
