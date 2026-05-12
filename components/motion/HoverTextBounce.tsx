"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

type HoverTextBounceProps = {
  text: string;
  className?: string;
  letterClassName?: string;
};

export default function HoverTextBounce({
  text,
  className,
  letterClassName,
}: HoverTextBounceProps) {
  const letters = Array.from(text);

  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      className={clsx("inline-flex", className)}
      aria-label={text}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={{
            initial: {
              y: 0,
            },
            hover: {
              y: [0, -8, 0],
              transition: {
                duration: 0.35,
                delay: index * 0.035,
                ease: "easeOut",
              },
            },
          }}
          className={clsx(
            "inline-block will-change-transform",
            letter === " " && "w-[0.3em]",
            letterClassName,
          )}
          aria-hidden="true"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
