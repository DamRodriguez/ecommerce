import SpaceX from "@/components/layout/SpaceX";
import ShopClientPage from "@/components/pages/shop/ShopClientPage";
import Spinner from "@/components/spinner/Spinner";
import { routes } from "@/constants/routes";
import products from "@/data/products.json";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = createMetadata({
  title: "Tienda",
  description: "Descripción de ejemplo.",
  path: routes.shop,
});

export default function ShopPage() {
  return (
    <SpaceX className="py-margin-mobile lg:py-margin-desktop">
      <Suspense fallback={<Spinner />}>
        <ShopClientPage data={products} />
      </Suspense>
    </SpaceX>
  );
}
