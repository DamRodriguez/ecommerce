"use client";
import MotionOpacity from "@/components/motion/MotionOpacity";
import CustomImage from "@/components/other/CustomImage";
import CartButton from "@/components/ui/buttons/cart/CartButton";
import { routes } from "@/constants/routes";
import useProductVariant from "@/hooks/products/useProductVariant";
import useCart from "@/redux/cart/products/useCart";
import { ProductCardData } from "@/types/product";
import { formatMoney } from "@/utils/formatMoney";
import { getCurrentPrice } from "@/utils/product-price/getCurrentPrice";
import { getDiscountPercentage } from "@/utils/product-price/getDiscountPercentage";
import { hasDiscount } from "@/utils/product-price/hasDiscount";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

type ProductCardProps = {
  data: ProductCardData;
};

function ProductCard({ data }: ProductCardProps) {
  const { isInCart } = useCart();

  const {
    selectedVariant,
    availableColors,
    availableSizes,
    isLowStock,
    handleColorChange,
    handleSizeChange,
  } = useProductVariant(data);

  const productIsInCart = isInCart(selectedVariant.id);

  const currentPrice = getCurrentPrice(data);
  const discounted = hasDiscount(data);

  return (
    <article className="group hover:border-on-surface custom-transition-all border border-outline bg-surface-bright flex flex-col relative overflow-hidden h-full cursor-pointer">
      {data.isNew && (
        <div className="absolute top-sm left-sm z-30 border border-outline/15 bg-on-surface text-surface font-accent text-xxs xl:text-xs px-xs xl:px-sm py-xxs xl:py-xs tracking-widest uppercase pointer-events-none">
          NUEVO
        </div>
      )}

      <AnimatePresence>
        {productIsInCart && (
          <MotionOpacity
            duration={0.3}
            className="absolute top-0 right-0 z-30 w-20 h-20 xl:w-22 xl:h-22 text-surface pointer-events-none"
          >
            <div className="absolute inset-0 bg-outline/15 [clip-path:polygon(100%_0,100%_88%,12%_0)]" />
            <div className="absolute top-0 right-0 w-[calc(100%-1px)] h-[calc(100%-1px)] bg-on-surface [clip-path:polygon(100%_0,100%_85%,15%_0)]" />
            <ShoppingBag className="absolute top-sm right-sm w-4.5 h-4.5 xl:w-5 xl:h-5 stroke-surface" />
          </MotionOpacity>
        )}
      </AnimatePresence>

      <div className="aspect-square w-full overflow-hidden relative">
        <Link
          href={routes.productDetail(data.id)}
          aria-label={`Ver detalle de ${data.name}`}
          className="absolute inset-0 z-10"
        >
          <CustomImage
            src={data.image}
            alt={data.name}
            fill
            className="w-full h-full object-cover group-hover:scale-110 custom-transition-all"
          />

          <div className="absolute inset-0 group-hover:bg-black/15 custom-transition-all pointer-events-none" />
        </Link>

        <div className="absolute bottom-0 left-0 w-full z-20 xl:translate-y-full opacity-100 xl:group-hover:translate-y-0 custom-transition-all">
          <CartButton product={data} variant={selectedVariant} />
        </div>
      </div>

      <div className="p-md flex flex-col flex-grow justify-between border-t border-t-outline">
        <div>
          <p className="text-xl xl:text-2xl text-on-surface truncate">
            {data.name}
          </p>

          <p className="font-accent text-xxs xl:text-xs tracking-widest uppercase text-secondary-text mt-xs">
            {data.category} / {data.subcategory}
          </p>
        </div>

        <div className="mt-sm space-y-md">
          <div className="flex gap-3 relative z-20 w-fit">
            {availableColors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => handleColorChange(color.name)}
                className={clsx(
                  "w-5 h-5 rounded-full border custom-transition-all cursor-pointer hover:border-on-surface",
                  {
                    "border-on-surface scale-120":
                      selectedVariant.color.name === color.name,
                    "border-outline": selectedVariant.color.name !== color.name,
                  },
                )}
                style={{
                  backgroundColor: color.value,
                }}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-3 relative z-20 w-fit">
            {availableSizes.map((size) => (
              <button
                type="button"
                onClick={() => handleSizeChange(size)}
                className={clsx(
                  "px-sm py-xxs border text-md font-accent custom-transition-all cursor-pointer hover:bg-on-surface hover:text-surface",
                  {
                    "bg-on-surface text-surface border-on-surface":
                      selectedVariant.size === size,
                    "border-outline": selectedVariant.size !== size,
                  },
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-md">
          {discounted && (
            <div className="flex items-center gap-sm mb-xs">
              <span className="font-accent text-sm text-secondary-text line-through">
                {formatMoney(data.originalPrice)}
              </span>

              {data.salePrice && (
                <span className="bg-on-surface text-surface text-xs px-xs py-xxs font-accent">
                  -{getDiscountPercentage(data.originalPrice, data.salePrice)}%
                </span>
              )}
            </div>
          )}

          <p className="font-accent text-base xl:text-lg text-on-surface font-semibold">
            {formatMoney(currentPrice)}
          </p>

          {isLowStock && (
            <p className="text-xs text-orange-500 mt-xs">Últimas unidades</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default memo(ProductCard);
