import { createContext } from "react";

interface PopupContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const PopupContext = createContext<PopupContextType | null>(null);

export default PopupContext;
