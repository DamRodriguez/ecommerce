"use client";
import CustomImage from "@/components/other/CustomImage";
import QuantityButton from "@/components/ui/buttons/cart/QuantityButton";
import { routes } from "@/constants/routes";
import useCartDrawer from "@/redux/cart/drawer/useCartDrawer";
import useCart from "@/redux/cart/products/useCart";
import { CartItem as CartItemType } from "@/types/product";
import { formatMoney } from "@/utils/formatMoney";
import { Search, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { memo } from "react";

type CartItemProps = {
  item: CartItemType;
};

function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCart();
  const { closeCartDrawer } = useCartDrawer();
  const router = useRouter();

  const { product, variant, quantity } = item;

  const handleRemoveAll = () => {
    removeFromCart(variant.id);
  };

  const unitPrice = product.salePrice ?? product.originalPrice;

  const totalPrice = unitPrice * quantity;

  const handleImageClick = () => {
    router.push(routes.productDetail(product.id));
    closeCartDrawer();
  };

  return (
    <div className="flex gap-sm lg:gap-md items-start p-md lg:p-lg group hover:bg-outline/30 custom-transition-all">
      <button
        onClick={handleImageClick}
        className="w-22 h-22 lg:w-25 lg:h-25 shrink-0 border border-outline overflow-hidden relative cursor-pointer hover:border-on-surface custom-transition-all"
      >
        <CustomImage
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="w-full h-full object-cover group-hover:scale-110 custom-transition-all"
        />

        <div className="hidden lg:flex lg:flex-col opacity-0 hover:opacity-100 custom-transition-all absolute bottom-0 w-full h-full bg-black/35 items-center justify-center gap-2 text-surface group">
          <Search className="stroke-white w-5 h-5 custom-transition-all" />
          <p className="text-white font-semibold tracking-wider text-xs font-accent">
            Ver detalle
          </p>
        </div>
      </button>

      <div className="flex-1 grid grid-cols-[1fr_0.8fr] gap-sm lg:gap-md">
        <div className="flex flex-col justify-between min-h-22 lg:min-h-25">
          <div className="flex flex-col justify-between">
            <p className="text-sm lg:text-lg text-on-surface leading-tight line-clamp-1">
              {product.name}
            </p>

            <p className="flex flex-col sm:flex-row text-xxs lg:text-xs text-secondary-text mt-1 line-clamp-2 font-accent">
              <span className="flex gap-xxs">
                <span className="font-semibold">Color:</span>
                {variant.color.name}
              </span>
              <span className="hidden sm:flex px-xxs font-bold text-on-surface/80">
                ·
              </span>
              <span className="flex gap-xxs">
                <span className="font-semibold">Talle:</span>
                {variant.size}
              </span>
            </p>
          </div>

          <div className="w-fit">
            <QuantityButton product={product} variant={variant} />
          </div>
        </div>

        <div className="flex flex-col items-end justify-between min-h-22 lg:min-h-25">
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

            <span className="text-sm lg:text-base font-semibold font-accent text-on-surface line-clamp-1">
              {formatMoney(totalPrice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CartItem);
