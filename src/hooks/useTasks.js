import useLocalStorage from "./useLocalStorage";

export default function useTasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  return { tasks, setTasks };
}
