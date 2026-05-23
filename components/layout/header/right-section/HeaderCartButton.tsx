"use client";
import MotionFade from "@/components/motion/MotionFade";
import useCart from "@/redux/cart/useCart";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

type HeaderCartButtonProps = {
  onClick: () => void;
};

export default function HeaderCartButton({ onClick }: HeaderCartButtonProps) {
  const { totalItems } = useCart();
  return (
    <div
      className={clsx("flex relative custom-transition-all", {
        "mr-[0.7rem] md:mr-[1.2rem] xl:mr-0": totalItems > 0,
      })}
    >
      <button
        onClick={onClick}
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
            className="absolute -bottom-2.5 -right-2.5 xl:-bottom-3 xl:-right-3 flex h-[1.2rem] min-w-[1.2rem] xl:h-[1.4rem] xl:min-w-[1.4rem] items-center justify-center rounded-full bg-on-surface px-[0.35rem] text-xs text-surface-bright shadow-s6 pointer-events-none font-semibold leading-none"
          >
            {totalItems > 99 ? "99+" : totalItems}
          </MotionFade>
        )}
      </AnimatePresence>
    </div>
  );
}
