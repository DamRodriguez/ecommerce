"use client";
import MotionOpacity from "@/components/motion/MotionOpacity";
import CustomImage from "@/components/other/CustomImage";
import CartButton from "@/components/ui/buttons/cart/CartButton";
import { routes } from "@/constants/routes";
import useCart from "@/redux/cart/products/useCart";
import { ProductData } from "@/types/product";
import { formatMoney } from "@/utils/formatMoney";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

type ProductCardProps = {
  data: ProductData;
};

function ProductCard({ data }: ProductCardProps) {
  const { isInCart } = useCart();
  const productIsInCart = isInCart(data.id);

  return (
    <article className="group hover:border-on-surface custom-transition-all border border-outline bg-surface-bright flex flex-col relative overflow-hidden h-full cursor-pointer active:opacity-80">
      <Link
        href={routes.productDetail(data.id)}
        aria-label={`Ver detalle de ${data.name}`}
        className="absolute inset-0 z-10"
      />

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
        <CustomImage
          src={data.image}
          alt={data.name}
          fill
          className="w-full h-full object-cover group-hover:scale-110 custom-transition-all"
        />

        <div className="absolute inset-0 group-hover:bg-black/15 custom-transition-all pointer-events-none" />

        <div className="absolute bottom-0 w-full left-0 2xl:translate-y-full group-hover:translate-y-0 custom-transition-all z-20">
          <CartButton product={data} />
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

        <p className="font-accent text-base xl:text-lg text-on-surface mt-md font-semibold">
          {formatMoney(data.price)}
        </p>
      </div>
    </article>
  );
}

export default memo(ProductCard);
