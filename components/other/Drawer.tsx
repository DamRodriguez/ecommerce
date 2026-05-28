"use client";
import clsx from "clsx";
import { AnimatePresence, motion, type Transition } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type DrawerProps = {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
  className?: string;
  closeButton?: React.ReactNode | null;
  closeButtonClassName?: string;
  position?: "left" | "right" | "bottom" | "top";
  transition?: Transition;
  overlayClassName?: string;
  hideOverlay?: boolean;
  disableOutsideOnClose?: boolean;
};

const Drawer = ({
  children,
  visible,
  onClose,
  className,
  closeButtonClassName,
  position = "right",
  closeButton = <X className="stroke-on-surface w-7 h-7" />,
  transition = { duration: 0.4, ease: "easeInOut" },
  overlayClassName,
  hideOverlay,
  disableOutsideOnClose,
}: DrawerProps) => {
  const [mounted, setMounted] = useState(false);

  const drawerPosition = useMemo(
    () => ({
      left: {
        initial: { x: "-100%" },
        animate: { x: 0 },
        exit: { x: "-100%" },
        className: "top-0 bottom-0 left-0",
      },
      right: {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        className: "top-0 bottom-0 right-0",
      },
      top: {
        initial: { y: "-100%" },
        animate: { y: 0 },
        exit: { y: "-100%" },
        className: "left-0 right-0 top-0",
      },
      bottom: {
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        className: "left-0 right-0 bottom-0",
      },
    }),
    [],
  );

  const lockScroll = useCallback(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    lockScroll();

    return () => {
      unlockScroll();
    };
  }, [visible, lockScroll, unlockScroll]);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence mode="wait" onExitComplete={unlockScroll}>
      {visible && (
        <>
          {!hideOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                "fixed inset-0 z-[998] bg-black/65 backdrop-blur-[0.5rem]",
                overlayClassName,
              )}
            />
          )}

          {!disableOutsideOnClose && (
            <div onClick={onClose} className="fixed inset-0 z-[999]" />
          )}

          <motion.div
            initial={drawerPosition[position].initial}
            animate={drawerPosition[position].animate}
            exit={drawerPosition[position].exit}
            transition={transition}
            style={{ willChange: "transform" }}
            className={clsx(
              "fixed z-[1000] w-full overflow-hidden",
              "backface-visibility-hidden",
              drawerPosition[position].className,
              className,
            )}
          >
            {closeButton && (
              <button
                onClick={onClose}
                className={clsx(
                  "absolute z-[1001] cursor-pointer",
                  closeButtonClassName,
                )}
              >
                {closeButton}
              </button>
            )}

            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Drawer;
