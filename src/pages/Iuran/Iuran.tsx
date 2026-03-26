import { Download, Filter, PlusCircle } from "lucide-react";
import useIuran from "./useIuran";
import Header from "@/components/Header";
import TableFilterLayout from "@/features/TableFilterLayout";
import SearchBar from "@/components/SearchBar";
import Select from "@/components/Select";
import { filterListMonth, filterListStatus } from "@/constans/masterdata";
import Table from "@/components/Table";
import TransactionHeader from "@/features/TransactionHeader/TransactionHeader";

const Iuran = () => {
  const { dataPemasukan, columnConfig } = useIuran();
  return (
    <div className="flex-1 p-4 lg:p-8">
      {/* Header Halaman */}
      <Header
        title="Data Pemasukan Iuran"
        subTitle="Kelola dan verifikasi pembayaran iuran wajib warga bulan ini."
        actionButton={
          <div>
            <div className="flex items-center gap-3">
              <button className="bg-white border border-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Unduh Laporan</span>
              </button>
              <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <PlusCircle className="w-5 h-5" />
                Catat Pembayaran
              </button>
            </div>
          </div>
        }
      />

      {/* Filter Bar */}
      <TableFilterLayout>
        <SearchBar placeholder="Cari nama atau blok..." />
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center border border-slate-200 bg-slate-50 rounded-lg overflow-hidden">
            <span className="px-3 text-slate-500 text-sm border-r border-slate-200 bg-slate-100 flex items-center">
              <Filter className="w-4 h-4 mr-1" /> Filter
            </span>
            <Select
              layoutClassname="bg-transparent text-sm text-slate-700 py-2 px-3 outline-none focus:ring-0 cursor-pointer"
              list={filterListMonth}
            />
          </div>
          <Select
            layoutClassname="border border-slate-200 bg-slate-50 rounded-lg text-sm text-slate-700 py-2 px-3 outline-none cursor-pointer focus:border-brand-500"
            list={filterListStatus}
          />
        </div>
      </TableFilterLayout>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <TransactionHeader />
        <div className="p-4 md:p-0">
          <Table columns={columnConfig} data={dataPemasukan} />
        </div>
      </div>
    </div>
  );
};

export default Iuran;
