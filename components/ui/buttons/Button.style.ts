import { tv } from "tailwind-variants";

export const buttonClass = tv({
  base: [
    "relative overflow-hidden custom-transition-all",
    "text-sm xl:text-lg",
    "flex items-center justify-center",
    "font-accent px-[1.5rem] xl:px-[2rem] py-[0.8rem] xl:py-[1rem]",

    "before:absolute before:left-0 before:bottom-0 before:z-0 before:h-0 before:w-full",
    "before:custom-transition-all before:duration-300 before:ease-in-out",
    "hover:before:h-full",

    "after:absolute after:left-0 after:bottom-0 after:z-0 after:h-[2px] after:w-full",
    "after:origin-left after:scale-x-0",
    "after:custom-transition-all after:duration-500 after:ease-out",
    "hover:after:scale-x-100",
  ],

  variants: {
    intent: {
      primary: [
        "bg-on-surface-strong text-surface border border-on-surface-strong",
        "hover:text-on-surface",
        "before:bg-surface-bright",
        "after:bg-on-surface",
      ],

      secondary: [
        "bg-surface-bright text-on-surface border border-surface-bright",
        "hover:text-surface",
        "before:bg-on-surface-strong",
        "after:bg-surface",
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
        "border-on-surface-strong before:bg-on-surface-strong text-on-surface hover:text-surface after:bg-surface",
    },
    {
      intent: "secondary",
      outline: true,
      class:
        "border-surface-bright before:bg-surface-bright text-surface hover:text-on-surface after:bg-on-surface",
    },
  ],

  defaultVariants: {
    intent: "primary",
    disabled: false,
  },
});

export type ButtonVariants = "primary" | "secondary";
