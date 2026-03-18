export const MAX_TASK_TITLE_LENGTH = 80;

export function normalizeTaskTitle(title) {
  return title.replace(/\s+/g, " ").trim();
}

export function isValidTaskTitle(title) {
  return title.length > 0 && title.length <= MAX_TASK_TITLE_LENGTH;
}

export function normalizeTaskDueDate(dueDate) {
  if (!dueDate) return null;
  return dueDate.trim();
}

export function isValidTaskDueDate(dueDate) {
  if (!dueDate) return true;
  return /^\d{4}-\d{2}-\d{2}$/.test(dueDate);
}

export function createTask({ title, dueDate = null }) {
  return {
    id: crypto.randomUUID(),
    title,
    dueDate,
    done: false,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
}
