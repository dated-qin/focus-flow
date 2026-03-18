import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import usePomodoro from "./usePomodoro";

describe("usePomodoro", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("switches from work mode to break mode after one work duration", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => usePomodoro(1, 1));

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(60_000);
    });

    expect(result.current.mode).toBe("break");
    expect(result.current.completedCycles).toBe(1);
    expect(result.current.secondsLeft).toBe(60);
  });

  it("resets timer back to work mode and stops running", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => usePomodoro(1, 1));

    act(() => {
      result.current.start();
      vi.advanceTimersByTime(5_000);
      result.current.reset();
    });

    expect(result.current.isRunning).toBe(false);
    expect(result.current.mode).toBe("work");
    expect(result.current.secondsLeft).toBe(60);
  });
});
