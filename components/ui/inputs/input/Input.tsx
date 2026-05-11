import { inputClass } from "@/components/ui/inputs/input/Input.style";
import clsx from "clsx";
import type { RefCallBack } from "react-hook-form";

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "className" | "disabled"
> & {
  error?: boolean;
  size?: "small" | "large";
  value?: string;
  className?: string;
  disabled?: boolean;
  ref?: RefCallBack;
};

const Input = ({
  error,
  size,
  value,
  className,
  disabled,
  ref,
  ...props
}: InputProps) => {
  return (
    <input
      value={value}
      ref={ref}
      {...props}
      className={clsx(
        inputClass({
          hasError: error,
          hasValue: value ? value.length > 0 : undefined,
          disabled: disabled,
          size: size,
        }),
        className,
      )}
    />
  );
};

export default Input;
