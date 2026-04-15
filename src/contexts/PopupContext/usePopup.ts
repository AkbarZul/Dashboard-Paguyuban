import { useContext } from "react";
import ModalContext from "./popupContext";

const usePopup = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("usePopup must be used within ModalProvider");
  return context;
};

export default usePopup
