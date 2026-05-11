import Input from "@/components/ui/inputs/input/Input";
import clsx from "clsx";
import type { RefCallBack } from "react-hook-form";

export type InputCheckboxProps = {
  name?: string;
  className?: string;
  id?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  ref?: RefCallBack;
  error?: boolean;
};

export const InputCheckbox = ({
  name,
  id,
  ref,
  checked,
  value,
  onFocus,
  onBlur,
  onChange,
  disabled,
  error,
  className,
}: InputCheckboxProps) => {
  return (
    <div className="relative">
      <Input
        id={id}
        type="checkbox"
        name={name}
        ref={ref}
        checked={checked ?? !!value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        error={error}
        className={clsx(
          "cursor-pointer accent-on-surface !w-[1rem] xl:!w-[1.5rem] !shadow-none absolute bottom-0 left-0",
          className,
        )}
      />
    </div>
  );
};
