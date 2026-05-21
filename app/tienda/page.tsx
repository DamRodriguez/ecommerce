import SpaceX from "@/components/layout/SpaceX";
import ShopClientPage from "@/components/pages/shop/ShopClientPage";
import { routes } from "@/constants/routes";
import products from "@/data/products.json";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Tienda",
  description: "Descripción de ejemplo.",
  path: routes.shop,
});

export default function ShopPage() {
  return (
    <SpaceX className="py-margin-mobile lg:py-margin-desktop">
      <ShopClientPage data={products} />
    </SpaceX>
  );
}
