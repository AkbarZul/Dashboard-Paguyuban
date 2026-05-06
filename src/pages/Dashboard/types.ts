export type Transaction = {
  id: number;
  date: string;
  name: string;
  initials: string;
  block: string;
  category: string;
  nominal: number;
  type: "in" | "out";
  status: "Lunas" | "Menunggu Verifikasi" | "Selesai" | "Menunggak";
  rawDate: Date
};
