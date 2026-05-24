"use client";
import CartItem from "@/components/cart/CartItem";
import EmptyCart from "@/components/cart/EmptyCart";
import MotionLayoutItem from "@/components/motion/MotionLayoutItem";
import LinkButton from "@/components/ui/buttons/LinkButton";
import { useVisualViewportHeight } from "@/hooks/useVisualViewportHeight";
import useCart from "@/redux/cart/products/useCart";
import { formatMoney } from "@/utils/formatMoney";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Trash, X } from "lucide-react";

type CartSectionProps = {
  onClose: () => void;
};

export default function CartSection({ onClose }: CartSectionProps) {
  const { cartItems, totalPrice, clearCart } = useCart();
  const hasCartItems = cartItems.length > 0;

  useVisualViewportHeight({
    variableName: "--cart-vh",
    fallbackValue: "100dvh",
  });

  return (
    <div className="grid h-[var(--cart-vh,100dvh)] min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden bg-surface-bright">
      <div className="flex justify-between items-center px-lg h-header-mobile xl:h-header-desktop border-b border-outline bg-surface">
        <div>
          <h2 className="text-lg xl:text-2xl text-on-surface">
            Carrito de Compras
          </h2>

          {hasCartItems && (
            <button
              onClick={clearCart}
              aria-label="Vaciar carrito"
              className="text-secondary-text hover:text-on-surface custom-transition-all cursor-pointer flex gap-xxs items-center"
            >
              <div>
                <Trash className="w-4 h-4" />
              </div>

              <p className="text-sm xl:text-base">Vaciar</p>
            </button>
          )}
        </div>

        <button
          onClick={onClose}
          aria-label="Cerrar carrito"
          className="cursor-pointer"
        >
          <X className="w-6 h-6 xl:w-7 xl:h-7" />
        </button>
      </div>

      <div className="min-h-0 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {hasCartItems ? (
            <motion.div
              key="cart-items"
              layout
              className="h-full divide-y divide-outline overflow-y-auto overscroll-contain scrollbarCustom"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {cartItems.map((item) => (
                  <MotionLayoutItem key={item.id}>
                    <CartItem data={item} />
                  </MotionLayoutItem>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <EmptyCart />
          )}
        </AnimatePresence>
      </div>

      {hasCartItems && (
        <div className="border-t border-outline bg-surface p-lg w-full z-10 pb-[calc(var(--spacing-lg)+env(safe-area-inset-bottom))]">
          <div className="flex justify-between items-end mb-xs gap-sm">
            <span className="text-on-surface tracking-widest">SUBTOTAL</span>

            <span className="font-accent text-on-surface font-semibold text-lg xl:text-xl line-clamp-1">
              {formatMoney(totalPrice)}
            </span>
          </div>

          <p className="text-secondary-text text-sm mb-lg">
            Impuestos y envío calculados al finalizar
          </p>

          <LinkButton href="#" customUppercase full>
            <p>Continuar al checkout</p>
            <ArrowRight />
          </LinkButton>
        </div>
      )}
    </div>
  );
}
