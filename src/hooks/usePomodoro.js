import { useState } from "react";

export default function usePomodoro(initialMinutes = 25) {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);
  return { secondsLeft, setSecondsLeft };
}
