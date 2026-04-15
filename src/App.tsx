import { SidebarProvider } from "@/contexts/SidebarContext";
import Routing from "./routing";
import { PopupProvider } from "./contexts/PopupContext";

function App() {
  return (
    <SidebarProvider>
      <PopupProvider>
        <Routing />
      </PopupProvider>
    </SidebarProvider>
  );
}

export default App;
