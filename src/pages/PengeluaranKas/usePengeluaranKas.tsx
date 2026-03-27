import { Column } from "@/components/Table/types";
import { Pengeluaran } from "./types";

const usePengeluaranKas = () => {
  const dataPengeluaran: Pengeluaran[] = [
    {
      id: 301,
      date: "23 Okt 2023",
      description: "Pembayaran Listrik Fasum & Jalan",
      category: "Listrik Fasum",
      recipient: "PLN",
      amount: "Rp 350.000",
      proof: "Tersedia",
    },
    {
      id: 302,
      date: "19 Okt 2023",
      description: "Gaji Bulanan Satpam (Pak Jono)",
      category: "Operasional Keamanan",
      recipient: "Jono",
      amount: "Rp 2.500.000",
      proof: "Tersedia",
    },
    {
      id: 303,
      date: "15 Okt 2023",
      description: "Perbaikan Lampu Taman Blok A",
      category: "Pemeliharaan",
      recipient: "Toko Listrik Jaya",
      amount: "Rp 150.000",
      proof: "Tersedia",
    },
    {
      id: 304,
      date: "10 Okt 2023",
      description: "Konsumsi Rapat Pengurus Paguyuban",
      category: "Konsumsi",
      recipient: "Warung Bu Ani",
      amount: "Rp 200.000",
      proof: "Tidak Ada",
    },
    {
      id: 305,
      date: "02 Okt 2023",
      description: "Iuran Sampah Induk (Kecamatan)",
      category: "Kebersihan",
      recipient: "Dinas Kebersihan",
      amount: "Rp 500.000",
      proof: "Tersedia",
    },
  ];

  const columnConfig: Column<Pengeluaran>[] = [
    {
      header: "Tanggal",
      accessor: "date",
    },
    {
      header: "Deskripsi",
      render: (item) => (
        <div className="font-medium text-slate-800">{item.description}</div>
      ),
    },
    {
      header: "Kategori",
      accessor: "category",
    },
    {
      header: "Penerima",
      accessor: "recipient",
    },
    {
      header: "Nominal",
      render: (item) => (
        <span className="font-medium text-rose-600">{item.amount}</span>
      ),
    },
    {
      header: "Aksi",
      className: "text-center",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
            Detail
          </button>
          <button className="p-1 text-rose-600 hover:bg-rose-50 rounded">
            Hapus
          </button>
        </div>
      ),
    },
  ];
  return {
    dataPengeluaran,
    columnConfig,
  };
};

export default usePengeluaranKas;
