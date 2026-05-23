"use client";
import CartItem from "@/components/cart/CartItem";
import MotionFade from "@/components/motion/MotionFade";
import MotionLayoutItem from "@/components/motion/MotionLayoutItem";
import LinkButton from "@/components/ui/buttons/LinkButton";
import useCart from "@/redux/cart/useCart";
import { formatMoney } from "@/utils/formatMoney";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingBasket, Trash, X } from "lucide-react";

type CartSectionProps = {
  onClose: () => void;
};

export default function CartSection({ onClose }: CartSectionProps) {
  const { cartItems, totalPrice, clearCart } = useCart();
  const hasCartItems = cartItems.length > 0;

  return (
    <div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden">
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
              className="h-full divide-y divide-outline overflow-y-auto scrollbarCustom"
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
            <MotionFade
              key="empty-cart"
              className="h-full px-lg text-on-surface text-base xl:text-lg flex flex-col justify-center items-center gap-sm xl:gap-md text-center"
            >
              <ShoppingBasket className="w-7 h-7 xl:w-9 xl:h-9 stroke-on-surface" />
              <div>
                <p>
                  Tu carrito está vacío <br />
                  <span className="text-secondary-text">
                    Agregá productos para comenzar a comprar
                  </span>
                </p>
              </div>
            </MotionFade>
          )}
        </AnimatePresence>
      </div>

      {hasCartItems && (
        <div className="border-t border-outline bg-surface p-lg w-full z-10">
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
