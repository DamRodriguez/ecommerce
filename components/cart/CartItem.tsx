import CustomImage from "@/components/other/CustomImage";
import QuantityButton from "@/components/ui/buttons/cart/QuantityButton";
import useCart from "@/redux/cart/products/useCart";
import { CartItem as CartItemType } from "@/types/product";
import { formatMoney } from "@/utils/formatMoney";
import { Trash } from "lucide-react";
import { memo } from "react";

type CartItemProps = {
  item: CartItemType;
};

function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCart();

  const { product, variant, quantity } = item;

  const handleRemoveAll = () => {
    removeFromCart(variant.id);
  };

  const unitPrice = product.salePrice ?? product.originalPrice;

  const totalPrice = unitPrice * quantity;

  const hasDiscount = product.salePrice !== undefined;

  return (
    <div className="flex items-start px-lg py-lg group hover:bg-outline/30 custom-transition-all">
      <div className="w-22 h-22 xl:w-25 xl:h-25 shrink-0 border border-outline overflow-hidden">
        <CustomImage
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="w-full h-full object-cover group-hover:scale-110 custom-transition-all"
        />
      </div>

      <div className="ml-md flex-1 grid grid-cols-[1fr_0.7fr] gap-md">
        <div className="flex flex-col justify-between min-h-22 xl:min-h-25">
          <div>
            <p className="text-base xl:text-lg text-on-surface leading-tight line-clamp-1">
              {product.name}
            </p>

            <p className="text-xxs xl:text-xs text-secondary-text mt-1 line-clamp-2 font-accent">
              <span className="font-semibold">Color:</span> {variant.color.name}{" "}
              · <span className="font-semibold">Talle:</span>{" "}
              {variant.size}{" "}
            </p>
          </div>

          <div className="w-fit">
            <QuantityButton product={product} variant={variant} />
          </div>
        </div>

        <div className="flex flex-col items-end justify-between min-h-22 xl:min-h-25">
          <button
            onClick={handleRemoveAll}
            aria-label="Eliminar"
            className="cursor-pointer"
          >
            <Trash className="w-5 h-5 stroke-on-surface fill-transparent hover:fill-on-surface custom-transition-all" />
          </button>

          <div className="flex flex-col items-end">
            <span className="text-xs text-secondary-text">
              {quantity} × {formatMoney(unitPrice)}
            </span>

            <span className="text-sm xl:text-base font-semibold font-accent text-on-surface line-clamp-1">
              {formatMoney(totalPrice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CartItem);
