interface SummaryItem {
  label: string;
  value: string;
}

interface SummaryCardProps {
  title: string;
  icon: React.ReactNode;
  data: SummaryItem[];
  total: string;
  totalColor: string;
}
const SummaryCard = ({
  title,
  icon,
  data,
  total,
  totalColor,
}: SummaryCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 bg-slate-50 shrink-0">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          {icon} {title}
        </h3>
      </div>

      {/* Content */}
      <div className="flex-1">
        <table className="w-full text-sm text-left text-slate-600">
          <tbody className="divide-y divide-slate-100">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="px-6 py-4">{item.label}</td>
                <td className="px-6 py-4 font-medium text-right text-slate-800">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-slate-50 border-t border-slate-200 mt-auto">
        <table className="w-full text-sm font-bold">
          <tbody>
            <tr>
              <td className="px-6 py-4 text-slate-800">Total {title}</td>
              <td className={`px-6 py-4 text-right ${totalColor}`}>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryCard;
