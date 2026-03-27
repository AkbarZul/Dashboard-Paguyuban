export interface Pengeluaran {
  id: number;
  date: string;
  description: string;
  category: string;
  recipient: string;
  amount: string;
  proof: "Tersedia" | "Tidak Ada";
};