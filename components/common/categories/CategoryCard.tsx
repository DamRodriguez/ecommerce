import CustomImage from "@/components/other/CustomImage";
import { routes } from "@/constants/routes";
import { formatTwoDigits } from "@/utils/formatTwoDigits";
import Link from "next/link";

export type CategoryCardData = {
  category: string;
  quantity: number;
  image: string;
};

type CategoryCardProps = {
  data: CategoryCardData;
};

export default function CategoryCard({ data }: CategoryCardProps) {
  return (
    <Link
      className="group relative block h-[25rem] lg:h-[35rem] overflow-hidden border border-on-surface/50 bg-surface-bright"
      href={{
        pathname: routes.shop,
        query: {
          category: data.category,
        },
      }}
    >
      <CustomImage
        src={data.image}
        alt={`Imagen de ${data.category}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="absolute inset-0 size-full object-cover custom-transition-all group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/0 custom-transition-all group-hover:bg-black/20" />

      <div className="absolute inset-x-md top-md h-px origin-left scale-x-0 bg-surface custom-transition-all group-hover:scale-x-100" />

      <div className="absolute bottom-0 left-0 w-full border-t border-outline bg-surface-bright p-md custom-transition-all group-hover:-translate-y-sm">
        <div className="flex items-center justify-between gap-2">
          <span className="font-accent text-xs font-medium tracking-[0.1em] uppercase text-on-surface custom-transition-all group-hover:tracking-[0.16em] line-clamp-1">
            {data.category}
          </span>

          <span className="font-accent text-xs font-medium tracking-[0.1em] uppercase text-secondary-text line-clamp-1">
            {formatTwoDigits(data.quantity)} artículos
          </span>
        </div>

        <div className="mt-sm h-px w-full origin-left scale-x-0 bg-on-surface custom-transition-all group-hover:scale-x-100" />
      </div>
    </Link>
  );
}
