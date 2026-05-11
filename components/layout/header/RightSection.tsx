import { ThemeToggle } from "@/components/ui/buttons/ThemeToggle";
import clsx from "clsx";

type RightSectionProps = {
  isMobileNavVisible: boolean;
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const RightSection = (props: RightSectionProps) => {
  const { isMobileNavVisible, setIsMobileNavVisible } = props;

  const handleToggleMobileNav = () => {
    setIsMobileNavVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-[1rem] md:gap-[1.5rem] xl:gap-[2rem]">
      <ThemeToggle />

      <div className="flex xl:hidden">
        <button
          onClick={handleToggleMobileNav}
          className="relative flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center"
          aria-label={
            isMobileNavVisible
              ? "Cerrar menú de navegación"
              : "Abrir menú de navegación"
          }
          aria-expanded={isMobileNavVisible}
        >
          <span
            className={clsx(
              "absolute h-[2px] w-[1.5rem] rounded-full bg-on-surface custom-transition-all",
              isMobileNavVisible
                ? "translate-y-0 rotate-45"
                : "-translate-y-[0.3rem] rotate-0",
            )}
          />

          <span
            className={clsx(
              "absolute h-[2px] w-[1.5rem] rounded-full bg-on-surface custom-transition-all",
              isMobileNavVisible
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
