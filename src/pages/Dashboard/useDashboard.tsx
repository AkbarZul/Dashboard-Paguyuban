import { Column } from "@/components/Table/types";
import {
  renderPengeluaranKategori,
  renderStatusBadge,
} from "@/helpers/chipColor";
import {
  AlertCircle,
  Home,
  Landmark,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Transaction } from "./types";
import { getDashboard, getDashboardSummary } from "@/services/dashboardService";
import { useQuery } from "@tanstack/react-query";
import { formattedNumberToRp } from "@/helpers/formatter";
import { STATUS_WARGA } from "@/constans/masterdata";
import { getWarga } from "@/services/wargaService";
import { DashboardParams } from "@/types/dashboardType";
import { useSearchParams } from "react-router";
import useFilterChange from "@/hooks/useFilterChange";

export const defaultFilters: DashboardParams = {
  page: 1,
  limit: 10,
  search: "",
};

const useDashboard = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  const { values, handleChange, resetFilters, filterParams } = useFilterChange({
    defaultFilters,
  });
  const { data } = useQuery({
    queryKey: ["dashboard", page, filterParams.search],
    queryFn: () =>
      getDashboard({
        ...filterParams,
        page,
      }),
  });

  const { data: summary } = useQuery({
    queryKey: ["dashboard-summary"],
    queryFn: getDashboardSummary,
  });

  const { data: dataWarga } = useQuery({
    queryKey: ["warga"],
    queryFn: () => getWarga({ limit: 100 }),
  });

  const warga = dataWarga?.data ?? [];

  const totalWarga = warga.length;

  const wargaTetap = warga.filter(
    (w) => w.status_hunian === STATUS_WARGA.WARGA_TETAP,
  ).length;

  const wargaKontrak = warga.filter(
    (w) => w.status_hunian === STATUS_WARGA.WARGA_KONTRAK,
  ).length;

  const isUp = summary?.growth >= 0;
  const percentage = Math.abs(summary?.growth || 0).toFixed(1);

  const targetBulanIni = wargaTetap * 150000 + wargaKontrak * 100000;

  const progress =
    targetBulanIni > 0 ? (summary.pemasukanBulanIni / targetBulanIni) * 100 : 0;

  const cardData = [
    {
      title: "Total Saldo Kas",
      value: formattedNumberToRp(summary?.saldoKas),
      icon: (
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-600">
          <Landmark className="w-6 h-6" />
        </div>
      ),
      summary: (
        <div className="flex items-center text-sm">
          <span
            className={`flex items-center font-medium ${
              isUp ? "text-emerald-500" : "text-rose-500"
            }`}
          >
            {isUp ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            {isUp ? "+" : "-"}
            {percentage}%
          </span>
          <span className="text-slate-400 ml-2">dari bulan lalu</span>
        </div>
      ),
    },
    {
      title: "Pemasukan Bulan Ini",
      value: formattedNumberToRp(summary?.pemasukanBulanIni),
      icon: (
        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
          <Wallet className="w-6 h-6" />
        </div>
      ),
      summary: (
        <div>
          <div className="w-full bg-slate-100 rounded-full h-1.5">
            <div
              className="bg-emerald-500 h-1.5 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Target: Rp {formattedNumberToRp(targetBulanIni)}
          </p>
        </div>
      ),
    },
    {
      title: "Tunggakan Warga",
      value: `Rp. ${formattedNumberToRp(summary?.totalMenunggak)}`,
      icon: (
        <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-600">
          <AlertCircle className="w-6 h-6" />
        </div>
      ),
      summary: (
        <div className="flex items-center text-sm">
          <span className="text-slate-500 font-medium">25 KK</span>
          <span className="text-slate-400 ml-1">belum lunas bulan ini</span>
        </div>
      ),
    },
    {
      title: "Total Warga Aktif",
      value: totalWarga,
      icon: (
        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
          <Home className="w-6 h-6" />
        </div>
      ),
      summary: (
        <div className="flex items-center text-sm gap-3">
          <span className="flex items-center text-slate-500">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
            {wargaTetap} Tetap
          </span>
          <span className="flex items-center text-slate-500">
            <div className="w-2 h-2 rounded-full bg-amber-400 mr-1.5" />
            {wargaKontrak} Kontrak
          </span>
        </div>
      ),
    },
  ];

  const columnConfig: Column<Transaction>[] = [
    {
      header: "Tanggal",
      accessor: "date",
    },
    {
      header: "Nama Warga / Keterangan",
      render: (trx) => (
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
              trx.type === "in"
                ? "bg-emerald-100 text-emerald-600"
                : "bg-rose-100 text-rose-600"
            }`}
          >
            {trx.name.charAt(0).toUpperCase()}
          </div>
          {trx.name}
        </div>
      ),
    },
    {
      header: "Blok / No",
      accessor: "block",
    },
    {
      header: "Kategori",
      render: (trx) => (
        <>
          {trx.category === "Iuran Bulanan"
            ? "Iuran Bulanan"
            : renderPengeluaranKategori(trx.category)}
        </>
      ),
    },
    {
      header: "Nominal",
      render: (trx) => (
        <span
          className={trx.type === "in" ? "text-emerald-600" : "text-rose-600"}
        >
          {formattedNumberToRp(trx.nominal)}
        </span>
      ),
    },
    {
      header: "Status",
      render: (trx) => (
        <>
          {trx.status === "Selesai" ? (
            <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
              Selesai
            </span>
          ) : (
            renderStatusBadge(trx.status)
          )}
        </>
      ),
    },
  ];

  return {
    cardData,
    transactions: data?.data ?? [],
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

export default useDashboard;
