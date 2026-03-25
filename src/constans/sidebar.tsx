import {
  LayoutDashboard,
  LineChartIcon,
  Receipt,
  Settings,
  Users,
  Wallet,
} from "lucide-react";
import * as PATH from "./routePaths";
interface IMenuItemChildren {
  label: string;
  key: string;
  path?: string;
  icon: React.ReactNode;
}
export interface IMenuItem {
  label: string;
  children: IMenuItemChildren[];
}
export const allMenus: IMenuItem[] = [
  {
    label: "Menu Utama",
    children: [
      {
        key: "dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
        path: PATH.DASHBOARD,
      },
      {
        key: "data",
        label: "Data Warga",
        icon: (
          <Users className="w-5 h-5 text-slate-400 group-hover:text-brand-500 transition-colors" />
        ),
      },
      {
        key: "iuran",
        label: "Pemasukan Iuran",
        icon: (
          <Wallet className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
        ),
        path: PATH.IURAN,
      },
      {
        key: "pengeluaran",
        label: "Pengeluaran Kas",
        icon: (
          <Receipt className="w-5 h-5 text-slate-400 group-hover:text-rose-400 transition-colors" />
        ),
      },
    ],
  },
  {
    label: "lainnya",
    children: [
      {
        key: "laporan",
        label: "Laporan Keuangan",
        icon: (
          <LineChartIcon className="w-5 h-5 text-slate-400 group-hover:text-brand-500 transition-colors" />
        ),
      },
      {
        key: "pengaturan",
        label: "Pengaturan",
        icon: (
          <Settings className="w-5 h-5 text-slate-400 group-hover:text-brand-500 transition-colors" />
        ),
      },
    ],
  },
];
