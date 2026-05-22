"use client";
import HeaderCartButton from "@/components/layout/header/right-section/HeaderCartButton";
import { ThemeToggle } from "@/components/ui/buttons/ThemeToggle";
import useCart from "@/redux/cart/useCart";
import clsx from "clsx";

type RightSectionProps = {
  isMobileNavVisible: boolean;
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isCartVisible: boolean;
  setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const RightSection = (props: RightSectionProps) => {
  const { totalItems } = useCart();
  const handleToggleMobileNav = () => {
    props.setIsMobileNavVisible((prev) => !prev);
  };

  const handleToggleCart = () => {
    props.setIsCartVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-[1rem] md:gap-[1.5rem] xl:gap-[2rem]">
      <ThemeToggle />
      <div
        className={clsx("custom-transition-all", {
          "mr-[0.7rem] md:mr-[1.2rem] xl:mr-[1.7rem]": totalItems > 0,
        })}
      >
        <HeaderCartButton onClick={handleToggleCart} />
      </div>

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
