import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Select from "@/components/Select";
import { filterListMonth, filterListYear } from "@/constans/masterdata";
import TableFilterLayout from "@/features/TableFilterLayout";
import {
  CalendarDays,
  FileSpreadsheet,
  MinusCircle,
  PlusCircle,
  Printer,
} from "lucide-react";
import useLaporanKeuangan from "./useLaporanKeuangan";
import SummaryCard from "../../features/SummaryCard/SummaryCard";
import { ContentProps, FooterProps } from "./types";

const LaporanKeuangan = () => {
  const { cardData, pemasukanData, pengeluaranData } = useLaporanKeuangan();
  return (
    <div className="flex-1 p-4 lg:p-8">
      <Header
        title="Laporan Keuangan"
        subTitle="Rekapitulasi pemasukan dan pengeluaran kas Paguyuban Kav BRI."
        actionButton={
          <div>
            <div className="flex items-center gap-3">
              <Button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Cetak PDF</span>
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <FileSpreadsheet className="w-5 h-5" />
                <span className="hidden sm:inline">Export Excel</span>
              </Button>
            </div>
          </div>
        }
      />

      <TableFilterLayout>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <CalendarDays className="text-slate-400 w-5 h-5" />
          <span className="text-sm font-medium text-slate-700">
            Periode Laporan:
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <Select
            layoutClassname="border border-slate-200 bg-slate-50 rounded-lg text-sm text-slate-700 py-2 px-3 outline-none cursor-pointer focus:border-brand-500"
            list={filterListMonth}
          />
          <Select
            layoutClassname="border border-slate-200 bg-slate-50 rounded-lg text-sm text-slate-700 py-2 px-3 outline-none cursor-pointer focus:border-brand-500"
            list={filterListYear}
          />
          <Button className="bg-slate-800 hover:bg-slate-200 text-white hover:text-slate-900 text-sm font-medium py-2 px-4 rounded-lg transition-colors">
            Tampilkan
          </Button>
        </div>
      </TableFilterLayout>

      {/* Report Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            layoutClassname={`${card.bg} ${card.border} rounded-xl`}
            summary={
              <div>
                <p className={`text-sm font-medium mb-1 ${card.text.label}`}>
                  {card.title}
                </p>
                <h3 className={`text-2xl font-bold ${card.text.value}`}>
                  {card.value}
                </h3>
              </div>
            }
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SummaryCard
          title="Pemasukan"
          icon={<PlusCircle className="w-5 h-5 text-emerald-500" />}
          content={<Content data={pemasukanData} />}
          footer={
            <Footer
              title="Pemasukan"
              total="Rp 4.200.000"
              totalColor="text-emerald-600"
            />
          }
        />

        <SummaryCard
          title="Pengeluaran"
          icon={<MinusCircle className="w-5 h-5 text-rose-500" />}
          content={<Content data={pengeluaranData} />}
          footer={
            <Footer
              title="Pengeluaran"
              total="Rp 3.500.000"
              totalColor="text-rose-600"
            />
          }
        />
      </div>

      {/* Saldo Akhir */}
      <Card
        layoutClassname="bg-slate-800 rounded-xl text-white shadow-lg mb-8"
        summary={
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-slate-300">
                Saldo Akhir Bulan Ini
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Total akumulasi kas RT hingga periode Oktober 2023
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-right">
              <div className="text-3xl font-bold text-brand-400">
                Rp 16.150.000
              </div>
              <p className="text-sm text-slate-400 mt-1">
                (Bulan lalu: Rp 15.450.000)
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default LaporanKeuangan;

export const Content = ({ data }: ContentProps) => {
  return (
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
  );
};

export const Footer = ({ title, total, totalColor }: FooterProps) => {
  return (
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
  );
};
