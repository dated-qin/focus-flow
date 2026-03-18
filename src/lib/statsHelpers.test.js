import { describe, expect, it } from "vitest";
import { buildFocusStats } from "./statsHelpers";

describe("buildFocusStats", () => {
  it("calculates today count, weekly total and streak", () => {
    const tasks = [
      { id: "t1", done: false },
      { id: "t2", done: false },
      { id: "t3", done: true }
    ];

    const focusSessions = [
      "2026-03-18T09:00:00+08:00",
      "2026-03-18T14:00:00+08:00",
      "2026-03-17T10:00:00+08:00",
      "2026-03-16T10:00:00+08:00",
      "2026-03-14T10:00:00+08:00"
    ];

    const stats = buildFocusStats({
      tasks,
      focusSessions,
      todayDateKey: "2026-03-18",
      dateFormatter: (key) => key
    });

    expect(stats.todayCount).toBe(2);
    expect(stats.activeTaskCount).toBe(2);
    expect(stats.weeklyFocusCount).toBe(5);
    expect(stats.streak).toBe(3);
    expect(stats.weekly).toHaveLength(7);
    expect(stats.weekly[6]).toEqual({
      dateKey: "2026-03-18",
      label: "今天",
      count: 2,
      isToday: true
    });
  });

  it("ignores invalid session values", () => {
    const stats = buildFocusStats({
      tasks: [],
      focusSessions: [null, undefined, "not-a-date"],
      todayDateKey: "2026-03-18",
      dateFormatter: (key) => key
    });

    expect(stats.todayCount).toBe(0);
    expect(stats.weeklyFocusCount).toBe(0);
    expect(stats.streak).toBe(0);
  });
});
