import cn from "@/helpers/cn";
import { InputHTMLAttributes } from "react";

export type InputDateProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  errorMessage?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  layoutClassname?: string;
  containerClassname?: string;
};

const InputDate: React.FC<InputDateProps> = ({
  layoutClassname,
  containerClassname,
  label,
  disabled,
  errorMessage,
  id = "date",
  inputProps,
  onChange,
  name,
  value,
  ...props
}: InputDateProps) => {
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
          containerClassname,
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
          onChange={onChange}
          max={props.max ? props.max : "9999-12-31"}
          min={props.min ?? ""}
          placeholder="dd-mm-yyyy"
          title={value as string}
          type="date"
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

export default InputDate;
