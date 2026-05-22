"use client";
import { DEFAULT_MOTION, type MotionDefaults } from "@/config/motion";
import clsx from "clsx";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";

type SlideDirection = "left" | "right" | "up" | "down";

type MotionSlidePresenceProps = MotionDefaults & {
  initialDirection?: SlideDirection;
  exitDirection?: SlideDirection;
  distance?: number;
};

const getPosition = (direction: SlideDirection, distance: number) => {
  switch (direction) {
    case "left":
      return { x: -distance, y: 0 };

    case "right":
      return { x: distance, y: 0 };

    case "up":
      return { x: 0, y: -distance };

    case "down":
      return { x: 0, y: distance };

    default:
      return { x: 0, y: distance };
  }
};

const visibleState = {
  opacity: 1,
  x: 0,
  y: 0,
};

const MotionSlidePresence = ({
  initialDirection = "down",
  exitDirection = "up",
  distance = 24,
  ...props
}: MotionSlidePresenceProps) => {
  const { duration, order, children, className, onClick } = {
    ...DEFAULT_MOTION,
    ...props,
  };

  const initial = useMemo(
    () => ({
      opacity: 0,
      ...getPosition(initialDirection, distance),
    }),
    [initialDirection, distance],
  );

  const exit = useMemo(
    () => ({
      opacity: 0,
      ...getPosition(exitDirection, distance),
    }),
    [exitDirection, distance],
  );

  const transition = useMemo(
    () => ({
      duration,
      delay: order * 0.4,
      ease: "easeInOut" as const,
    }),
    [duration, order],
  );

  return (
    <motion.div
      initial={initial}
      animate={visibleState}
      exit={exit}
      transition={transition}
      className={clsx("will-change-[opacity,transform]", className)}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default memo(MotionSlidePresence);
