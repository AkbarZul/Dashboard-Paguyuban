export interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
  activeMenu: string;
  setActiveMenu: (val: string) => void;
}
