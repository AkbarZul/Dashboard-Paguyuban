import cn from "@/helpers/cn";
import { Search } from "lucide-react";
import { SearchBarProps } from "./types";
import InputText from "../Inputs/InputText";

const SearchBar = ({
  placeholder,
  iconClassName,
  value,
  onChange,
}: Partial<SearchBarProps>) => {
  return (
    <InputText
      type="text"
      placeholder={placeholder}
      Icon={<Search className={cn("text-slate-400 w-5 h-5", iconClassName)} />}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
