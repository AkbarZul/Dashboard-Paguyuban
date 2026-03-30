import Dashboard from "@/pages/Dashboard";
import Iuran from "@/pages/Iuran";
import * as PATH from "@/constans/routePaths";
import DataWarga from "@/pages/DataWarga";
import PengeluaranKas from "@/pages/PengeluaranKas";
import LaporanKeuangan from "@/pages/LaporanKeuangan";

export const routes = [
  {
    path: PATH.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: PATH.DATA_WARGA,
    element: <DataWarga />,
  },
  {
    path: PATH.IURAN,
    element: <Iuran />,
  },
  {
    path: PATH.PENGELUARAN_KAS,
    element: <PengeluaranKas />,
  },
    {
    path: PATH.LAPORAN_KEUANGAN,
    element: <LaporanKeuangan />,
  },
];
