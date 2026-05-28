"use client";
import MotionQuantity from "@/components/motion/MotionQuantity";
import Button from "@/components/ui/buttons/Button";
import useCart from "@/redux/cart/products/useCart";
import { ProductData } from "@/types/product";
import { Minus, Plus } from "lucide-react";

type QuantityButtonProps = {
  product: ProductData;
};

export default function QuantityButton({ product }: QuantityButtonProps) {
  const { addToCart, removeOneFromCart, getItemQuantity } = useCart();

  const handleRemoveOneFromCart = () => {
    removeOneFromCart(product.id);
  };
  const handleAddOneToCart = () => {
    addToCart(product);
  };

  const quantity = getItemQuantity(product.id);

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

      <div className="flex px-xxs w-full items-center justify-center border-y border-outline font-accent text-xs xl:text-base">
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
