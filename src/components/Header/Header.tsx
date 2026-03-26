import cn from "@/helpers/cn";
import { HeaderProps } from "./types";

const Header = ({ title, subTitle, className, actionButton }: HeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4",
        className,
      )}
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        <p className="text-slate-500 mt-1">{subTitle}</p>
      </div>
      {actionButton}
    </div>
  );
};

export default Header;
