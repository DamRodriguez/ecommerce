import { routes } from "@/constants/routes";

export const routeItems = [
  { href: routes.home, label: "Inicio" },
  { href: routes.ejemplo, label: "Ejemplo" },
] as const;

export type RouteLabel = (typeof routeItems)[number]["label"];
