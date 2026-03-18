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
        Total: {totalCount} | Active: {activeCount} | Done: {doneCount}
      </p>
      <div className="task-filter__tabs">
        <button type="button" onClick={() => onChange("all")} disabled={currentFilter === "all"}>
          All
        </button>
        <button type="button" onClick={() => onChange("active")} disabled={currentFilter === "active"}>
          Active
        </button>
        <button type="button" onClick={() => onChange("done")} disabled={currentFilter === "done"}>
          Done
        </button>
      </div>
      <div className="task-filter__actions">
        <button type="button" onClick={onToggleAll} disabled={!hasTasks}>
          {allDone ? "Mark all active" : "Mark all done"}
        </button>
        <button type="button" onClick={onClearDone} disabled={!hasDoneTasks}>
          Clear done
        </button>
        <button type="button" onClick={onClearAll} disabled={!hasTasks}>
          Clear all
        </button>
      </div>
    </section>
  );
}

export default TaskFilter;
