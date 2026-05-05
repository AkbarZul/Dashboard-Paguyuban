import {
  MAPPING_METODE_PEMBAYARAN,
  MAPPING_PENGELUARAN_KATEGORI,
  MAPPING_STATUS_TRANSAKSI,
  MAPPING_STATUS_WARGA,
  STATUS_TRANSAKSI,
  STATUS_WARGA,
} from "@/constans/masterdata";

export const TRANSAKSI_STATUS_COLORS = {
  [STATUS_TRANSAKSI.LUNAS]:
    "bg-emerald-100 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-200",
  [STATUS_TRANSAKSI.MENUNGGU_VERIFIKASI]:
    "bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full border border-amber-200",
  [STATUS_TRANSAKSI.MENUNGGAK]:
    "bg-rose-100 text-rose-700 text-xs font-medium px-2.5 py-1 rounded-full border border-rose-200",
};

export const WARGA_STATUS_COLORS = {
  [STATUS_WARGA.WARGA_TETAP]:
    "bg-emerald-100 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-200",
  [STATUS_WARGA.WARGA_KONTRAK]:
    "bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full border border-amber-200",
};

export const renderStatusBadge = (status) => {
  return (
    <span className={TRANSAKSI_STATUS_COLORS[status]}>
      {MAPPING_STATUS_TRANSAKSI[status]}
    </span>
  );
};

export const renderStatusBadgeWarga = (status) => {
  return (
    <span className={WARGA_STATUS_COLORS[status]}>
      {MAPPING_STATUS_WARGA[status]}
    </span>
  );
};

export const renderMetodePembayaran = (metode) => {
  return (
    <span className="text-slate-700">
      {MAPPING_METODE_PEMBAYARAN[metode] ?? "-"}
    </span>
  );
};

export const renderPengeluaranKategori = (kategori) => {
  return (
    <span className="text-slate-700">
      {MAPPING_PENGELUARAN_KATEGORI[kategori] ?? "-"}
    </span>
  );
};
