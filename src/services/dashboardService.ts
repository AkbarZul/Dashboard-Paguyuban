import { formattedNumberToRp } from "@/helpers/formatter";
import { supabase } from "./supabase";
import { Transaction } from "@/pages/Dashboard/types";

export const getDashboard = async () => {
  const [resPemasukan, resPengeluaran, resWarga] = await Promise.all([
    supabase.from("pemasukan").select("*"),
    supabase.from("pengeluaran").select("*"),
    supabase.from("warga").select("*"),
  ]);

  const pemasukan = resPemasukan.data || [];
  const pengeluaran = resPengeluaran.data || [];
  const warga = resWarga.data || [];

  const findBlok = (data: string) => {
    return warga.find((m) => m.nama === data)?.blok_rumah
  }


  const combined: Transaction[] = [
    ...pemasukan.map((p) => ({
      id: p.id,
      date: p.tanggal_bayar
        ? new Date(p.tanggal_bayar).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "-",
      name: p.nama_warga,
      category: "Iuran Bulanan",
      status: p.status_pembayaran as Transaction["status"],
      block: findBlok(p.nama_warga),
      amount: `+ Rp ${formattedNumberToRp(p.nominal)}`,
      type: "in" as const,
      rawDate: p.tanggal_bayar ? new Date(p.tanggal_bayar) : new Date(p.created_at),
      initials: p.nama_warga.charAt(0).toUpperCase()
    })),
    ...pengeluaran.map((p) => ({
      id: p.id,
      date: p.tanggal
        ? new Date(p.tanggal).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "-",
      name: p.keterangan,
      block: "-",
      category: p.kategori,
      status: "Selesai" as Transaction["status"],
      amount: `- Rp ${formattedNumberToRp(p.nominal)}`,
      type: "out" as const,
      rawDate: new Date(p.tanggal || p.created_at),
      initials: p.keterangan.charAt(0).toUpperCase()
    })),
  ];

  return {
    pemasukan,
    pengeluaran,
    warga,
    combined
  };
};
