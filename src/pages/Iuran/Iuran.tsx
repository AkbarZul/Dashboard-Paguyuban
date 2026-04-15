import { Download, PlusCircle } from "lucide-react";
import useIuran from "./useIuran";
import Header from "@/components/Header";
import TableFilterLayout from "@/features/TableFilterLayout";
import SearchBar from "@/components/SearchBar";
import { filterListMonth, filterListStatus } from "@/constans/masterdata";
import Table from "@/components/Table";
import TransactionHeader from "@/features/TransactionHeader/TransactionHeader";
import Button from "@/components/Button";
import InputSelect from "@/components/Inputs/InputSelect";
import { usePopup } from "@/contexts/PopupContext";
import TambahIuran from "./TambahIuran";
import useTambahIuran from "./TambahIuran/useTambahIuran";

const Iuran = () => {
  const { dataPemasukan, columnConfig } = useIuran();
  const tambahIuranProps = useTambahIuran()
  const { open } = usePopup()
  return (
    <div className="flex-1 p-4 lg:p-8">
      {/* Header Halaman */}
      <Header
        title="Data Pemasukan Iuran"
        subTitle="Kelola dan verifikasi pembayaran iuran wajib warga bulan ini."
        actionButton={
          <div>
            <div className="flex items-center gap-3">
              <Button className="bg-white border border-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Unduh Laporan</span>
              </Button>
              <Button onClick={open} className="bg-slate-300 hover:bg-slate-300 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <PlusCircle className="w-5 h-5" />
                Catat Pembayaran
              </Button>
            </div>
          </div>
        }
      />

      {/* Filter Bar */}
      <TableFilterLayout>
        <SearchBar placeholder="Cari nama atau blok..." />
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <InputSelect
            list={filterListMonth}
            layoutClassname="w-[150px]"
            placeholder="Pilih Bulan..."
          />

          <InputSelect
            list={filterListStatus}
            layoutClassname="w-[150px]"
            placeholder="Pilih Status..."
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
      <TambahIuran {...tambahIuranProps} />
    </div>
  );
};

export default Iuran;
