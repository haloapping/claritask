import { Task } from "@/types/task";
import { useParams } from "react-router";

type TaskRouteProps = {
  tasks: Array<Task>;
};

export function TaskRoute({ tasks }: TaskRouteProps) {
  const { id } = useParams();
  if (!id) return null;

  const task: Task | undefined = tasks.find((task) => task.id === Number(id));

  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Task Details</h2>
      <div className="text-gray-700">
        <p>
          <span className="font-semibold">Title: </span> {task?.title}
        </p>
        <p>
          <span className="font-semibold">Description:</span>{" "}
          {task?.description}
        </p>
        <p>
          <span className="font-semibold">Status: </span>
          <span className="font-medium text-blue-500">{task?.status}</span>
        </p>
        <p>
          <span className="font-semibold">Priority: </span>
          <span className="font-medium text-red-500">{task?.priority}</span>
        </p>
      </div>
    </div>
  );
}
