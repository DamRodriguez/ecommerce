import Input from "@/components/ui/inputs/input/Input";
import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { RefCallBack } from "react-hook-form";

export type InputPasswordProps = {
  id?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  maxLength?: number;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  disabled?: boolean;
  name?: string;
  ref?: RefCallBack;
};

export const InputPassword = ({
  id,
  name,
  placeholder,
  error,
  maxLength,
  value,
  ref,
  disabled,
  onChange,
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const iconClass = clsx("", {
    "fill-on-surface": isFocus || value,
  });

  return (
    <div className="relative">
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        name={name}
        spellCheck={false}
        disabled={disabled}
        ref={ref}
        onChange={onChange}
        maxLength={maxLength}
        error={error}
        className="pr-[3rem]"
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        autoComplete="current-password"
      />
      <button
        type="button"
        className="flex absolute right-0 top-0 inset-y-0 items-center hover:cursor-pointer px-[1rem]"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          setShowPassword(!showPassword);
        }}
        tabIndex={value ? 0 : -1}
      >
        {value &&
          (showPassword ? (
            <Eye className={iconClass} />
          ) : (
            <EyeOff className={iconClass} />
          ))}
      </button>
    </div>
  );
};
