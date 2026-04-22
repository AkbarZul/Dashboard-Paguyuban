import { TopBarMenuProps } from "./types";
import { Menu } from "lucide-react";
import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import { DefaultUser } from "@/assets/png";
import Loading from "../Loading";

const TopBarMenu = ({ onOpenMenu }: TopBarMenuProps) => {
  const { data: user, isLoading } = useUser();
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4">
      <span className="text-slate-900 font-bold text-md tracking-wide">
        Paguyuban Kav BRI
      </span>

      
        <div className="hidden md:flex items-center gap-3">
          {user?.email ? (
            <div className="w-10 h-10 rounded-full bg-brand-500 border border-slate-500 flex items-center justify-center text-slate-700 font-semibold">
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
              <Loading size={"sm"} />
            ) : (
              <>
                <p className="text-sm font-medium text-slate-800 truncate">
                  {user?.email ?? "Guest"}
                </p>
                <p className="text-xs text-slate-400 truncate">
                  Admin
                </p>
              </>
            )}
          </div>
        </div>

      <Button className="md:hidden" onClick={onOpenMenu}>
        <Menu className="w-6 h-6" />
      </Button>
    </header>
  );
};

export default TopBarMenu;
