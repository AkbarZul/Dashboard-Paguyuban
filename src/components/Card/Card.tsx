import { CardProps } from "./types";

const Card = ({ title, value, icon, summary }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
        </div>

        {icon}
      </div>

      {summary && <div className="mt-4">{summary}</div>}
    </div>
  );
};

export default Card;
