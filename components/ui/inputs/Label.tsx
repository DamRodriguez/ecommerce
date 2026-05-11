import clsx from "clsx";

type LabelProps = {
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
  error?: boolean;
  hasValue?: boolean;
};

const Label = ({ htmlFor, children, hasValue, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        "text-base group-focus-within:text-on-surface custom-transition-all w-fit font-accent uppercase tracking-wide",
        className,
        {
          "text-on-surface": hasValue,
          "text-secondary-text": !hasValue,
        },
      )}
    >
      {children}
    </label>
  );
};

export default Label;
