import Button from "@/components/Button";
import { useInputSelect, Option } from "./useInputSelect";
import cn from "@/helpers/cn";
import { ChevronDown, ChevronUp, X } from "lucide-react";

export interface InputSelectProps<T> {
  list: Option<T>[];
  value?: T;
  onChange?: (val: T) => void;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  layoutClassname?: string;
  containerClassname?: string;
  label?: string;
  resetFilter?: boolean;
  onResetFilter?: () => void;
}
const InputSelect = <T,>({
  list,
  value,
  onChange,
  placeholder = "Select...",
  disabled,
  errorMessage,
  layoutClassname,
  containerClassname,
  label,
  resetFilter,
  onResetFilter,
}: InputSelectProps<T>) => {
  const {
    inputRef,
    containerRef,
    open,
    keyword,
    activeIndex,
    filtered,
    setKeyword,
    toggle,
    select,
    onKeyDown,
  } = useInputSelect<T>({
    list,
    value,
    onChange,
    disabled,
  });
  return (
    <div ref={containerRef} className={cn("relative w-full", layoutClassname)}>
      <label
        className={cn(
          "text-sm font-medium text-slate-700",
          !label && "flex items-center",
          label && "mb-1",
        )}
      >
        {label}
      </label>
      <div
        onClick={toggle}
        className={cn(
          "flex items-center justify-between w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",
          containerClassname,
          errorMessage && "border-rose-600",
          value && "bg-slate-200 rounded-lg",
          disabled &&
            "bg-slate-200 border border-slate-200 rounded-lg cursor-not-allowed",
        )}
      >
        <input
          ref={inputRef}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full bg-slate-50 text-sm focus:outline-none",
            value && "bg-slate-200",
            disabled &&
              "bg-slate-200 border-slate-200 text-black placeholder:text-unactive cursor-not-allowed",
            errorMessage && "border-rose-500",
          )}
        />

        <div className="ml-2 flex items-center">
          {resetFilter && (
            <X
              size={18}
              className="text-gray-400 hover:cursor-pointer"
              onClick={onResetFilter}
            />
          )}
          {open ? (
            <ChevronUp size={18} className="text-gray-400" />
          ) : (
            <ChevronDown
              size={18}
              className={`ml-2 text-slate-400 transition-transform duration-200 pointer-events-none ${
                open ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute z-10 mt-1 w-full border rounded bg-white shadow max-h-60 overflow-auto">
          {filtered.length === 0 && (
            <div className="p-2 text-sm text-gray-400">No data found</div>
          )}

          {filtered.map((item, index) => (
            <Button
              key={String(item.value)}
              type="button"
              disabled={item.disabled}
              onClick={() => select(item.value)}
              className={`w-full text-left px-3 py-2 text-sm ${
                item.disabled
                  ? "text-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-100"
              } ${index === activeIndex ? "bg-gray-100" : ""}`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      )}
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

export default InputSelect;
