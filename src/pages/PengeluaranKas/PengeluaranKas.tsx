import Button from "@/components/Button";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { pengeluaranKategori } from "@/constans/masterdata";
import TableFilterLayout from "@/features/TableFilterLayout";
import { Download, MinusCircle } from "lucide-react";
import usePengeluaranKas from "./usePengeluaranKas";
import TransactionHeader from "@/features/TransactionHeader/TransactionHeader";
import Table from "@/components/Table";
import InputSelect from "@/components/Inputs/InputSelect";
import { usePopup } from "@/contexts/PopupContext";
import useTambahPengeluaran from "./TambahPengeluaran/useTambahPengeluaran";
import TambahPengeluaran from "./TambahPengeluaran";

const PengeluaranKas = () => {
  const {
    dataPengeluaran,
    columnConfig,
    tablePaginationProps,
    values,
    resetFilters,
    handleChange,
    handleDownload,
  } = usePengeluaranKas();
  const tambahPengeluaranProps = useTambahPengeluaran();
  const { open } = usePopup();
  return (
    <div className="flex-1 p-4 lg:p-8">
      <Header
        title="Catatan Pengeluaran Kas"
        subTitle="Pantau dan kelola seluruh pengeluaran dana operasional Paguyuban Kav BRI."
        actionButton={
          <div>
            <div className="flex items-center gap-3">
              <Button
                className="bg-white border border-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Unduh Laporan</span>
              </Button>
              <Button
                onClick={open}
                className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
              >
                <MinusCircle className="w-5 h-5" />
                Catat Pengeluaran
              </Button>
            </div>
          </div>
        }
      />
      {/* Filter Bar */}
      <TableFilterLayout>
        <SearchBar
          placeholder="Cari penerima"
          value={values.search}
          onChange={(e) => {
            handleChange("search", e.target.value, { debounce: true });
          }}
        />
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <InputSelect
            list={pengeluaranKategori}
            value={values.category}
            onChange={(value) => {
              handleChange("category", value);
            }}
            resetFilter={values.category > 0}
            onResetFilter={resetFilters}
            layoutClassname="w-[250px]"
            placeholder="Pilih Kategori..."
          />
        </div>
      </TableFilterLayout>
      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <TransactionHeader />
        <div className="p-4 md:p-0">
          <Table
            columns={columnConfig}
            data={dataPengeluaran}
            tablePaginationProps={{
              totalPages: tablePaginationProps.totalPages,
              totalRows: tablePaginationProps.totalRows,
            }}
          />
        </div>
      </div>
      <TambahPengeluaran {...tambahPengeluaranProps} />
    </div>
  );
};

export default PengeluaranKas;
