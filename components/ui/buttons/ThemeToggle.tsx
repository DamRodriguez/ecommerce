"use client";
import clsx from "clsx";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const iconClassName = "w-[1rem] h-[1rem] xl:w-[1.5rem] xl:h-[1.5rem]";

  useEffect(() => setMounted(true), []);

  const handleThemeChange = () => {
    const currentTheme = resolvedTheme ?? theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.add("theme-switching");

    const cleanUp = () => {
      root.classList.remove("theme-switching");
    };

    if (!document.startViewTransition) {
      setTheme(newTheme);

      window.setTimeout(cleanUp, 600);
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });

    transition.finished.finally(cleanUp);
  };

  if (!mounted) {
    return (
      <div className="container flex items-center justify-center opacity-0">
        <div className="w-[2.17375rem] xl:w-[2.67375rem] aspect-square" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="container flex items-center justify-center">
      <label
        htmlFor="switch"
        className="group relative grid w-[2.17375rem] xl:w-[2.67375rem] aspect-square cursor-pointer place-items-center bg-on-surface group"
      >
        <input
          type="checkbox"
          id="switch"
          className="peer hidden"
          checked={isDark}
          onChange={handleThemeChange}
        />

        <div className="col-start-1 row-start-1 transition-all delay-150 peer-checked:rotate-[180deg] peer-checked:scale-0">
          <Moon
            className={clsx(
              "stroke-surface group-hover:fill-surface fill-transparent custom-transition-all",
              iconClassName,
            )}
          />
        </div>

        <div className="col-start-1 row-start-1 scale-0 transition-all peer-checked:delay-150 peer-checked:scale-100 peer-checked:rotate-[180deg]">
          <SunMedium
            className={clsx(
              "stroke-surface group-hover:fill-surface fill-transparent custom-transition-all",
              iconClassName,
            )}
          />
        </div>
      </label>
    </div>
  );
}
