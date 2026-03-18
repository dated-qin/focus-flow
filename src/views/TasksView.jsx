import { useMemo, useState } from "react";
import TaskFilter from "../components/tasks/TaskFilter";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import useTasks from "../hooks/useTasks";
import {
  createTask,
  isValidTaskDueDate,
  isValidTaskTitle,
  MAX_TASK_TITLE_LENGTH,
  normalizeTaskDueDate,
  normalizeTaskTitle
} from "../lib/taskHelpers";

function TasksView() {
  const { tasks, setTasks } = useTasks();
  const [filter, setFilter] = useState("all");

  const { totalCount, activeCount, doneCount } = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((task) => task.done).length;

    return {
      totalCount: total,
      activeCount: total - done,
      doneCount: done
    };
  }, [tasks]);

  const visibleTasks = useMemo(() => {
    const filteredTasks = tasks.filter((task) => {
      if (filter === "active") return !task.done;
      if (filter === "done") return task.done;
      return true;
    });

    return filteredTasks.sort((left, right) => {
      if (left.done !== right.done) return left.done ? 1 : -1;
      return right.createdAt - left.createdAt;
    });
  }, [filter, tasks]);

  const hasDuplicateTitle = (title, ignoreTaskId = null) => {
    const normalizedTarget = normalizeTaskTitle(title).toLowerCase();

    return tasks.some((task) => {
      if (ignoreTaskId && task.id === ignoreTaskId) return false;
      return normalizeTaskTitle(task.title).toLowerCase() === normalizedTarget;
    });
  };

  const handleCreateTask = ({ title, dueDate }) => {
    const normalizedTitle = normalizeTaskTitle(title);
    const normalizedDueDate = normalizeTaskDueDate(dueDate);

    if (!isValidTaskTitle(normalizedTitle)) {
      return `Task title must be 1-${MAX_TASK_TITLE_LENGTH} characters.`;
    }

    if (!isValidTaskDueDate(normalizedDueDate)) {
      return "Invalid due date.";
    }

    if (hasDuplicateTitle(normalizedTitle)) {
      return "Task already exists.";
    }

    setTasks((prevTasks) => [...prevTasks, createTask({ title: normalizedTitle, dueDate: normalizedDueDate })]);
    return null;
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done, updatedAt: Date.now() } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleUpdateTask = (taskId, { title, dueDate }) => {
    const normalizedTitle = normalizeTaskTitle(title);
    const normalizedDueDate = normalizeTaskDueDate(dueDate);

    if (!isValidTaskTitle(normalizedTitle)) {
      return `Task title must be 1-${MAX_TASK_TITLE_LENGTH} characters.`;
    }

    if (!isValidTaskDueDate(normalizedDueDate)) {
      return "Invalid due date.";
    }

    if (hasDuplicateTitle(normalizedTitle, taskId)) {
      return "Task already exists.";
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: normalizedTitle, dueDate: normalizedDueDate, updatedAt: Date.now() }
          : task
      )
    );
    return null;
  };

  const handleToggleAll = () => {
    const shouldMarkDone = tasks.some((task) => !task.done);
    const now = Date.now();

    setTasks((prevTasks) => prevTasks.map((task) => ({ ...task, done: shouldMarkDone, updatedAt: now })));
  };

  const handleClearDone = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.done));
  };

  const handleClearAll = () => {
    const confirmed = window.confirm("Delete all tasks? This cannot be undone.");
    if (!confirmed) return;

    setTasks([]);
  };

  return (
    <main className="page">
      <header className="page-header">
        <h1 className="page-title">Tasks</h1>
        <p className="page-subtitle">Capture, schedule, and close your work with less friction.</p>
      </header>
      <TaskForm onCreateTask={handleCreateTask} />
      <TaskFilter
        currentFilter={filter}
        onChange={setFilter}
        totalCount={totalCount}
        activeCount={activeCount}
        doneCount={doneCount}
        hasTasks={totalCount > 0}
        hasDoneTasks={doneCount > 0}
        allDone={activeCount === 0 && totalCount > 0}
        onToggleAll={handleToggleAll}
        onClearDone={handleClearDone}
        onClearAll={handleClearAll}
      />
      <TaskList
        tasks={visibleTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
    </main>
  );
}

export default TasksView;
