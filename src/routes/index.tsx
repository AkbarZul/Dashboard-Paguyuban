import Dashboard from "@/pages/Dashboard";
import Iuran from "@/pages/Iuran";
import * as PATH from "@/constans/routePaths";

export const routes = [
  {
    path: PATH.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: PATH.IURAN,
    element: <Iuran />,
  },
];
