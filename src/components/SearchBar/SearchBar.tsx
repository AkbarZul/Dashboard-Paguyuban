import cn from "@/helpers/cn";
import { Search } from "lucide-react";
import { SearchBarProps } from "./types";

const SearchBar = ({
  placeholder,
  layoutClassName,
  iconClassName,
  className,
}: Partial<SearchBarProps>) => {
  return (
    <div
      className={cn(
        "hidden sm:flex items-center bg-slate-50 rounded-lg px-3 py-2 w-96 border border-slate-200 focus-within:border-brand-500 focus-within:ring-1 focus-within:ring-brand-500 transition-all ml-auto md:ml-0",
        layoutClassName,
      )}
    >
      <Search className={cn("text-slate-400 w-5 h-5", iconClassName)} />
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          "bg-transparent border-none outline-none text-sm ml-2 w-full text-slate-700 placeholder-slate-400",
          className,
        )}
      />
    </div>
  );
};

export default SearchBar;
