import Button from "@/components/Button";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Select from "@/components/Select";
import { filterListMonth, filterListStatus } from "@/constans/masterdata";
import TableFilterLayout from "@/features/TableFilterLayout";
import { Download, Filter, MinusCircle } from "lucide-react";
import usePengeluaranKas from "./usePengeluaranKas";
import TransactionHeader from "@/features/TransactionHeader/TransactionHeader";
import Table from "@/components/Table";

const PengeluaranKas = () => {
  const { dataPengeluaran, columnConfig } = usePengeluaranKas();
  return (
    <div className="flex-1 p-4 lg:p-8">
      <Header
        title="Catatan Pengeluaran Kas"
        subTitle="Pantau dan kelola seluruh pengeluaran dana operasional Paguyuban Kav BRI."
        actionButton={
          <div>
            <div className="flex items-center gap-3">
              <Button className="bg-white border border-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Unduh Laporan</span>
              </Button>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <MinusCircle className="w-5 h-5" />
                Catat Pengeluaran
              </Button>
            </div>
          </div>
        }
      />
      {/* Filter Bar */}
      <TableFilterLayout>
        <SearchBar placeholder="Cari keterangan..." />
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
          <Table columns={columnConfig} data={dataPengeluaran} />
        </div>
      </div>
    </div>
  );
};

export default PengeluaranKas;
