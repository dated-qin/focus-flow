import { formatDateLabel, getTodayDateString, toLocalDateKey } from "./date";
import { zhCN } from "../i18n/zh-CN";

function shiftDateKey(dateKey, offsetDays) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() + offsetDays);
  return toLocalDateKey(date);
}

export function buildFocusStats({
  focusSessions,
  tasks,
  todayDateKey = getTodayDateString(),
  days = 7,
  dateFormatter = formatDateLabel
}) {
  const safeSessions = Array.isArray(focusSessions) ? focusSessions : [];
  const safeTasks = Array.isArray(tasks) ? tasks : [];

  const countByDate = safeSessions.reduce((acc, value) => {
    const key = toLocalDateKey(value);
    if (!key) return acc;
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  const todayCount = countByDate[todayDateKey] ?? 0;
  const activeTaskCount = safeTasks.filter((task) => !task.done).length;

  const weekly = [];
  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const dateKey = shiftDateKey(todayDateKey, -offset);
    weekly.push({
      dateKey,
      label: offset === 0 ? zhCN.stats.todayLabel : dateFormatter(dateKey),
      count: countByDate[dateKey] ?? 0,
      isToday: offset === 0
    });
  }

  const weeklyFocusCount = weekly.reduce((sum, item) => sum + item.count, 0);

  let streak = 0;
  let cursorKey = todayDateKey;
  while ((countByDate[cursorKey] ?? 0) > 0) {
    streak += 1;
    cursorKey = shiftDateKey(cursorKey, -1);
  }

  return {
    todayCount,
    activeTaskCount,
    streak,
    weekly,
    weeklyFocusCount
  };
}
