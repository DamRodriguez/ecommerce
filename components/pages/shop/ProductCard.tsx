"use client";
import CustomImage from "@/components/other/CustomImage";
import Button from "@/components/ui/buttons/Button";
import { formatMoney } from "@/utils/formatMoney";

export type ProductCardData = {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  subcategory: string;
  isNew?: boolean;
};

type ProductCardProps = {
  data: ProductCardData;
};

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <article className="group border border-outline bg-surface-bright flex flex-col relative overflow-hidden h-full cursor-pointer">
      {data.isNew && (
        <div className="absolute top-sm left-sm z-10 border border-surface bg-on-surface text-surface font-accent text-xs px-sm py-xs tracking-widest uppercase">
          NUEVO
        </div>
      )}

      <div className="aspect-square bg-surface-container w-full overflow-hidden relative border-b border-outline">
        <CustomImage
          src={data.image}
          alt={data.name}
          fill
          className="w-full h-full object-cover group-hover:scale-110 custom-transition-all"
        />

        <div className="absolute inset-0 group-hover:bg-black/15 custom-transition-all"></div>

        <div className="absolute bottom-0 w-full left-0 2xl:translate-y-full group-hover:translate-y-0 custom-transition-all">
          <Button className="w-full border border-t-black">
            <p>AÑADIR AL CARRITO</p>
          </Button>
        </div>
      </div>

      <div className="p-md flex flex-col flex-grow justify-between">
        <div>
          <p className="text-2xl text-on-surface truncate">{data.name}</p>

          <p className="font-accent text-xs tracking-widest uppercase text-secondary mt-xs">
            {data.category} / {data.subcategory}
          </p>
        </div>

        <p className="font-accent text-lg text-on-surface mt-md font-semibold">
          {formatMoney(data.price)}
        </p>
      </div>
    </article>
  );
}
