import { useSidebar } from "@/contexts/SidebarContext";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router";
import Footer from "../Footer";
import TopBarMenu from "../TopBarMenu";

const DashboardLayout = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, activeMenu, setActiveMenu } =
    useSidebar();
  return (
    <div className="bg-slate-50 text-slate-800 font-sans h-screen overflow-hidden w-full">
      <div className="flex h-screen bg-slate-100">
        <Sidebar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        <div className="flex-1 flex flex-col">
          <TopBarMenu onOpenMenu={() => setIsMobileMenuOpen(true)} />

          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
