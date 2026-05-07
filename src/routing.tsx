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
import * as PATH from "@/constans/routePaths";

const Routing = () => {
  const router = createBrowserRouter([
    {
      element: <AuthRoute />,
      children: publicRoutes,
    },
    {
      element: <AuthRoute isProtected />,
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

interface AuthRouteProps {
  isProtected?: boolean;
}

const AuthRoute = ({ isProtected = false }: AuthRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) return <Loading fullScreen />;

  if (isProtected && !user) {
    return <Navigate to={PATH.LOGIN} replace />;
  }

  if (!isProtected && user) {
    return <Navigate to={PATH.DASHBOARD} replace />;
  }

  return <Outlet />;
};
