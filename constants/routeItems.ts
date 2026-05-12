import { routes } from "@/constants/routes";

export const routeItems = [
  { href: routes.home, label: "Inicio" },
  { href: routes.shop, label: "Tienda" },
  { href: routes.collections, label: "Colecciones" },
] as const;

export type RouteLabel = (typeof routeItems)[number]["label"];
