import { SidebarProvider } from "@/contexts/SidebarContext";
import Routing from "./routing";

function App() {
  return (
    <SidebarProvider>
      <Routing />
    </SidebarProvider>
  );
}

export default App;
