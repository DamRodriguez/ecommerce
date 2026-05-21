import MotionFade from "@/components/motion/MotionFade";
import MotionSlide from "@/components/motion/MotionSlide";
import MotionStretch from "@/components/motion/MotionStretch";
import ProductCard, {
  ProductCardData,
} from "@/components/pages/shop/ProductCard";

type ProductsSectionProps = {
  data: ProductCardData[];
  totalProducts: number;
};

export default function ProductsSection({
  data,
  totalProducts,
}: ProductsSectionProps) {
  const hasProducts = data.length > 0;

  return (
    <section className="w-full">
      <div className="flex flex-col justify-between mb-xl">
        <div className="mb-md">
          <MotionSlide>
            <h1 className="text-4xl lg:text-6xl text-on-surface">Catálogo</h1>
          </MotionSlide>

          <MotionFade>
            <p className="text-base text-on-surface mt-xs">
              Mostrando <span className="font-accent">{data.length}</span> de{" "}
              <span className="font-accent">{totalProducts}</span> objetos de
              precisión arquitectónica.
            </p>
          </MotionFade>
        </div>

        <MotionStretch className="w-full h-[4px] bg-on-surface">
          <span />
        </MotionStretch>
      </div>

      {hasProducts ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-lg">
          {data.map((product) => (
            <MotionSlide key={product.id} direction="down">
              <ProductCard data={product} />
            </MotionSlide>
          ))}
        </div>
      ) : (
        <div className="border border-outline bg-surface-bright p-xl">
          <p className="text-on-surface text-xl">No se encontraron productos</p>

          <p className="text-on-surface mt-xs">
            Probá cambiar la búsqueda o limpiar los filtros
          </p>
        </div>
      )}
    </section>
  );
}
