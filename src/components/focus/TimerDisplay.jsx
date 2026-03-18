import { zhCN } from "../../i18n/zh-CN";

function TimerDisplay({ mode, secondsLeft }) {
  const minutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return (
    <section className="focus-timer">
      <p className="focus-timer__mode">{mode === "work" ? zhCN.focus.modeWork : zhCN.focus.modeBreak}</p>
      <p className="focus-timer__clock">
        {minutes}:{seconds}
      </p>
    </section>
  );
}

export default TimerDisplay;
