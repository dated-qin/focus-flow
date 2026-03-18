function SettingsView() {
  return (
    <main className="page">
      <header className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Tune your workflow defaults before adding full persistence.</p>
      </header>

      <section className="panel settings-panel">
        <h2 className="panel__title">Pomodoro Defaults</h2>
        <div className="settings-row">
          <label className="settings-row__label" htmlFor="work-minutes">
            Work minutes
          </label>
          <input id="work-minutes" type="number" min="1" defaultValue="25" />
        </div>
        <div className="settings-row">
          <label className="settings-row__label" htmlFor="break-minutes">
            Break minutes
          </label>
          <input id="break-minutes" type="number" min="1" defaultValue="5" />
        </div>
        <div className="settings-actions">
          <button type="button">Save</button>
          <button type="button">Reset</button>
        </div>
      </section>
    </main>
  );
}

export default SettingsView;
