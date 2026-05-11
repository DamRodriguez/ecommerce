"use client";
import Spinner from "@/components/spinner/Spinner";
import {
  buttonClass,
  type ButtonVariants,
} from "@/components/ui/buttons/Button.style";
import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void | Promise<void>;
  disabled?: boolean;
  spinnerColor?: string;
  className?: string;
  variant?: ButtonVariants;
  outline?: boolean;
  full?: boolean;
  form?: string;
  cursorNormal?: boolean;
  customUppercase?: boolean;
};

const Button = ({
  children,
  type = "button",
  isLoading = false,
  onClick,
  disabled = false,
  spinnerColor,
  className,
  variant,
  outline,
  full,
  form,
  cursorNormal = false,
  customUppercase,
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  const classes = clsx(
    buttonClass({
      intent: variant,
      disabled: isDisabled,
      outline,
      full,
      cursorNormal,
      customUppercase,
    }),
    className,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return;

    if (onClick) {
      void onClick(event);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      className={classes}
      form={form}
      aria-busy={isLoading}
    >
      <span className="relative z-10 flex items-center justify-center gap-[0.5rem] xl:gap-[0.7rem]">
        {isLoading ? <Spinner size={20} color={spinnerColor} /> : children}
      </span>
    </button>
  );
};

export default Button;
