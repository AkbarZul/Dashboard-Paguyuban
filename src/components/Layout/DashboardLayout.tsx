import { useSidebar } from "@/contexts/SidebarContext/useSidebar";
import Header from "../Header";
import Sidebar from "../Sidebar";

const DashboardLayout = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, activeMenu, setActiveMenu } =
    useSidebar();
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div className="flex-1 flex flex-col">
        <Header onOpenMenu={() => setIsMobileMenuOpen(true)} />

        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
