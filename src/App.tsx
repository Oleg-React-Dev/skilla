import { QueryClient, QueryClientProvider } from "react-query";
import { TablePage } from "./pages/TablePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-w-full min-h-screen px-48 py-16 bg-center bg-cover bg-mainBackground">
        <TablePage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
