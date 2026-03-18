import { useEffect, useMemo, useState } from "react";

export default function usePomodoro(workMinutes = 25, breakMinutes = 5) {
  const [mode, setMode] = useState("work");
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(workMinutes * 60);
  const [completedCycles, setCompletedCycles] = useState(0);

  const workDuration = useMemo(() => Math.max(1, Math.round(workMinutes)) * 60, [workMinutes]);
  const breakDuration = useMemo(() => Math.max(1, Math.round(breakMinutes)) * 60, [breakMinutes]);

  useEffect(() => {
    if (isRunning) return;
    setSecondsLeft(mode === "work" ? workDuration : breakDuration);
  }, [mode, isRunning, workDuration, breakDuration]);

  useEffect(() => {
    if (!isRunning) return;

    const timerId = window.setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds > 1) return prevSeconds - 1;

        if (mode === "work") {
          setMode("break");
          setCompletedCycles((prev) => prev + 1);
          return breakDuration;
        }

        setMode("work");
        return workDuration;
      });
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [isRunning, mode, workDuration, breakDuration]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setMode("work");
    setSecondsLeft(workDuration);
  };
  const skip = () => {
    setMode((prevMode) => {
      const nextMode = prevMode === "work" ? "break" : "work";
      setSecondsLeft(nextMode === "work" ? workDuration : breakDuration);
      return nextMode;
    });
  };

  return {
    mode,
    isRunning,
    secondsLeft,
    completedCycles,
    start,
    pause,
    reset,
    skip
  };
}
