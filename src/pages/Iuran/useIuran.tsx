import { Column } from "@/components/Table/types";
import { Pemasukan } from "./types";
import { renderMetodePembayaran, renderStatusBadge } from "@/helpers/chipColor";
import { CheckCircle2, MoreVertical } from "lucide-react";
import { useSearchParams } from "react-router";
import useFilterChange from "@/hooks/useFilterChange";
import { useQuery } from "@tanstack/react-query";
import { getIuran } from "@/services/iuranService";
import { STATUS_TRANSAKSI } from "@/constans/masterdata";
import { IuranWargaParams } from "@/types/iuranType";

export const defaultFilters: IuranWargaParams = {
  page: 1,
  limit: 10,
  search: "",
  month: "",
  status: 0,
};

const useIuran = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  const { values, handleChange, resetFilters, filterParams, setFilterParams } =
    useFilterChange({
      defaultFilters,
    });

  const { data } = useQuery({
    queryKey: [
      "iuran",
      page,
      filterParams.search,
      filterParams.status,
      filterParams.month,
    ],
    queryFn: () =>
      getIuran({
        ...filterParams,
        page,
      }),
  });

  console.log(data?.data);
  

  const columnConfig: Column<Pemasukan>[] = [
    {
      header: "Nama Warga",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-slate-200 text-slate-700">
            {item.nama_warga.charAt(0).toUpperCase()}
          </div>
          {item.nama_warga}
        </div>
      ),
    },
    {
      header: "Blok / No",
      accessor: "blok_rumah",
    },
    {
      header: "Periode Tagihan",
      accessor: "periode_tagihan",
    },
    {
      header: "Nominal",
      render: (item) => (
        <span className="font-medium text-slate-800">{item.nominal}</span>
      ),
    },
    {
      header: "Tgl Bayar",
      accessor: "tanggal_bayar",
    },
    {
      header: "Metode",
      render: (item) => renderMetodePembayaran(item.metode_bayar)
    },
    {
      header: "Status",
      render: (item) => renderStatusBadge(item.status_pembayaran),
    },
    {
      header: "Aksi",
      render: (item) => (
        <div className="flex items-center justify-center gap-2">
          {item.status_pembayaran === STATUS_TRANSAKSI.MENUNGGU_VERIFIKASI && (
            <button
              title="Verifikasi Pembayaran"
              className="p-1 text-emerald-600 hover:bg-emerald-50 rounded transition-colors"
            >
              <CheckCircle2 className="w-5 h-5" />
            </button>
          )}

          <button className="p-1 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return {
    dataPemasukan: data?.data ?? [],
    columnConfig,
    tablePaginationProps: {
      totalPages: data?.totalPages,
      totalRows: data?.total,
    },
    values,
    handleChange,
    resetFilters,
    setFilterParams,
  };
};

export default useIuran;
