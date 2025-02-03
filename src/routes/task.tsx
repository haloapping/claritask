import { Task } from "@/types/task";
import { useParams } from "react-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { loadTasks } from "@/storage/local-storage";

dayjs.extend(relativeTime);

export function TaskRoute() {
  const { id } = useParams();
  if (!id) return null;

  const tasks = loadTasks();

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
        <p>
          <span className="font-semibold">Created At: </span>
          <span className="font-medium text-red-500">
            {dayjs(task?.createdAt).fromNow()}
          </span>
        </p>
        <p>
          <span className="font-semibold">Updated At: </span>
          <span className="font-medium text-red-500">
            {dayjs(task?.updatedAt).fromNow() || "null"}
          </span>
        </p>
      </div>
    </div>
  );
}
