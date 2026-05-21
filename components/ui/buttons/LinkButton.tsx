import {
  buttonClass,
  type ButtonVariants,
} from "@/components/ui/buttons/Button.style";
import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type QueryValue = string | number | boolean | undefined | null;

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  query?: Record<string, QueryValue>;
  className?: string;
  variant?: ButtonVariants;
  outline?: boolean;
  full?: boolean;
  cursorNormal?: boolean;
  external?: boolean;
  customUppercase?: boolean;
  border?: boolean;
};

const LinkButton = ({
  children,
  href,
  query,
  className,
  variant,
  outline,
  full,
  cursorNormal = false,
  external = false,
  customUppercase,
  border = false,
}: LinkButtonProps) => {
  const cleanQuery = query
    ? Object.fromEntries(
        Object.entries(query).filter(
          ([, value]) => value !== undefined && value !== null && value !== "",
        ),
      )
    : undefined;

  const classes = clsx(
    buttonClass({
      intent: variant,
      outline,
      full,
      cursorNormal,
      customUppercase,
      border,
    }),
    className,
  );

  const hasQuery = cleanQuery && Object.keys(cleanQuery).length > 0;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <span className="relative z-10 flex items-center justify-center gap-[0.5rem] xl:gap-[0.7rem]">
          {children}
        </span>
      </a>
    );
  }

  return (
    <Link
      href={
        hasQuery
          ? {
              pathname: href,
              query: cleanQuery,
            }
          : href
      }
      className={classes}
    >
      <span className="relative z-10 flex items-center justify-center gap-[0.5rem] xl:gap-[0.7rem]">
        {children}
      </span>
    </Link>
  );
};

export default LinkButton;
