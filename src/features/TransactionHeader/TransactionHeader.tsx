import { ArrowRight } from "lucide-react";

const TransactionHeader = () => {
  return (
    <div className="lg:hidden p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h2 className="text-lg font-bold text-slate-800">Transaksi Terakhir</h2>
      <a
        href="#"
        className="text-brand-600 hover:text-brand-700 text-sm font-medium flex items-center"
      >
        Lihat Semua
        <ArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  );
};

export default TransactionHeader;
