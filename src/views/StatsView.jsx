function StatsView() {
  return (
    <main className="page">
      <header className="page-header">
        <h1 className="page-title">Stats</h1>
        <p className="page-subtitle">Track completion and focus consistency over time.</p>
      </header>

      <section className="panel-grid">
        <article className="panel-card">
          <p className="panel-card__label">Completed Today</p>
          <p className="panel-card__value">0</p>
        </article>
        <article className="panel-card">
          <p className="panel-card__label">Active Tasks</p>
          <p className="panel-card__value">0</p>
        </article>
        <article className="panel-card">
          <p className="panel-card__label">Weekly Streak</p>
          <p className="panel-card__value">0 days</p>
        </article>
      </section>

      <section className="panel">
        <h2 className="panel__title">Upcoming</h2>
        <p className="panel__hint">Chart and trend details will appear here after focus and task history is added.</p>
      </section>
    </main>
  );
}

export default StatsView;
