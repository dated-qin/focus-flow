import { useState } from "react";
import { formatDateLabel, getTodayDateString } from "../../lib/date";

function TaskItem({ task, onToggleTask, onDeleteTask, onUpdateTask }) {
  const [draftTitle, setDraftTitle] = useState(task.title);
  const [draftDueDate, setDraftDueDate] = useState(task.dueDate ?? "");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const isOverdue = Boolean(task.dueDate && !task.done && task.dueDate < getTodayDateString());

  const startEditing = () => {
    setDraftTitle(task.title);
    setDraftDueDate(task.dueDate ?? "");
    setError("");
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setDraftTitle(task.title);
    setDraftDueDate(task.dueDate ?? "");
    setError("");
    setIsEditing(false);
  };

  const saveEditing = () => {
    const message = onUpdateTask?.(task.id, { title: draftTitle, dueDate: draftDueDate }) ?? null;
    if (message) {
      setError(message);
      return;
    }

    setError("");
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveEditing();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      cancelEditing();
    }
  };

  return (
    <li className="task-item">
      <article className="task-item__content">
        <label>
          <input type="checkbox" checked={task.done} onChange={() => onToggleTask(task.id)} />
          {isEditing ? (
            <div className="task-item__editor">
              <input
                type="text"
                value={draftTitle}
                onChange={(event) => {
                  if (error) setError("");
                  setDraftTitle(event.target.value);
                }}
                onKeyDown={handleKeyDown}
                aria-label="Edit task title"
                autoFocus
              />
              <input
                type="date"
                value={draftDueDate}
                onChange={(event) => {
                  if (error) setError("");
                  setDraftDueDate(event.target.value);
                }}
                aria-label="Edit task due date"
              />
            </div>
          ) : (
            <div className="task-item__text">
              <span className={task.done ? "task-item__title task-item__title--done" : "task-item__title"}>
                {task.title}
              </span>
              {task.dueDate ? (
                <span className={isOverdue ? "task-item__due task-item__due--overdue" : "task-item__due"}>
                  {isOverdue ? "Overdue" : "Due"} {formatDateLabel(task.dueDate)}
                </span>
              ) : null}
            </div>
          )}
        </label>
        <div className="task-item__actions">
          {isEditing ? (
            <>
              <button type="button" onClick={saveEditing}>
                Save
              </button>
              <button type="button" onClick={cancelEditing}>
                Cancel
              </button>
            </>
          ) : (
            <button type="button" onClick={startEditing}>
              Edit
            </button>
          )}
          <button type="button" onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </div>
      </article>
      {error ? <p className="task-item__error">{error}</p> : null}
    </li>
  );
}

export default TaskItem;
