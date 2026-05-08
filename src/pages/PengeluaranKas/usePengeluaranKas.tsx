import { Column } from "@/components/Table/types";
import { Pengeluaran } from "./types";
import { PengeluaranParams } from "@/types/pengeluaranType";
import { useSearchParams } from "react-router";
import useFilterChange from "@/hooks/useFilterChange";
import { useQuery } from "@tanstack/react-query";
import { getPengeluaran } from "@/services/pengeluaranService";
import { formattedNumberToRp } from "@/helpers/formatter";
import { renderPengeluaranKategori } from "@/helpers/chipColor";
import { formatDate } from "@/helpers/date";

export const defaultFilters: PengeluaranParams = {
  page: 1,
  limit: 10,
  search: "",
  category: 0,
};

const usePengeluaranKas = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  const { values, handleChange, resetFilters, filterParams } = useFilterChange({
    defaultFilters,
  });

  const { data } = useQuery({
    queryKey: ["pengeluaran", page, filterParams.search, filterParams.category],
    queryFn: () =>
      getPengeluaran({
        ...filterParams,
        page,
      }),
  });

  const columnConfig: Column<Pengeluaran>[] = [
    {
      header: "Tanggal",
      render: (item) => formatDate(item.tanggal),
    },
    {
      header: "Deskripsi",
      render: (item) => (
        <div className="font-medium text-slate-800">{item.keterangan}</div>
      ),
    },
    {
      header: "Kategori",
      render: (item) => renderPengeluaranKategori(item.kategori),
    },
    {
      header: "Penerima",
      accessor: "penerima",
    },
    {
      header: "Nominal",
      render: (item) => (
        <span className="font-medium text-rose-600">
          {formattedNumberToRp(item.nominal)}
        </span>
      ),
    },
    {
      header: "Aksi",
      className: "text-center",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
            Detail
          </button>
          <button className="p-1 text-rose-600 hover:bg-rose-50 rounded">
            Hapus
          </button>
        </div>
      ),
    },
  ];
  return {
    dataPengeluaran: data?.data ?? [],
    columnConfig,
    tablePaginationProps: {
      totalPages: data?.totalPages,
      totalRows: data?.total,
    },
    values,
    handleChange,
    resetFilters,
  };
};

export default usePengeluaranKas;
