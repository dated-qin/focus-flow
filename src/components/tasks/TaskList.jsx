import TaskItem from "./TaskItem";
import { zhCN } from "../../i18n/zh-CN";

function TaskList({ tasks, onToggleTask, onDeleteTask, onUpdateTask }) {
  if (tasks.length === 0) {
    return <section className="task-list__empty">{zhCN.tasks.empty}</section>;
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
