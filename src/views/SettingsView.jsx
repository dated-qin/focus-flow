import { useEffect, useState } from "react";
import { useAppSettings } from "../contexts/AppSettingsContext";
import { zhCN } from "../i18n/zh-CN";

function SettingsView() {
  const { workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes, resetSettings } = useAppSettings();
  const [draftWorkMinutes, setDraftWorkMinutes] = useState(workMinutes);
  const [draftBreakMinutes, setDraftBreakMinutes] = useState(breakMinutes);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setDraftWorkMinutes(workMinutes);
    setDraftBreakMinutes(breakMinutes);
  }, [workMinutes, breakMinutes]);

  const normalizeMinutes = (value) => {
    if (!Number.isFinite(value)) return 1;
    return Math.min(180, Math.max(1, Math.round(value)));
  };

  const handleSave = () => {
    const normalizedWork = normalizeMinutes(Number(draftWorkMinutes));
    const normalizedBreak = normalizeMinutes(Number(draftBreakMinutes));

    setWorkMinutes(normalizedWork);
    setBreakMinutes(normalizedBreak);
    setMessage(zhCN.settings.messages.saved);
  };

  const handleReset = () => {
    resetSettings();
    setMessage(zhCN.settings.messages.reset);
  };

  return (
    <main className="page">
      <header className="page-header">
        <h1 className="page-title">{zhCN.settings.title}</h1>
        <p className="page-subtitle">{zhCN.settings.subtitle}</p>
      </header>

      <section className="panel settings-panel">
        <h2 className="panel__title">{zhCN.settings.sectionTitle}</h2>
        <div className="settings-row">
          <label className="settings-row__label" htmlFor="work-minutes">
            {zhCN.settings.labels.workMinutes}
          </label>
          <input
            id="work-minutes"
            type="number"
            min="1"
            max="180"
            value={draftWorkMinutes}
            onChange={(event) => {
              setMessage("");
              setDraftWorkMinutes(event.target.value);
            }}
          />
        </div>
        <div className="settings-row">
          <label className="settings-row__label" htmlFor="break-minutes">
            {zhCN.settings.labels.breakMinutes}
          </label>
          <input
            id="break-minutes"
            type="number"
            min="1"
            max="180"
            value={draftBreakMinutes}
            onChange={(event) => {
              setMessage("");
              setDraftBreakMinutes(event.target.value);
            }}
          />
        </div>
        <div className="settings-actions">
          <button type="button" onClick={handleSave}>
            {zhCN.settings.actions.save}
          </button>
          <button type="button" onClick={handleReset}>
            {zhCN.settings.actions.reset}
          </button>
        </div>
        {message ? <p className="settings-message">{message}</p> : null}
      </section>
    </main>
  );
}

export default SettingsView;
