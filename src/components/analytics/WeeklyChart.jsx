function WeeklyChart({ data }) {
  const maxCount = Math.max(1, ...data.map((item) => item.count));

  return (
    <section className="weekly-chart">
      {data.map((item) => {
        const widthPercent = Math.round((item.count / maxCount) * 100);

        return (
          <article key={item.dateKey} className="weekly-chart__row">
            <p className={item.isToday ? "weekly-chart__date weekly-chart__date--today" : "weekly-chart__date"}>
              {item.label}
            </p>
            <div className="weekly-chart__bar-wrap" aria-hidden="true">
              <div className="weekly-chart__bar" style={{ width: `${widthPercent}%` }} />
            </div>
            <p className="weekly-chart__count">{item.count}</p>
          </article>
        );
      })}
    </section>
  );
}

export default WeeklyChart;
