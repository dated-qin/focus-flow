import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TasksView from "./TasksView";

describe("TasksView", () => {
  it("creates a task from the form and renders it in the list", () => {
    render(<TasksView />);

    const titleInput = screen.getByLabelText("任务标题");
    const addButton = screen.getByRole("button", { name: "添加任务" });

    fireEvent.change(titleInput, { target: { value: "学习 React" } });
    fireEvent.click(addButton);

    expect(screen.getByText("学习 React")).toBeInTheDocument();
    expect(screen.getByLabelText("任务标题")).toHaveValue("");
  });
});
