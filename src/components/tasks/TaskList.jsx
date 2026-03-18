import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask, onDeleteTask, onUpdateTask }) {
  if (tasks.length === 0) {
    return <section className="task-list__empty">No tasks found.</section>;
  }

  return (
    <section>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
