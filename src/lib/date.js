export function formatMinutes(minutes) {
  return `${minutes}m`;
}

export function getTodayDateString() {
  return new Date().toISOString().slice(0, 10);
}

export function formatDateLabel(value) {
  if (!value) return "";

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
