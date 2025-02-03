import { Header } from "@/components/layout/header";
import { TaskTable } from "@/components/tasks/task-table";
import { loadTasks } from "@/storage/local-storage";
import { Task } from "@/types/task";
import { useState } from "react";
import { useSearchParams } from "react-router";

export function IndexRoute() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const [tasks, setTasks] = useState<Array<Task>>(() => {
    return loadTasks();
  });

  const filteredTasks: Array<Task> = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(keyword.toLowerCase()) ||
      task.description.toLowerCase().includes(keyword.toLowerCase()) ||
      task.status.toLowerCase().includes(keyword.toLowerCase()) ||
      task.priority.toLowerCase().includes(keyword.toLowerCase()),
  );

  const tasksToRender = keyword ? filteredTasks : tasks;

  return (
    <div className="flex w-full flex-1 justify-center">
      <main className="w-full max-w-4xl">
        <Header username="Fufufafa" tasks={tasksToRender} setTasks={setTasks} />
        <TaskTable tasks={tasksToRender} setTasks={setTasks} />
      </main>
    </div>
  );
}
