"use client";
import useCart from "@/redux/cart/useCart";
import { ShoppingBag } from "lucide-react";

type HeaderCartButtonProps = {
  onClick: () => void;
};

export default function HeaderCartButton({ onClick }: HeaderCartButtonProps) {
  const { totalItems } = useCart();
  return (
    <div className="flex relative">
      <button
        onClick={onClick}
        type="button"
        aria-label="Carrito de compras"
        className="cursor-pointer group"
      >
        <ShoppingBag className="stroke-on-surface" />
      </button>

      {totalItems > 0 && (
        <span className="absolute -bottom-3 -right-3 flex h-[1.4rem] w-[1.4rem] items-center justify-center rounded-full bg-on-surface text-xs text-surface-bright shadow-s6 pointer-events-none font-semibold">
          {totalItems}
        </span>
      )}
    </div>
  );
}
