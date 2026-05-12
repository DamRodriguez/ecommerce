"use client";
import MotionFade from "@/components/motion/MotionFade";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";

export type ColumnItems = {
  text: string;
  href: string;
};

type ColumnProps = {
  title: string;
  items: ColumnItems[];
};

export default function Column({ title, items }: ColumnProps) {
  const { handleSmoothScroll } = useSmoothScroll();

  return (
    <MotionFade className="flex flex-col gap-4">
      <p className="font-bold text-xs xl:text-sm tracking-widest uppercase font-accent text-surface-bright">
        {title}
      </p>
      <ul className="flex flex-col gap-2 text-xs xl:text-sm text-surface">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="hover:underline"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </MotionFade>
  );
}
