import { useState } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TaskTable } from "@/components/task-table";
import { Task } from "@/types/task";
import { initialTasks } from "@/data/initial-tasks";

export function App() {
  const [tasks, setTasks] = useState<Array<Task>>(initialTasks);

  // TODO: Centralize features
  // function addTasks(formData) {
  //   setTasks([]);
  // }

  return (
    <>
      <header className="mx-auto mb-5 mt-10 w-3/5">
        <Header username={"Fufufafa"} tasks={tasks} setTasks={setTasks} />
      </header>

      <main className="m-auto w-3/5">
        <TaskTable tasks={tasks} setTasks={setTasks} />
      </main>

      <footer className="m-auto mt-4 w-3/5">
        <Footer />
      </footer>
    </>
  );
}
