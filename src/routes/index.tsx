import { Header } from "@/components/layout/header";
import { TaskTable } from "@/components/tasks/task-table";
import { Task } from "@/types/task";

type IndexRouteProps = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
};

export function IndexRoute({ tasks, setTasks }: IndexRouteProps) {
  return (
    <div className="flex w-full flex-1 justify-center">
      <main className="w-full max-w-4xl">
        <Header username="Fufufafa" tasks={tasks} setTasks={setTasks} />
        <TaskTable tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}
