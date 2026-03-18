import { useEffect, useRef, useState } from "react";
import FocusCard from "../components/focus/FocusCard";
import TimerControls from "../components/focus/TimerControls";
import TimerDisplay from "../components/focus/TimerDisplay";
import { useAppSettings } from "../contexts/AppSettingsContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { zhCN } from "../i18n/zh-CN";
import usePomodoro from "../hooks/usePomodoro";
import { getQuote } from "../services/quoteService";

function FocusView() {
  const { workMinutes, breakMinutes } = useAppSettings();
  const { mode, isRunning, secondsLeft, completedCycles, start, pause, reset, skip } = usePomodoro(
    workMinutes,
    breakMinutes
  );
  const [quote, setQuote] = useState(zhCN.focus.fallbackQuote);
  const [, setFocusSessions] = useLocalStorage("focus_sessions", []);
  const lastCompletedRef = useRef(completedCycles);

  useEffect(() => {
    if (completedCycles <= lastCompletedRef.current) return;

    const delta = completedCycles - lastCompletedRef.current;
    const nextSessions = Array.from({ length: delta }, () => Date.now());

    setFocusSessions((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      const merged = [...safePrev, ...nextSessions];
      return merged.slice(-3000);
    });

    lastCompletedRef.current = completedCycles;
  }, [completedCycles, setFocusSessions]);

  useEffect(() => {
    let isMounted = true;

    getQuote().then((result) => {
      if (!isMounted) return;
      setQuote(result);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="page">
      <header className="page-header">
        <h1 className="page-title">{zhCN.focus.title}</h1>
        <p className="page-subtitle">{zhCN.focus.subtitle}</p>
      </header>

      <section className="panel focus-layout">
        <TimerDisplay mode={mode} secondsLeft={secondsLeft} />
        <TimerControls isRunning={isRunning} onStart={start} onPause={pause} onReset={reset} onSkip={skip} />
      </section>

      <FocusCard
        workMinutes={workMinutes}
        breakMinutes={breakMinutes}
        completedCycles={completedCycles}
        quote={quote}
      />
    </main>
  );
}

export default FocusView;
