import { useState } from "react";
import Button from "../base/Button";
import Input from "../base/Input";
import { MAX_TASK_TITLE_LENGTH } from "../../lib/taskHelpers";

function TaskForm({ onCreateTask }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = onCreateTask?.({ title, dueDate }) ?? null;

    if (message) {
      setError(message);
      return;
    }

    setError("");
    setTitle("");
    setDueDate("");
  };

  return (
    <section className="task-form">
      <form onSubmit={handleSubmit} className="task-form__row">
        <Input
          value={title}
          onChange={(event) => {
            if (error) setError("");
            setTitle(event.target.value);
          }}
          placeholder="Add a task"
          aria-label="Task title"
          maxLength={MAX_TASK_TITLE_LENGTH}
        />
        <Input
          type="date"
          value={dueDate}
          onChange={(event) => {
            if (error) setError("");
            setDueDate(event.target.value);
          }}
          aria-label="Task due date"
        />
        <Button type="submit">Add</Button>
      </form>
      <p className="task-form__meta">{title.trim().length}/{MAX_TASK_TITLE_LENGTH}</p>
      {error ? <p className="task-form__error">{error}</p> : null}
    </section>
  );
}

export default TaskForm;
