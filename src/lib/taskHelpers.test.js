import { describe, expect, it } from "vitest";
import {
  MAX_TASK_TITLE_LENGTH,
  createTask,
  isValidTaskDueDate,
  isValidTaskTitle,
  normalizeTaskTitle
} from "./taskHelpers";

describe("taskHelpers", () => {
  it("normalizes task title by trimming and collapsing spaces", () => {
    expect(normalizeTaskTitle("   learn   react   hooks  ")).toBe("learn react hooks");
  });

  it("validates title length", () => {
    expect(isValidTaskTitle("")).toBe(false);
    expect(isValidTaskTitle("a".repeat(MAX_TASK_TITLE_LENGTH))).toBe(true);
    expect(isValidTaskTitle("a".repeat(MAX_TASK_TITLE_LENGTH + 1))).toBe(false);
  });

  it("creates task with due date and default fields", () => {
    const task = createTask({ title: "Study", dueDate: "2026-03-18" });

    expect(task.title).toBe("Study");
    expect(task.dueDate).toBe("2026-03-18");
    expect(task.done).toBe(false);
    expect(task.id).toBeTypeOf("string");
    expect(task.createdAt).toBeTypeOf("number");
    expect(task.updatedAt).toBeTypeOf("number");
    expect(isValidTaskDueDate(task.dueDate)).toBe(true);
  });
});
