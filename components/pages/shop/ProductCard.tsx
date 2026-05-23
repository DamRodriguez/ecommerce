"use client";
import MotionOpacity from "@/components/motion/MotionOpacity";
import CustomImage from "@/components/other/CustomImage";
import CartButton from "@/components/ui/buttons/cart/CartButton";
import useCart from "@/redux/cart/useCart";
import { formatMoney } from "@/utils/formatMoney";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export type ProductCardData = {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  subcategory: string;
  isNew?: boolean;
};

type ProductCardProps = {
  data: ProductCardData;
};

export default function ProductCard({ data }: ProductCardProps) {
  const { isInCart } = useCart();
  const productIsInCart = isInCart(data.id);

  return (
    <article className="group hover:border-on-surface custom-transition-all border border-outline bg-surface-bright flex flex-col relative overflow-hidden h-full cursor-pointer">
      {data.isNew && (
        <div className="absolute top-sm left-sm z-10 border border-outline/15 bg-on-surface text-surface font-accent text-xs px-sm py-xs tracking-widest uppercase">
          NUEVO
        </div>
      )}
      <AnimatePresence>
        {productIsInCart && (
          <MotionOpacity
            duration={0.3}
            className="absolute top-0 right-0 z-10 w-22 h-22 text-surface"
          >
            <div className="absolute inset-0 bg-outline/15 [clip-path:polygon(100%_0,100%_88%,12%_0)]" />
            <div className="absolute top-0 right-0 w-[calc(100%-1px)] h-[calc(100%-1px)] bg-on-surface [clip-path:polygon(100%_0,100%_85%,15%_0)]" />
            <ShoppingBag className="absolute top-sm right-sm w-5 h-5 stroke-surface" />
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

        <div className="absolute inset-0 group-hover:bg-black/15 custom-transition-all"></div>

        <div className="absolute bottom-0 w-full left-0 2xl:translate-y-full group-hover:translate-y-0 custom-transition-all">
          <CartButton product={data} />
        </div>
      </div>

      <div className="p-md flex flex-col flex-grow justify-between border-t border-t-outline">
        <div>
          <p className="text-2xl text-on-surface truncate">{data.name}</p>

          <p className="font-accent text-xs tracking-widest uppercase text-secondary-text mt-xs">
            {data.category} / {data.subcategory}
          </p>
        </div>

        <p className="font-accent text-lg text-on-surface mt-md font-semibold">
          {formatMoney(data.price)}
        </p>
      </div>
    </article>
  );
}
