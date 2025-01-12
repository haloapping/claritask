import { loadTasks } from "../storage/local-storage";
import { type Task } from "../types/task";

export function TaskList() {
  const tasks: Array<Task> = loadTasks();

  if (tasks.length == 0) {
    return <h1 className="text-center text-xl">Yeah! You're not have task.</h1>;
  }

  return <TaskTable tasks={tasks} />;
}

function TaskTable({ tasks }: { tasks: Array<Task> }) {
  const statusIconMap: Map<string, string> = new Map([
    ["Todo", "/status/todo.svg"],
    ["In-Progress", "/status/in-progress.svg"],
    ["Done", "/status/done.svg"],
  ]);

  const priorityIconMap: Map<string, string> = new Map([
    ["Low", "/priority/low.svg"],
    ["Medium", "/priority/medium.svg"],
    ["High", "/priority/high.svg"],
  ]);

  return (
    <table className="w-full table-auto border-collapse border border-slate-400 p-4">
      <thead className="border-collapse border border-slate-400 font-bold">
        <tr className="border-collapse border border-slate-400">
          <td>Title</td>
          <td>Description</td>
          <td>Status</td>
          <td>Priority</td>
          <td>Edit</td>
        </tr>
      </thead>

      <tbody className="border-collapse border border-slate-400">
        {tasks.map((task, index) => (
          <tr className="hover:bg-slate-50" key={index}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
              <img
                className="float-start mr-1"
                src={statusIconMap.get(task.status)}
                width={20}
                alt="status"
              />
              {task.status}
            </td>
            <td>
              <img
                className="float-start mr-1"
                src={priorityIconMap.get(task.priority)}
                width={20}
                alt="priority"
              />
              {task.priority}
            </td>
            <td>
              <button>
                <img src="/edit.svg" alt="edit icon" width={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
