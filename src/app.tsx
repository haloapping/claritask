import { Header } from "./components/header";
import { Task } from "./types/task";
import { loadTasks } from "./storage/local-storage";
import { TaskTable } from "./components/task-table";

export function App() {
  const tasks: Array<Task> = loadTasks();

  return (
    <>
      <header className="mx-auto mb-5 mt-10 flex w-3/5 justify-between">
        <section className="flex items-center justify-between gap-1">
          <a href="">
            <img src="/logo.svg" alt="logo" width={30} />
          </a>
          <a href="/">
            <h1>KlarinTask</h1>
          </a>
        </section>

        <section className="flex items-center justify-between gap-1">
          <img
            className="borde w-7 rounded-full"
            src="/user-avatar.jpg"
            alt="user avatar"
          />
          <p>FafaFufu</p>
        </section>
      </header>

      <main className="m-auto w-3/5">
        <Header username="FafaFufu" />
        <TaskTable tasks={tasks} />
      </main>

      <footer className="m-auto mt-4 w-3/5">
        <p className="text-center">
          @klarintask by{" "}
          <a
            className="font-medium hover:underline"
            href="https://haloapping.com"
          >
            haloapping
          </a>
        </p>
      </footer>
    </>
  );
}
