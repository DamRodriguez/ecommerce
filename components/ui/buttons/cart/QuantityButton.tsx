"use client";
import MotionQuantity from "@/components/motion/MotionQuantity";
import Button from "@/components/ui/buttons/Button";
import useCart from "@/redux/cart/products/useCart";
import { ProductCardData, ProductVariant } from "@/types/product";
import { Minus, Plus } from "lucide-react";

type QuantityButtonProps = {
  product: ProductCardData;
  variant: ProductVariant;
};

export default function QuantityButton({
  product,
  variant,
}: QuantityButtonProps) {
  const { addToCart, removeOneFromCart, getItemQuantity } = useCart();

  const handleRemoveOneFromCart = () => {
    removeOneFromCart(variant.id);
  };
  const handleAddOneToCart = () => {
    addToCart(product, variant);
  };

  const quantity = getItemQuantity(variant.id);

  return (
    <div className="flex justify-between">
      <Button
        onClick={handleRemoveOneFromCart}
        outline
        small
        className="border-outline group-hover:bg-surface-bright"
        aria-label={`Remover una unidad de ${product.name} del carrito`}
      >
        <Minus className="w-4 h-4" />
      </Button>

      <div className="flex px-xxs w-full items-center justify-center border-y border-outline font-accent text-xs xl:text-sm">
        <MotionQuantity duration={0.2} motionKey={quantity}>
          {quantity}
        </MotionQuantity>
      </div>

      <Button
        onClick={handleAddOneToCart}
        outline
        small
        className="border-outline group-hover:bg-surface-bright"
        aria-label={`Agregar una unidad más de ${product.name} al carrito`}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
}
