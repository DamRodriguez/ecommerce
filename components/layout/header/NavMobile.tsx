"use client";
import SpaceX from "@/components/layout/SpaceX";
import SocialButtons from "@/components/other/SocialButtons";
import { routeItems } from "@/constants/routeItems";
import Link from "next/link";

type NavMobileProps = {
  onClose: () => void;
};

const NavMobile = ({ onClose }: NavMobileProps) => {
  return (
    <SpaceX className="pt-[2rem] pb-[10rem] justify-between flex flex-col h-full">
      <nav>
        <ul className="flex flex-col items-center text-center gap-[1rem]">
          {routeItems.map(({ href, label }) => (
            <li
              key={href}
              className="cursor-pointer w-full group max-w-[15rem]"
            >
              <Link
                href={href}
                onClick={onClose}
                className="text-on-surface text-base font-accent uppercase tracking-[0.1rem]"
              >
                {label}
              </Link>
              <div className="h-[0.02rem] bg-secondary-text my-[0.5rem] mx-auto w-full" />
            </li>
          ))}
        </ul>
      </nav>
      <SocialButtons />
    </SpaceX>
  );
};

export default NavMobile;
