import cn from "@/helpers/cn";
import { TableFilterLayoutProps } from "./types";

const TableFilterLayout = ({ children, className }: TableFilterLayoutProps) => {
  return (
    <div
      className={cn(
        "bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TableFilterLayout;
