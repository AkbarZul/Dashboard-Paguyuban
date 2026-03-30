import Button from "@/components/Button";
import Header from "@/components/Header";
import Select from "@/components/Select";
import { filterListMonth, filterListYear } from "@/constans/masterdata";
import TableFilterLayout from "@/features/TableFilterLayout";
import { CalendarDays, FileSpreadsheet, MinusCircle, PlusCircle, Printer } from "lucide-react";

const LaporanKeuangan = () => {
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
        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
          <p className="text-sm font-medium text-emerald-800 mb-1">Total Pemasukan</p>
          <h3 className="text-2xl font-bold text-emerald-600">Rp 4.200.000</h3>
        </div>
        <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
          <p className="text-sm font-medium text-rose-800 mb-1">Total Pengeluaran</p>
          <h3 className="text-2xl font-bold text-rose-600">Rp 3.500.000</h3>
        </div>
        <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
          <p className="text-sm font-medium text-brand-800 mb-1">Surplus / Defisit</p>
          <h3 className="text-2xl font-bold text-brand-600">+ Rp 700.000</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Pemasukan List */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-4 border-b border-slate-200 bg-slate-50 shrink-0">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-emerald-500" /> Rincian Pemasukan
            </h3>
          </div>
          <div className="p-0 flex-1">
            <table className="w-full text-sm text-left text-slate-600 h-full">
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4">Iuran Warga Tetap</td>
                  <td className="px-6 py-4 font-medium text-right text-slate-800">Rp 3.500.000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4">Iuran Warga Kontrak</td>
                  <td className="px-6 py-4 font-medium text-right text-slate-800">Rp 400.000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4">Donatur / Lain-lain</td>
                  <td className="px-6 py-4 font-medium text-right text-slate-800">Rp 300.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-emerald-50/50 border-t border-slate-200 mt-auto">
            <table className="w-full text-sm font-bold">
              <tbody>
                <tr>
                  <td className="px-6 py-4 text-slate-800">Total Pemasukan</td>
                  <td className="px-6 py-4 text-emerald-600 text-right">Rp 4.200.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pengeluaran List */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-4 border-b border-slate-200 bg-slate-50 shrink-0">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <MinusCircle className="w-5 h-5 text-rose-500" /> Rincian Pengeluaran
            </h3>
          </div>
          <div className="p-0 flex-1">
            <table className="w-full text-sm text-left text-slate-600 h-full">
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4">Operasional Keamanan</td>
                  <td className="px-6 py-4 font-medium text-right text-slate-800">Rp 2.500.000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4">Listrik Fasum & Jalan</td>
                  <td className="px-6 py-4 font-medium text-right text-slate-800">Rp 350.000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4">Kebersihan / Sampah</td>
                  <td className="px-6 py-4 font-medium text-right text-slate-800">Rp 500.000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4">Pemeliharaan & Konsumsi</td>
                  <td className="px-6 py-4 font-medium text-right text-slate-800">Rp 150.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-rose-50/50 border-t border-slate-200 mt-auto">
            <table className="w-full text-sm font-bold">
              <tbody>
                <tr>
                  <td className="px-6 py-4 text-slate-800">Total Pengeluaran</td>
                  <td className="px-6 py-4 text-rose-600 text-right">Rp 3.500.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Saldo Akhir */}
      <div className="bg-slate-800 rounded-xl p-6 text-white flex flex-col sm:flex-row items-center justify-between shadow-lg mb-8">
        <div>
          <h3 className="text-lg font-medium text-slate-300">Saldo Akhir Bulan Ini</h3>
          <p className="text-sm text-slate-400 mt-1">Total akumulasi kas RT hingga periode Oktober 2023</p>
        </div>
        <div className="mt-4 sm:mt-0 text-right">
          <div className="text-3xl font-bold text-brand-400">Rp 16.150.000</div>
          <p className="text-sm text-slate-400 mt-1">(Bulan lalu: Rp 15.450.000)</p>
        </div>
      </div>
    </div>
  );
};

export default LaporanKeuangan;
