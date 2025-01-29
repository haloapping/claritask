import { AddTaskDialog } from "@/components/tasks/add-task";
import { Task } from "@/types/task";

type HeaderProps = {
  username: string;
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function Header({ username, tasks, setTasks }: HeaderProps) {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <section>
          <h1 className="text-2xl">Hello {username}!</h1>
          <p className="text-sm">Here's a list of your tasks for this month!</p>
        </section>

        <section>
          <AddTaskDialog tasks={tasks} setTasks={setTasks} />
        </section>
      </div>
    </div>
  );
}
