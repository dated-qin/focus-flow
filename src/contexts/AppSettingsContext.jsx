import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AppSettingsContext = createContext(null);
const DEFAULT_SETTINGS = { workMinutes: 25, breakMinutes: 5 };

export function AppSettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage("app_settings", DEFAULT_SETTINGS);

  const workMinutes = Number.isFinite(settings?.workMinutes) ? settings.workMinutes : DEFAULT_SETTINGS.workMinutes;
  const breakMinutes = Number.isFinite(settings?.breakMinutes) ? settings.breakMinutes : DEFAULT_SETTINGS.breakMinutes;

  const setWorkMinutes = (nextValue) => {
    setSettings((prev) => {
      const safePrev = prev ?? DEFAULT_SETTINGS;
      return { ...safePrev, workMinutes: nextValue };
    });
  };

  const setBreakMinutes = (nextValue) => {
    setSettings((prev) => {
      const safePrev = prev ?? DEFAULT_SETTINGS;
      return { ...safePrev, breakMinutes: nextValue };
    });
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const value = useMemo(
    () => ({ workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes, resetSettings }),
    [workMinutes, breakMinutes]
  );

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>;
}

export function useAppSettings() {
  return useContext(AppSettingsContext);
}
