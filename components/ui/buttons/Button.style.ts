import { tv } from "tailwind-variants";

export const buttonClass = tv({
  base: [
    "relative overflow-hidden custom-transition-all",
    "text-sm xl:text-lg",
    "flex items-center justify-center gap-[0.5rem] xl:gap-[0.7rem]",
    "font-accent px-[0.6rem] xl:px-[1rem] py-[0.3rem] xl:py-[0.6rem]",
    "before:absolute before:left-0 before:bottom-0 before:h-0 before:w-full",
    "before:custom-transition-all before:duration-300 before:ease-in-out",
    "hover:before:h-full",
  ],

  variants: {
    intent: {
      primary: [
        "bg-on-surface-strong text-surface border border-on-surface-strong",
        "hover:text-on-surface",
        "before:bg-surface-bright",
      ],

      secondary: [
        "bg-surface-bright text-on-surface border border-surface-bright",
        "hover:text-surface",
        "before:bg-on-surface-strong",
      ],
    },

    disabled: {
      false: null,
      true: "cursor-not-allowed pointer-events-none opacity-60",
    },

    outline: {
      false: null,
      true: "bg-transparent border",
    },

    full: {
      false: "w-fit",
      true: "w-full",
    },

    customUppercase: {
      false: null,
      true: "font-bold tracking-wider uppercase",
    },

    cursorNormal: {
      false: "cursor-pointer",
      true: "cursor-default",
    },
  },

  compoundVariants: [
    {
      intent: "primary",
      outline: true,
      class:
        "border-on-surface-strong before:bg-on-surface-strong text-on-surface hover:text-surface",
    },
    {
      intent: "secondary",
      outline: true,
      class:
        "border-surface-bright before:bg-surface-bright text-surface hover:text-on-surface",
    },
  ],

  defaultVariants: {
    intent: "primary",
    disabled: false,
  },
});

export type ButtonVariants = "primary" | "secondary";
