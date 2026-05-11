import { routes } from "@/constants/routes";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Pagina Ejemplo",
  description: "Descripción de ejemplo.",
  path: routes.ejemplo,
});

export default function EjemploPage() {
  return <></>;
}
