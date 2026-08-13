import Dashboard from "./components/Dashboard";
import { StudentProvider } from "./context/studentContext";

function App() {
  return (
    <StudentProvider>
      <Dashboard />
    </StudentProvider>
  );
}

export default App;