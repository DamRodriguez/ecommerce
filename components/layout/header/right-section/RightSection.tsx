"use client";
import HeaderCartButton from "@/components/layout/header/right-section/HeaderCartButton";
import { ThemeToggle } from "@/components/ui/buttons/ThemeToggle";
import clsx from "clsx";

type RightSectionProps = {
  isMobileNavVisible: boolean;
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isCartVisible: boolean;
  setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const RightSection = (props: RightSectionProps) => {
  const handleToggleMobileNav = () => {
    props.setIsMobileNavVisible((prev) => !prev);
  };

  const handleToggleCart = () => {
    props.setIsCartVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-[1rem] md:gap-[1.5rem] xl:gap-[2rem]">
      <ThemeToggle />
      <HeaderCartButton onClick={handleToggleCart} />

      <div className="flex xl:hidden">
        <button
          onClick={handleToggleMobileNav}
          className="relative flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center"
          aria-label={
            props.isMobileNavVisible
              ? "Cerrar menú de navegación"
              : "Abrir menú de navegación"
          }
          aria-expanded={props.isMobileNavVisible}
        >
          <span
            className={clsx(
              "absolute h-[2px] w-[1.5rem] rounded-full bg-on-surface custom-transition-all",
              props.isMobileNavVisible
                ? "translate-y-0 rotate-45"
                : "-translate-y-[0.3rem] rotate-0",
            )}
          />

          <span
            className={clsx(
              "absolute h-[2px] w-[1.5rem] rounded-full bg-on-surface custom-transition-all",
              props.isMobileNavVisible
                ? "translate-y-0 -rotate-45"
                : "translate-y-[0.3rem] rotate-0",
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default RightSection;
