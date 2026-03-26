import { AlertCircle, Home, Landmark, TrendingUp, Wallet } from "lucide-react";
const useDashboard = () => {
  const cardData = [
    {
      title: "Total Saldo Kas",
      value: "Rp 15.450.000",
      icon: (
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-600">
          <Landmark className="w-6 h-6" />
        </div>
      ),
      summary: (
        <div className="flex items-center text-sm">
          <span className="text-emerald-500 flex items-center font-medium">
            <TrendingUp className="w-4 h-4 mr-1" /> +12%
          </span>
          <span className="text-slate-400 ml-2">dari bulan lalu</span>
        </div>
      ),
    },
    {
      title: "Pemasukan Bulan Ini",
      value: "Rp 4.200.000",
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
      value: "112 KK",
      icon: (
        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
          <Home className="w-6 h-6" />
        </div>
      ),
      summary: (
        <div className="flex items-center text-sm gap-3">
          <span className="flex items-center text-slate-500">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
            98 Tetap
          </span>
          <span className="flex items-center text-slate-500">
            <div className="w-2 h-2 rounded-full bg-amber-400 mr-1.5" />
            14 Kontrak
          </span>
        </div>
      ),
    },
  ];

  const transactions = [
  { id: 1, date: '24 Okt 2023', name: 'Ahmad Subarjo', initials: 'AS', block: 'Blok A / 12', category: 'Iuran Bulanan (Okt)', amount: '+ Rp 50.000', type: 'in', status: 'Lunas' },
  { id: 2, date: '23 Okt 2023', name: 'PLN (Fasum)', initials: 'PL', block: '-', category: 'Listrik Fasum', amount: '- Rp 350.000', type: 'out', status: 'Selesai' },
  { id: 3, date: '22 Okt 2023', name: 'Siti Maimunah', initials: 'SM', block: 'Blok B / 04', category: 'Iuran Bulanan (Okt)', amount: '+ Rp 50.000', type: 'in', status: 'Menunggu Verifikasi' },
  { id: 4, date: '20 Okt 2023', name: 'Dedi Rahman', initials: 'DR', block: 'Blok C / 10', category: 'Sumbangan Kematian', amount: '+ Rp 100.000', type: 'in', status: 'Lunas' },
  { id: 5, date: '19 Okt 2023', name: 'Gaji Satpam', initials: 'GA', block: '-', category: 'Operasional Keamanan', amount: '- Rp 2.500.000', type: 'out', status: 'Selesai' },
];

  const renderStatusBadge = (status) => {
    switch(status) {
      case 'Lunas':
        return <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-200">{status}</span>;
      case 'Selesai':
        return <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">{status}</span>;
      case 'Menunggu Verifikasi':
        return <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full border border-amber-200">{status}</span>;
      default:
        return <span>{status}</span>;
    }
  };

  return {
    cardData,
    transactions,
    renderStatusBadge
  };
};

export default useDashboard;
