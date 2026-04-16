import { SidebarProvider } from "@/contexts/SidebarContext";
import Routing from "./routing";
import { PopupProvider } from "./contexts/PopupContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <PopupProvider>
          <Routing />
        </PopupProvider>
      </SidebarProvider>
    </QueryClientProvider>
  );
}

export default App;
