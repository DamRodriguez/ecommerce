"use client";
import MotionFade from "@/components/motion/MotionFade";
import useCartDrawer from "@/redux/cart/drawer/useCartDrawer";
import useCart from "@/redux/cart/products/useCart";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function HeaderCartButton() {
  const { openCartDrawer } = useCartDrawer();
  const { totalItems } = useCart();

  const handleOpenCart = () => {
    openCartDrawer();
  };

  return (
    <div
      className={clsx("flex relative custom-transition-all", {
        "mr-[0.6rem] xl:mr-0": totalItems > 0,
      })}
    >
      <button
        onClick={handleOpenCart}
        type="button"
        aria-label="Carrito de compras"
        className="cursor-pointer group"
      >
        <ShoppingBag className="stroke-on-surface w-[1.4rem] h-[1.4rem] xl:w-[1.7rem] xl:h-[1.7rem]" />
      </button>

      <AnimatePresence>
        {totalItems > 0 && (
          <MotionFade
            duration={0.3}
            className="absolute -bottom-2.5 -right-2.5 xl:-bottom-3 xl:-right-3 flex h-[1.3rem] min-w-[1.3rem] xl:h-[1.4rem] xl:min-w-[1.4rem] items-center justify-center rounded-full aspect-square bg-on-surface text-xs text-surface-bright shadow-s6 pointer-events-none font-semibold leading-none"
          >
            {totalItems > 99 ? "99+" : totalItems}
          </MotionFade>
        )}
      </AnimatePresence>
    </div>
  );
}
