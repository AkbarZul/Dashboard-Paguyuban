import Card from "@/components/Card";
import useDashboard from "./useDashboard";
import { ArrowRight } from "lucide-react";
import Table from "@/components/Table";

const Dashboard = () => {
  const { cardData, transactions, columnConfig } = useDashboard();
  return (
    <div className="flex-1 p-4 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Ringkasan Kas Paguyuban Kav BRI
        </h1>
        <p className="text-slate-500 mt-1">
          Pantau kondisi keuangan dan partisipasi iuran warga bulan ini.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            summary={item.summary}
          />
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden  mb-8">
        <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-slate-800">
            Transaksi Terakhir
          </h2>
          <a
            href="#"
            className="text-brand-600 hover:text-brand-700 text-sm font-medium flex items-center"
          >
            Lihat Semua <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        <div className="p-4 md:p-0">
          <Table columns={columnConfig} data={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
