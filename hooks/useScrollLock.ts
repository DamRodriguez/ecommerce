import { useCallback, useEffect } from "react";

export const useScrollLock = (isVisible: boolean) => {
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
    if (isVisible) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => unlockScroll();
  }, [isVisible, lockScroll, unlockScroll]);
};
