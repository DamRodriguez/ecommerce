import CustomImage from "@/components/other/CustomImage";
import { ProductCardData } from "@/components/pages/shop/ProductCard";
import QuantityButton from "@/components/ui/buttons/cart/QuantityButton";
import useCart from "@/redux/cart/useCart";
import { formatMoney } from "@/utils/formatMoney";
import { Trash } from "lucide-react";
import { memo } from "react";

type CartItemProps = {
  data: ProductCardData;
};

function CartItem({ data }: CartItemProps) {
  const { removeFromCart, getItemQuantity } = useCart();

  const quantity = getItemQuantity(data.id);

  const handleRemoveAll = () => {
    removeFromCart(data.id);
  };

  return (
    <div className="flex items-start px-lg py-lg group hover:bg-outline/30 custom-transition-all">
      <div className="w-20 h-20 xl:w-24 xl:h-24 border border-outline overflow-hidden">
        <CustomImage
          src={data.image}
          alt={data.name}
          width={96}
          height={96}
          className="w-full h-full object-cover group-hover:scale-110 custom-transition-all"
        />
      </div>
      <div className="ml-md flex-1 flex flex-col justify-between h-20 xl:h-24">
        <div>
          <div className="flex justify-between items-end gap-sm">
            <p className="text-base xl:text-lg text-on-surface leading-tight line-clamp-1">
              {data.name}
            </p>
            <button
              onClick={handleRemoveAll}
              aria-label="Eliminar"
              className="cursor-pointer"
            >
              <Trash className="w-5 h-5 stroke-on-surface fill-transparent hover:fill-on-surface custom-transition-all" />
            </button>
          </div>
          <p className="text-xs xl:text-sm text-secondary-text font-accent mt-xxs line-clamp-1 mr-5">
            {data.category} / {data.subcategory}
          </p>
        </div>
        <div className="flex justify-between items-end gap-sm">
          <QuantityButton product={data} />
          <span className="text-sm xl:text-base font-semibold font-accent text-on-surface line-clamp-1">
            {formatMoney(data.price * quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(CartItem);
