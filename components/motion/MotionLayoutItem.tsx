"use client";
import clsx from "clsx";
import {
  motion,
  type HTMLMotionProps,
  type Transition,
  type Variants,
} from "framer-motion";

type MotionLayoutItemProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

const variants: Variants = {
  initial: {
    opacity: 0,
    x: 32,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 120,
    scale: 0.96,
  },
};

const transition: Transition = {
  layout: {
    duration: 0.35,
    ease: "easeInOut",
  },
  opacity: {
    duration: 0.2,
    ease: "easeOut",
  },
  x: {
    duration: 0.3,
    ease: "easeInOut",
  },
  scale: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

export default function MotionLayoutItem({
  children,
  className,
  ...props
}: MotionLayoutItemProps) {
  return (
    <motion.div
      layout
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className={clsx("overflow-hidden", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
