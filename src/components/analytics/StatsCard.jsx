function StatsCard({ label, value }) {
  return (
    <article className="panel-card">
      <p className="panel-card__label">{label}</p>
      <p className="panel-card__value">{value}</p>
    </article>
  );
}

export default StatsCard;
