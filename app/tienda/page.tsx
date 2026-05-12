import { routes } from "@/constants/routes";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Tienda",
  description: "Descripción de ejemplo.",
  path: routes.shop,
});

export default function ShopPage() {
  return <></>;
}
