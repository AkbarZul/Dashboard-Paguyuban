import { createContext } from "react";

export interface ISidebarContext {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
  activeMenu: string;
  setActiveMenu: (val: string) => void;
}

const SidebarContext = createContext<ISidebarContext>({} as ISidebarContext);

export default SidebarContext;
