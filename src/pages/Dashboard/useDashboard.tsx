import { Column } from "@/components/Table/types";
import {
  renderPengeluaranKategori,
  renderStatusBadge,
} from "@/helpers/chipColor";
import { AlertCircle, Home, Landmark, Wallet } from "lucide-react";
import { Transaction } from "./types";
import { getDashboard } from "@/services/dashboardService";
import { useQuery } from "@tanstack/react-query";
import { formattedNumberToRp } from "@/helpers/formatter";
import { STATUS_WARGA } from "@/constans/masterdata";
const useDashboard = () => {
  const { data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboard(),
  });

  const totalPemasukan = (data?.pemasukan ?? []).reduce(
    (sum, item) => sum + Number(item.nominal),
    0,
  );
  const totalPengeluaran = (data?.pengeluaran ?? []).reduce(
    (sum, item) => sum + Number(item.nominal),
    0,
  );
  const saldoKas = totalPemasukan - totalPengeluaran;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  let pemasukanBulanIni = 0;

  const pemasukan = data?.pemasukan ?? [];

  pemasukan.forEach((item) => {
    const date = item.tanggal_bayar ? new Date(item.tanggal_bayar) : null;

    if (
      date &&
      date.getMonth() === currentMonth &&
      date.getFullYear() === currentYear
    ) {
      pemasukanBulanIni += Number(item.nominal);
    }
  });

  const warga = data?.warga ?? [];

  const totalWarga = warga.length;

  const wargaTetap = warga.filter(
    (w) => w.status_hunian === STATUS_WARGA.WARGA_TETAP,
  ).length;

  const wargaKontrak = warga.filter(
    (w) => w.status_hunian === STATUS_WARGA.WARGA_KONTRAK,
  ).length;

  const cardData = [
    {
      title: "Total Saldo Kas",
      value: formattedNumberToRp(saldoKas),
      icon: (
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-600">
          <Landmark className="w-6 h-6" />
        </div>
      ),
    },
    {
      title: "Pemasukan Bulan Ini",
      value: formattedNumberToRp(pemasukanBulanIni),
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
              style={{ width: "75%" }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-2">Target: Rp 5.600.000</p>
        </div>
      ),
    },
    {
      title: "Tunggakan Warga",
      value: "Rp 1.400.000",
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
            {trx.initials}
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
          {trx.amount}
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

  const combined = data?.combined ?? [];

  const datas = combined.sort(
    (a, b) => b.rawDate.getTime() - a.rawDate.getTime(),
  );

  return {
    cardData,
    transactions: datas ?? [],
    columnConfig,
    tablePaginationProps: {
      totalPages: datas.length,
      totalRows: datas.length,
    },
  };
};

export default useDashboard;
