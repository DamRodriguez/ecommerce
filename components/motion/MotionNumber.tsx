"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

type MotionNumberProps = {
  value: number | string;
  className?: string;
  digitClassName?: string;
  formatter?: (value: number | string) => string;
};

export default function MotionNumber({
  value,
  className,
  digitClassName,
  formatter,
}: MotionNumberProps) {
  const previousValueRef = useRef(value);

  const direction = Number(value) > Number(previousValueRef.current) ? 1 : -1;

  const textValue = useMemo(() => {
    return formatter ? formatter(value) : String(value);
  }, [value, formatter]);

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return (
    <span className={className} aria-label={textValue}>
      {textValue.split("").map((char, index) => {
        const isDigit = /\d/.test(char);

        return (
          <span
            key={`${index}-${char}`}
            className="relative inline-flex overflow-hidden align-middle"
          >
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.span
                key={`${char}-${index}-${textValue}`}
                custom={direction}
                initial={{
                  y: isDigit ? `${direction * 100}%` : 0,
                  opacity: isDigit ? 0 : 1,
                }}
                animate={{
                  y: "0%",
                  opacity: 1,
                }}
                exit={{
                  y: isDigit ? `${direction * -100}%` : 0,
                  opacity: isDigit ? 0 : 1,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className={digitClassName}
              >
                {char}
              </motion.span>
            </AnimatePresence>
          </span>
        );
      })}
    </span>
  );
}
