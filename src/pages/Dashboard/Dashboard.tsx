import Card from "@/components/Card";
import useDashboard from "./useDashboard";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  const { cardData, transactions, renderStatusBadge } = useDashboard();
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
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-4 font-medium">
                  Nama Warga / Keterangan
                </th>
                <th scope="col" className="px-6 py-4 font-medium">
                  Blok / No
                </th>
                <th scope="col" className="px-6 py-4 font-medium">
                  Kategori
                </th>
                <th scope="col" className="px-6 py-4 font-medium">
                  Nominal
                </th>
                <th scope="col" className="px-6 py-4 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((trx) => (
                <tr
                  key={trx.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{trx.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-800 flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${trx.type === "in" ? "bg-brand-100 text-brand-600" : "bg-rose-100 text-rose-600"}`}
                    >
                      {trx.initials}
                    </div>
                    {trx.name}
                  </td>
                  <td className="px-6 py-4 text-slate-500">{trx.block}</td>
                  <td className="px-6 py-4">{trx.category}</td>
                  <td
                    className={`px-6 py-4 font-medium ${trx.type === "in" ? "text-emerald-600" : "text-rose-600"}`}
                  >
                    {trx.amount}
                  </td>
                  <td className="px-6 py-4">{renderStatusBadge(trx.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
