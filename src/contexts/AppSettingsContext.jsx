import { createContext, useContext, useMemo, useState } from "react";

const AppSettingsContext = createContext(null);

export function AppSettingsProvider({ children }) {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const value = useMemo(
    () => ({ workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes }),
    [workMinutes, breakMinutes]
  );

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>;
}

export function useAppSettings() {
  return useContext(AppSettingsContext);
}
