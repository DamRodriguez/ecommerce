import { tv } from "tailwind-variants";

export const inputClass = tv({
  base: "bg-transparent min-h-[2.5rem] py-[0.5rem] group-focus-within:border-on-surface outline-none custom-transition-all text-sm sm:text-base placeholder:text-secondary-text border-b border-secondary-text placeholder:text-xs sm:placeholder:text-sm",
  variants: {
    intent: {
      default: "",
    },
    size: {
      small: "",
      large: "w-full",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
    hasValue: {
      true: "border-on-surface",
    },
    hasError: {
      true: "border-red",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "large",
  },
});
