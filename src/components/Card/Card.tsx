import cn from "@/helpers/cn";
import { CardProps } from "./types";

const Card = ({ title, value, icon, summary, layoutClassname }: Partial<CardProps>) => {
  return (
    <div className={cn("rounded-2xl p-6 border shadow-sm h-full", layoutClassname)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
        </div>

        {icon}
      </div>

      {summary && <div className={cn(title && 'mt-4')}>{summary}</div>}
    </div>
  );
};

export default Card;
