// import { randomUUIDv7 } from "bun";
import { useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { TaskTable } from "./components/task-table";
import { Task } from "./types/task";

export function App() {
  const initialTasks: Array<Task> = [
    {
      id: 1,
      title: "Jadwal Pagi",
      description: "Bagi-bagi Susu Ultramilk (Gratis)",
      status: "In-Progress",
      priority: "High",
      createdAt: new Date().toLocaleString(),
      updatedAt: null,
    },
    {
      id: 2,
      title: "Jadwal Siang",
      description: "Makan Siang (Gratis)",
      status: "Todo",
      priority: "Low",
      createdAt: new Date().toLocaleString(),
      updatedAt: null,
    },
    {
      id: 3,
      title: "Jadwal Malam",
      description: "Rapat Persiapan Jan Ethes jadi Presiden",
      status: "Done",
      priority: "Medium",
      createdAt: new Date().toLocaleString(),
      updatedAt: null,
    },
  ];

  const [tasks, setTasks] = useState<Array<Task>>(initialTasks);

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
