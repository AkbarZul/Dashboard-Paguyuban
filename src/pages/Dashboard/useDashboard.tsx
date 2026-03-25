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

  return {
    cardData,
  };
};

export default useDashboard;
