import { Home, LogOut, X } from "lucide-react";

import { allMenus } from "@/constans/sidebar";
import { DefaultUser } from "@/assets/png";
import { SidebarProps } from "./types";
import Button from "@/components/Button";

const Sidebar = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeMenu,
  setActiveMenu,
}: SidebarProps) => {
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
                        onClick={() => setActiveMenu(item.key)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                          isActive
                            ? "bg-brand-600 text-white"
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

        {/* User Profile */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <img
              src={DefaultUser}
              alt="Admin"
              className="w-10 h-10 rounded-full border-2 border-slate-700"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Budi Santoso
              </p>
              <p className="text-xs text-slate-400 truncate">Ketua RT 01</p>
            </div>
            <Button className="text-slate-400 hover:text-rose-400 transition-colors">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
