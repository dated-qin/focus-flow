import { ThemeProvider } from "./contexts/ThemeContext";
import { AppSettingsProvider } from "./contexts/AppSettingsContext";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <AppSettingsProvider>
        <AppRoutes />
      </AppSettingsProvider>
    </ThemeProvider>
  );
}

export default App;
