import { useMemo } from "react";
import StatsCard from "../components/analytics/StatsCard";
import WeeklyChart from "../components/analytics/WeeklyChart";
import useLocalStorage from "../hooks/useLocalStorage";
import { zhCN } from "../i18n/zh-CN";
import useTasks from "../hooks/useTasks";
import { buildFocusStats } from "../lib/statsHelpers";

function StatsView() {
  const { tasks } = useTasks();
  const [focusSessions] = useLocalStorage("focus_sessions", []);

  const stats = useMemo(() => buildFocusStats({ focusSessions, tasks }), [focusSessions, tasks]);

  return (
    <main className="page">
      <header className="page-header">
        <h1 className="page-title">{zhCN.stats.title}</h1>
        <p className="page-subtitle">{zhCN.stats.subtitle}</p>
      </header>

      <section className="panel-grid">
        <StatsCard label={zhCN.stats.cards.today} value={stats.todayCount} />
        <StatsCard label={zhCN.stats.cards.activeTasks} value={stats.activeTaskCount} />
        <StatsCard label={zhCN.stats.cards.streak} value={zhCN.stats.streakText(stats.streak)} />
      </section>

      <section className="panel">
        <h2 className="panel__title">{zhCN.stats.panel.title}</h2>
        <p className="panel__hint">{zhCN.stats.panel.total(stats.weeklyFocusCount)}</p>
        <WeeklyChart data={stats.weekly} />
      </section>
    </main>
  );
}

export default StatsView;
