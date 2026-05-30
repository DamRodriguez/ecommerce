"use client";
import MotionQuantity from "@/components/motion/MotionQuantity";
import MotionSlidePresence from "@/components/motion/MotionSlidePresence";
import Button from "@/components/ui/buttons/Button";
import useCart from "@/redux/cart/products/useCart";
import { ProductCardData, ProductVariant } from "@/types/product";
import { AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart } from "lucide-react";

type CartButtonProps = {
  product: ProductCardData;
  variant: ProductVariant;
};

export default function CartButton({ product, variant }: CartButtonProps) {
  const {
    addToCart,
    removeOneFromCart,
    isInCart,
    getItemQuantity,
    isCartLoaded,
  } = useCart();

  const productIsInCart = isInCart(variant.id);
  const quantity = getItemQuantity(variant.id);

  const handleFirstAddToCart = () => {
    addToCart(product, variant);
  };

  const handleRemoveOneFromCart = () => {
    removeOneFromCart(variant.id);
  };

  const handleAddOneToCart = () => {
    addToCart(product, variant);
  };

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
            onClick={handleFirstAddToCart}
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
          className="flex w-full justify-between bg-gray shadow-s6 2xl:shadow-none"
        >
          <Button onClick={handleRemoveOneFromCart}>
            <Minus />
          </Button>

          <div className="flex w-full items-center justify-center border-y border-on-surface font-accent text-base xl:text-lg">
            <MotionQuantity duration={0.2} motionKey={quantity}>
              {quantity}
            </MotionQuantity>
          </div>

          <Button onClick={handleAddOneToCart}>
            <Plus />
          </Button>
        </MotionSlidePresence>
      )}
    </AnimatePresence>
  );
}
