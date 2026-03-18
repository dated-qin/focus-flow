import { zhCN } from "../../i18n/zh-CN";

function TaskFilter({
  currentFilter,
  onChange,
  totalCount,
  activeCount,
  doneCount,
  hasTasks,
  hasDoneTasks,
  allDone,
  onToggleAll,
  onClearDone,
  onClearAll
}) {
  return (
    <section className="task-filter">
      <p className="task-filter__summary">
        {zhCN.tasks.summary.total}: {totalCount} | {zhCN.tasks.summary.active}: {activeCount} |{" "}
        {zhCN.tasks.summary.done}: {doneCount}
      </p>
      <div className="task-filter__tabs">
        <button type="button" onClick={() => onChange("all")} disabled={currentFilter === "all"}>
          {zhCN.tasks.filters.all}
        </button>
        <button type="button" onClick={() => onChange("active")} disabled={currentFilter === "active"}>
          {zhCN.tasks.filters.active}
        </button>
        <button type="button" onClick={() => onChange("done")} disabled={currentFilter === "done"}>
          {zhCN.tasks.filters.done}
        </button>
      </div>
      <div className="task-filter__actions">
        <button type="button" onClick={onToggleAll} disabled={!hasTasks}>
          {allDone ? zhCN.tasks.actions.markAllActive : zhCN.tasks.actions.markAllDone}
        </button>
        <button type="button" onClick={onClearDone} disabled={!hasDoneTasks}>
          {zhCN.tasks.actions.clearDone}
        </button>
        <button type="button" onClick={onClearAll} disabled={!hasTasks}>
          {zhCN.tasks.actions.clearAll}
        </button>
      </div>
    </section>
  );
}

export default TaskFilter;
