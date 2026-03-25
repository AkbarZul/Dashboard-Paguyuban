import { Menu, PlusCircle, Search } from "lucide-react";
import { HeaderProps } from "./types";
import Button from "@/components/Button";

const Header = ({ onOpenMenu }: HeaderProps) => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4">
      <span className="text-slate-900 font-bold text-md tracking-wide md:hidden">
        Paguyuban Kav BRI
      </span>

      <div className="hidden sm:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-96 border border-slate-200 focus-within:border-brand-500 focus-within:ring-1 focus-within:ring-brand-500 transition-all ml-auto md:ml-0">
        <Search className="text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Cari nama warga, blok, atau transaksi..."
          className="bg-transparent border-none outline-none text-sm ml-2 w-full text-slate-700 placeholder-slate-400"
        />
      </div>

      <div className="hidden sm:flex items-center gap-4 ml-auto">
        <Button className="bg-slate-100 hover:bg-slate-300 text-slate-700 text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
          <PlusCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Catat Pemasukan</span>
        </Button>
      </div>

      <Button className="md:hidden" onClick={onOpenMenu}>
        <Menu className="w-6 h-6" />
      </Button>
    </header>
  );
};

export default Header;
