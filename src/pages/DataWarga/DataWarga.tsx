import Button from "@/components/Button";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import { filterListBlok } from "@/constans/masterdata";
import TableFilterLayout from "@/features/TableFilterLayout";
import TransactionHeader from "@/features/TransactionHeader/TransactionHeader";
import { Download, PlusCircle } from "lucide-react";
import useDataWarga from "./useDataWarga";
import InputSelect from "@/components/Inputs/InputSelect";

const DataWarga = () => {
  const { dataWarga, columnConfig } = useDataWarga();
  return (
    <div className="flex-1 p-4 lg:p-8">
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
              <Button className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <PlusCircle className="w-5 h-5" />
                Tambah Warga
              </Button>
            </div>
          </div>
        }
      />
      <TableFilterLayout>
        <SearchBar placeholder="Cari nama atau blok..." />
        <InputSelect list={filterListBlok} layoutClassname="w-[250px]" />
      </TableFilterLayout>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <TransactionHeader />
        <div className="p-4 md:p-0">
          <Table columns={columnConfig} data={dataWarga} />
        </div>
      </div>
    </div>
  );
};

export default DataWarga;
