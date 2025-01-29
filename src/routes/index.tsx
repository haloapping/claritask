import { Header } from "@/components/layout/header";
import { TaskTable } from "@/components/tasks/task-table";
import { Task } from "@/types/task";

type IndexRouteProps = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
};

export function IndexRoute({ tasks, setTasks }: IndexRouteProps) {
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
