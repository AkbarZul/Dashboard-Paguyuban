import { InputHTMLAttributes, ReactNode } from "react";

import cn from "@/helpers/cn";

export type StandardTextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label?: ReactNode | string;
  size?: "sm" | "md" | "lg" | "xl";
  errorMessage?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  layoutClassname?: string;
  Icon?: ReactNode;
};

const InputText: React.FC<StandardTextFieldProps> = ({
  layoutClassname,
  className,
  label,
  type = "text",
  id = "input",
  value = "",
  onChange,
  placeholder,
  disabled,
  errorMessage,
  name,
  inputProps,
  Icon,
  ...props
}: Partial<StandardTextFieldProps>) => {
  return (
    <div
      {...props}
      className={cn("inline-flex flex-col font-sans", layoutClassname)}
    >
      <label
        className={cn(
          "text-sm font-medium text-slate-700",
          !label && "flex items-center",
          label && 'mb-1'
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={cn([
          "max-w-full inline-flex",
          value && "bg-slate-200 rounded-lg",
          disabled && "bg-slate-200 border border-slate-200 rounded-lg",
          Icon && "relative",
          className,
        ])}
      >
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {Icon}
        </div>

        <input
          className={cn(
            "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",
            value && "bg-slate-200",
            disabled && "bg-slate-200 text-black placeholder:text-unactive",
            Icon && "pl-10",
            errorMessage && "border-rose-500",
            inputProps?.className,
          )}
          data-testid={"input_" + name}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          title={value as string}
          type={type}
          value={value}
          {...inputProps}
        />
      </div>
      {errorMessage && (
        <div
          className="mt-1 text-[10px] text-rose-600"
          data-testid={"error_input_" + name}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default InputText;
