export interface Pengeluaran {
  id: number;
  tanggal: string;
  keterangan: string;
  kategori: string;
  penerima: string;
  nominal: number;
  proof: "Tersedia" | "Tidak Ada";
};