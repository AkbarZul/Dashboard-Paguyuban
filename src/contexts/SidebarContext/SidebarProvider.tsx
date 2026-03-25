import { useState } from "react";
import SidebarContext from "./sidebarContext";

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <SidebarContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
