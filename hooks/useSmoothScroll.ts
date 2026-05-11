"use client";
import { usePathname } from "next/navigation";

export const useSmoothScroll = () => {
  const pathname = usePathname();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname === href) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return { handleSmoothScroll, pathname };
};
