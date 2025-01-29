import { Header } from "@/components/layout/header";
import { TaskTable } from "@/components/tasks/task-table";
import { initialTasks } from "@/data/initial-tasks";
import { Task } from "@/types/task";
import { useState } from "react";

export function IndexRoute() {
  const [tasks, setTasks] = useState<Array<Task>>(initialTasks);

  // TODO: Centralize features
  // function addTasks(formData) {
  //   setTasks([]);
  // }

  return (
    <div className="flex-1">
      <main className="m-auto w-3/5">
        <Header username="Fufufafa" tasks={tasks} setTasks={setTasks} />
        <TaskTable tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}
