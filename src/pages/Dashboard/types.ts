export type Transaction = {
  id: number;
  date: string;
  name: string;
  initials: string;
  block: string;
  category: string;
  amount: string;
  type: "in" | "out";
  status: "Lunas" | "Menunggu Verifikasi" | "Selesai";
};
