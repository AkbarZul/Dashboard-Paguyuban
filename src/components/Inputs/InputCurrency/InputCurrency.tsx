import cn from "@/helpers/cn";

import { InputHTMLAttributes, ReactNode, useState } from "react";

export type InputCurrencyProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label?: ReactNode | string;
  size?: "sm" | "md" | "lg" | "xl";
  errorMessage?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  layoutClassname?: string;
  onChange?: (value: number | string) => void;
  value?: number | string;
};

const formatNumber = (num: number | string) => {
  if (num === "" || num === undefined) return "";

  return new Intl.NumberFormat("id-ID").format(Number(num));
};

const parseNumber = (value: string) => {
  const cleaned = value.replace(/\./g, "").replace(",", ".");
  return Number(cleaned);
};

const InputCurrency = ({
  layoutClassname,
  className,
  label,
  id = "input",
  value = "",
  onChange,
  placeholder,
  disabled,
  errorMessage,
  name,
  inputProps,
  ...props
}: InputCurrencyProps) => {
  const [rawValue, setRawValue] = useState("");

  const displayValue =
    rawValue !== "" ? rawValue : value !== undefined ? formatNumber(value) : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const numeric = parseNumber(input);

    if (isNaN(numeric)) return;

    setRawValue(formatNumber(numeric));
    onChange?.(numeric);
  };

  return (
    <div
      {...props}
      className={cn("inline-flex flex-col font-sans", layoutClassname)}
    >
      <label
        className={cn(
          "text-sm font-medium text-slate-700",
          !label && "flex items-center",
          label && "mb-1",
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
          className,
        ])}
      >
        <input
          className={cn(
            "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",
            value && "bg-slate-200",
            disabled && "bg-slate-200 text-black placeholder:text-unactive",

            errorMessage && "border-rose-500",
            inputProps?.className,
          )}
          data-testid={"input_" + name}
          disabled={disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          title={displayValue}
          value={displayValue}
          onChange={handleChange}
          type="text"
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

export default InputCurrency;
