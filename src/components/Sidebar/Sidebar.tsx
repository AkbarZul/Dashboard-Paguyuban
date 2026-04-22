import { Home, LogOut, X } from "lucide-react";

import { allMenus } from "@/constans/sidebar";
import { DefaultUser } from "@/assets/png";
import { SidebarProps } from "./types";
import Button from "@/components/Button";
import { useNavigate } from "react-router";
import { LOGIN } from "@/constans/routePaths";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { toastError } from "../Toast";
import { useUser } from "@/hooks/useUser";
import Loading from "../Loading";

const Sidebar = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeMenu,
  setActiveMenu,
}: SidebarProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { data: user, isLoading } = useUser();
  const handleClick = (key: string, path: string) => {
    setActiveMenu(key);
    navigate(path);
  };

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await logout();
    },
    onSuccess: () => {
      navigate(LOGIN);
    },
    onError: (err) => {
      toastError(
        "Logout gagal",
        err?.message || "Terjadi kesalahan",
        "top-right",
      );
    },
  });
  const handleLogout = () => {
    logoutMutation.mutate();
  };
  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-slate-300 flex flex-col transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <div className="flex items-center">
            <Home className="text-brand-500 text-2xl mr-3 w-6 h-6" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-md tracking-wide">
                Paguyuban
              </span>
              <span className="text-white font-bold text-sm text-right">
                Kav BRI
              </span>
            </div>
          </div>
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <div className="flex-1 py-6 space-y-4 overflow-y-auto">
            {allMenus.map((group) => (
              <div key={group.label}>
                <p className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  {group.label}
                </p>

                <div className="space-y-1">
                  {group.children?.map((item) => {
                    const isActive = activeMenu === item.key;

                    return (
                      <Button
                        key={item.key}
                        onClick={() => handleClick(item.key, item.path)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                          isActive
                            ? "bg-slate-800 text-white"
                            : "hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex md:hidden items-center gap-3">
            {user?.email ? (
              <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-semibold">
                {user.email.charAt(0).toUpperCase()}
              </div>
            ) : (
              <img
                src={DefaultUser}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-slate-700"
              />
            )}

            <div className="flex-1 min-w-0">
              {isLoading ? (
                <Loading size="sm" />
              ) : (
                <>
                  <p className="text-sm font-medium text-white truncate">
                    {user?.email ?? "Guest"}
                  </p>
                  <p className="text-xs text-slate-400 truncate">Admin</p>
                </>
              )}
            </div>

            <Button
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
              className="text-slate-400 hover:text-rose-400"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>

          <div className="hidden md:flex items-end">

            <Button
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
              className="flex items-center gap-2 text-white hover:text-rose-500"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">
                {logoutMutation.isPending ? "Signing out..." : "Sign out"}
              </span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
