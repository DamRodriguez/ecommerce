import { tv } from "tailwind-variants";

export const buttonClass = tv({
  base: [
    "relative overflow-hidden custom-transition-all active:opacity-80",
    "text-sm xl:text-lg font-accent",
    "flex items-center justify-center",
    "px-[1.5rem] xl:px-[2rem] h-[2.7rem] xl:h-[3.5rem]",

    "before:absolute before:left-0 before:bottom-0 before:z-0 before:h-0 before:w-full",
    "before:custom-transition-all before:duration-400 before:ease-in-out",
    "hover:before:h-full",

    "after:absolute after:left-0 after:bottom-0 after:z-0 after:h-[2px] after:w-full",
    "after:origin-left after:scale-x-0",
    "after:custom-transition-all after:duration-400 after:ease-out",
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

      tertiary: [
        "bg-transparent text-on-surface border border-transparent !px-0",
        "after:bg-on-surface",
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

    border: {
      false: null,
      true: "border",
    },

    small: {
      false: null,
      true: "!px-[0.7rem] !h-[1.7rem] xl:!px-[1rem] xl:!h-[2rem] !text-xs",
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
    {
      intent: "primary",
      border: true,
      class: "border-surface-bright",
    },
    {
      intent: "secondary",
      border: true,
      class: "border-on-surface-strong",
    },
  ],

  defaultVariants: {
    intent: "primary",
    disabled: false,
  },
});

export type ButtonVariants = "primary" | "secondary" | "tertiary";
