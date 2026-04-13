import Dashboard from "@/pages/Dashboard";
import Iuran from "@/pages/Iuran";
import * as PATH from "@/constans/routePaths";
import DataWarga from "@/pages/DataWarga";
import PengeluaranKas from "@/pages/PengeluaranKas";
import LaporanKeuangan from "@/pages/LaporanKeuangan";
import Pengaturan from "@/pages/Pengaturan";
import Login from "@/pages/Login";
import Registrasi from "@/pages/Registrasi";
import { Navigate } from "react-router";

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
  {
    path: PATH.PENGATURAN,
    element: <Pengaturan />,
  },
];

export const publicRoutes = [
  {
    path: "/",
    element: <Navigate to={PATH.LOGIN} replace />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.REGISTRASI,
    element: <Registrasi />,
  },
];
