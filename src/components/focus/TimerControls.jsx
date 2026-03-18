import { zhCN } from "../../i18n/zh-CN";

function TimerControls({ isRunning, onStart, onPause, onReset, onSkip }) {
  return (
    <section className="focus-controls">
      {isRunning ? (
        <button type="button" onClick={onPause}>
          {zhCN.focus.controls.pause}
        </button>
      ) : (
        <button type="button" onClick={onStart}>
          {zhCN.focus.controls.start}
        </button>
      )}
      <button type="button" onClick={onReset}>
        {zhCN.focus.controls.reset}
      </button>
      <button type="button" onClick={onSkip}>
        {zhCN.focus.controls.skip}
      </button>
    </section>
  );
}

export default TimerControls;
