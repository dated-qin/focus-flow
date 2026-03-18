import { zhCN } from "../../i18n/zh-CN";

function FocusCard({ workMinutes, breakMinutes, completedCycles, quote }) {
  return (
    <section className="focus-card">
      <p className="focus-card__item">
        {zhCN.focus.card.work}：{workMinutes} {zhCN.focus.unitMinute}
      </p>
      <p className="focus-card__item">
        {zhCN.focus.card.break}：{breakMinutes} {zhCN.focus.unitMinute}
      </p>
      <p className="focus-card__item">
        {zhCN.focus.card.cycles}：{completedCycles}
      </p>
      <p className="focus-card__quote">"{quote}"</p>
    </section>
  );
}

export default FocusCard;
