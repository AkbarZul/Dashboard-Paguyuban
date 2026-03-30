const useLaporanKeuangan = () => {
  const cardData = [
    {
      title: "Total Pemasukan",
      value: "Rp 4.200.000",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      text: {
        label: "text-emerald-800",
        value: "text-emerald-600",
      },
    },
    {
      title: "Total Pengeluaran",
      value: "Rp 3.500.000",
      bg: "bg-rose-50",
      border: "border-rose-100",
      text: {
        label: "text-rose-800",
        value: "text-rose-600",
      },
    },
    {
      title: "Surplus / Defisit",
      value: "+ Rp 700.000",
      bg: "bg-white",
      border: "border-slate-300",
      text: {
        label: "text-brand-800",
        value: "text-brand-600",
      },
    },
  ];

  const pemasukanData = [
    { label: "Iuran Warga Tetap", value: "Rp 3.500.000" },
    { label: "Iuran Warga Kontrak", value: "Rp 400.000" },
    { label: "Donatur / Lain-lain", value: "Rp 300.000" },
  ];

  const pengeluaranData = [
    { label: "Operasional Keamanan", value: "Rp 2.500.000" },
    { label: "Listrik Fasum & Jalan", value: "Rp 350.000" },
    { label: "Kebersihan / Sampah", value: "Rp 500.000" },
    { label: "Pemeliharaan & Konsumsi", value: "Rp 150.000" },
  ];

  return {
    cardData,
    pemasukanData,
    pengeluaranData,
  };
};

export default useLaporanKeuangan;
