import { RouterProvider, createBrowserRouter } from "react-router";
import { routes } from "./routes";
import { DashboardLayout } from "@/components/Layout";
const Routing = () => {
  const router = createBrowserRouter([
    {
      element: <DashboardLayout />,
      children: routes.map((route) => ({
        path: route.path,
        element: route.element,
      })),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
