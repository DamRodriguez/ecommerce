"use client";
import { routeItems } from "@/constants/routeItems";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import clsx from "clsx";
import Link from "next/link";

const NavDesk = () => {
  const { pathname, handleSmoothScroll } = useSmoothScroll();

  return (
    <nav className="hidden xl:flex">
      <ul className="flex gap-[3rem]">
        {routeItems.map((item, index) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li
              key={index}
              className="flex items-center justify-center flex-col group relative cursor-pointer"
            >
              <Link
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={clsx(
                  "py-[0.5rem] text-base font-accent uppercase tracking-[0.1rem] group-hover:text-on-surface custom-transition-all",
                  {
                    "text-on-surface": isActive,
                    "text-secondary-text": !isActive,
                  },
                )}
              >
                {item.label}
              </Link>
              <span
                className={clsx(
                  "absolute bottom-0 left-0 w-full h-[3px] bg-on-surface custom-transition-all origin-left",
                  {
                    "scale-x-100": isActive,
                    "scale-x-0 group-hover:scale-x-100": !isActive,
                  },
                )}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavDesk;
