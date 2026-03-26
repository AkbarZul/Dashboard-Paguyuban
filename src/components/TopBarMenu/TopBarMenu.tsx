import { TopBarMenuProps } from "./types";
import { Menu } from "lucide-react";
import Button from "@/components/Button";

const TopBarMenu = ({ onOpenMenu }: TopBarMenuProps) => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4">
      <span className="text-slate-900 font-bold text-md tracking-wide">
        Paguyuban Kav BRI
      </span>

      <Button className="md:hidden" onClick={onOpenMenu}>
        <Menu className="w-6 h-6" />
      </Button>
    </header>
  );
};

export default TopBarMenu;
