"use client";
import CategoryCard from "@/components/common/categories/CategoryCard";
import SpaceX from "@/components/layout/SpaceX";
import MotionSlide from "@/components/motion/MotionSlide";
import MotionStretch from "@/components/motion/MotionStretch";
import config from "@/config/config";
import { products } from "@/data/products";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function CategoriesSection() {
  const isTablet = useBreakpoint(config.breakpoints.xl);

  const categoryItems = Object.values(
    products.reduce<
      Record<
        string,
        {
          id: string;
          category: string;
          quantity: number;
          image: string;
        }
      >
    >((acc, product) => {
      const category = product.category;

      if (!acc[category]) {
        acc[category] = {
          id: category,
          category,
          quantity: 0,
          image: product.image,
        };
      }

      acc[category].quantity += 1;

      return acc;
    }, {}),
  ).slice(0, 4);

  return (
    <SpaceX className="py-vertical-mobile lg:py-vertical-desktop bg-surface border-b border-outline">
      <div className="flex flex-col gap-xs mb-xxl">
        <MotionSlide>
          <h2 className="text-2xl lg:text-3xl font-semibold leading-[1.4] text-on-surface uppercase">
            Categorías
          </h2>
        </MotionSlide>
        <MotionStretch className="w-full h-[4px] bg-outline">
          <span />
        </MotionStretch>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-lg">
        {categoryItems.map((item, index) => (
          <MotionSlide
            key={item.id}
            order={isTablet ? 0 : index * 0.4}
            direction="down"
          >
            <CategoryCard data={item} />
          </MotionSlide>
        ))}
      </div>
    </SpaceX>
  );
}
