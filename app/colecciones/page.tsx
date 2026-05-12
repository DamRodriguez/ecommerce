import { routes } from "@/constants/routes";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Colecciones",
  description: "Descripción de ejemplo.",
  path: routes.collections,
});

export default function CollectionsPage() {
  return <></>;
}
