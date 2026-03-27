import { Column } from "@/components/Table/types";
import { Pemasukan } from "./types";
import { renderStatusBadge } from "@/helpers/chipColor";
import { CheckCircle2, MoreVertical } from "lucide-react";

const useIuran = () => {
  const dataPemasukan = [
    {
      id: 101,
      name: "Ahmad Subarjo",
      initials: "AS",
      block: "Blok A / 12",
      period: "Oktober 2023",
      amount: "Rp 50.000",
      date: "24 Okt 2023",
      method: "Transfer Bank",
      status: "Lunas",
    },
    {
      id: 102,
      name: "Siti Maimunah",
      initials: "SM",
      block: "Blok B / 04",
      period: "Oktober 2023",
      amount: "Rp 50.000",
      date: "22 Okt 2023",
      method: "Tunai",
      status: "Menunggu Verifikasi",
    },
    {
      id: 103,
      name: "Budi Santoso",
      initials: "BS",
      block: "Blok A / 01",
      period: "Oktober 2023",
      amount: "Rp 50.000",
      date: "-",
      method: "-",
      status: "Menunggak",
    },
    {
      id: 104,
      name: "Dedi Rahman",
      initials: "DR",
      block: "Blok C / 10",
      period: "Oktober 2023",
      amount: "Rp 50.000",
      date: "15 Okt 2023",
      method: "Transfer Bank",
      status: "Lunas",
    },
    {
      id: 105,
      name: "Eka Putra",
      initials: "EP",
      block: "Blok B / 09",
      period: "Oktober 2023",
      amount: "Rp 50.000",
      date: "-",
      method: "-",
      status: "Menunggak",
    },
    {
      id: 106,
      name: "Fajar Hidayat",
      initials: "FH",
      block: "Blok C / 02",
      period: "Oktober 2023",
      amount: "Rp 50.000",
      date: "12 Okt 2023",
      method: "Tunai",
      status: "Lunas",
    },
  ];

  const columnConfig: Column<Pemasukan>[] = [
    {
      header: "Nama Warga",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-slate-200 text-slate-700">
            {item.initials}
          </div>
          {item.name}
        </div>
      ),
    },
    {
      header: "Blok / No",
      accessor: "block",
    },
    {
      header: "Periode Tagihan",
      accessor: "period",
    },
    {
      header: "Nominal",
      render: (item) => (
        <span className="font-medium text-slate-800">{item.amount}</span>
      ),
    },
    {
      header: "Tgl Bayar",
      accessor: "date",
    },
    {
      header: "Metode",
      accessor: "method",
    },
    {
      header: "Status",
      render: (item) => renderStatusBadge(item.status),
    },
    {
      header: "Aksi",
      render: (item) => (
        <div className="flex items-center justify-center gap-2">
          {item.status === "Menunggu Verifikasi" && (
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
    dataPemasukan,
    columnConfig,
  };
};

export default useIuran;
