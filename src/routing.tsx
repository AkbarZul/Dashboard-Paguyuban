import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router";
import { routes, publicRoutes } from "./routes";
import { DashboardLayout } from "@/components/Layout";
import { useAuth } from "./contexts/AuthContext";
import Loading from "./components/Loading";
const Routing = () => {
  const router = createBrowserRouter([
    ...publicRoutes,
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <DashboardLayout />,
          children: routes.map((route) => ({
            path: route.path,
            element: route.element,
          })),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loading fullScreen />;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
};
