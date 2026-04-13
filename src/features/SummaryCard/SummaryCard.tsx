import { SummaryCardProps } from "./types";

const SummaryCard = ({ title, icon, content, footer }: SummaryCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 bg-slate-50 shrink-0">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          {icon} {title}
        </h3>
      </div>

      {/* Content */}

      {content}

      {/* Footer */}
      {footer}
    </div>
  );
};

export default SummaryCard;
