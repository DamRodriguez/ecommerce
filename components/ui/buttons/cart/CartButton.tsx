"use client";
import MotionQuantity from "@/components/motion/MotionQuantity";
import MotionSlidePresence from "@/components/motion/MotionSlidePresence";
import { ProductCardData } from "@/components/pages/shop/ProductCard";
import Button from "@/components/ui/buttons/Button";
import useCart from "@/redux/cart/useCart";
import { AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart } from "lucide-react";

type CartButtonProps = {
  product: ProductCardData;
};

export default function CartButton({ product }: CartButtonProps) {
  const {
    addToCart,
    removeOneFromCart,
    isInCart,
    getItemQuantity,
    isCartLoaded,
  } = useCart();

  const productIsInCart = isInCart(product.id);
  const quantity = getItemQuantity(product.id);

  if (!isCartLoaded) {
    return (
      <Button disabled className="w-full shadow-s6" customUppercase>
        <p>CARGANDO...</p>
      </Button>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!productIsInCart ? (
        <MotionSlidePresence
          key="add-to-cart"
          duration={0.25}
          initialDirection="down"
          exitDirection="down"
          distance={24}
        >
          <Button
            onClick={() => addToCart(product)}
            className="w-full shadow-s6 2xl:shadow-none"
            customUppercase
          >
            <ShoppingCart />
            <p>AÑADIR AL CARRITO</p>
          </Button>
        </MotionSlidePresence>
      ) : (
        <MotionSlidePresence
          key="quantity-controls"
          duration={0.25}
          initialDirection="down"
          exitDirection="down"
          distance={24}
          className="flex w-full justify-between bg-outline shadow-s6 2xl:shadow-none"
        >
          <Button onClick={() => removeOneFromCart(product.id)}>
            <Minus />
          </Button>

          <div className="flex w-full items-center justify-center border-y border-on-surface font-accent text-base xl:text-lg">
            <MotionQuantity duration={0.2} motionKey={quantity}>
              {quantity}
            </MotionQuantity>
          </div>

          <Button onClick={() => addToCart(product)}>
            <Plus />
          </Button>
        </MotionSlidePresence>
      )}
    </AnimatePresence>
  );
}
