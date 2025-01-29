import { HeaderBody } from "@/components/header";
import { TaskTable } from "@/components/task-table";
import { initialTasks } from "@/data/initial-tasks";
import { Task } from "@/types/task";
import { useState } from "react";

export function Index() {
  const [tasks, setTasks] = useState<Array<Task>>(initialTasks);

  // TODO: Centralize features
  // function addTasks(formData) {
  //   setTasks([]);
  // }

  return (
    <div className="flex-1">
      <main className="m-auto w-3/5">
        <HeaderBody username="Fufufafa" tasks={tasks} setTasks={setTasks} />
        <TaskTable tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}
