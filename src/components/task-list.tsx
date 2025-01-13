import { loadTasks } from "../storage/local-storage";
import { type Task } from "../types/task";
import { TaskTable } from "./task-table";

export function TaskList() {
  const tasks: Array<Task> = loadTasks();

  if (tasks.length == 0) {
    return <h1 className="text-center text-xl">Yeah! You're not have task.</h1>;
  }

  return <TaskTable tasks={tasks} />;
}
