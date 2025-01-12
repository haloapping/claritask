import { Header } from "./components/header";
import { NewTaskForm } from "./components/form";
import { TaskList } from "./components/task";

export function App() {
  return (
    <>
      <Header username="FafaFufu" />
      <TaskList />
      <NewTaskForm />
    </>
  );
}
