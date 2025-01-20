import { TaskTable } from "./components/task-table";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

export function App() {
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
          <Avatar>
            <AvatarImage src="/user-avatar.jpg" alt="avatar" />
            <AvatarFallback>FU</AvatarFallback>
          </Avatar>

          <p>FafaFufu</p>
        </section>
      </header>

      <main className="m-auto w-3/5">
        <TaskTable />
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
