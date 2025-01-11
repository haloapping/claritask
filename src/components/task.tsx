import { type Task } from "../types/task";

export function TaskList() {
  const tasks: Array<Task> = [
    {
      title: "Jadwal Pagi",
      description: "Bagi-bagi Susu Ultramilk (Gratis)",
      status: "In-Progress",
      priority: "High",
    },
    {
      title: "Jadwal Siang",
      description: "Makan Siang (Gratis)",
      status: "Todo",
      priority: "Low",
    },
    {
      title: "Jadwal Malam",
      description: "Rapat Persiapan Jan Ethes jadi Presiden",
      status: "Done",
      priority: "Medium",
    },
  ];

  return (
    <>
      <TaskTable tasks={tasks} />
    </>
  );
}

function TaskTable({ tasks }: { tasks: Array<Task> }) {
  const statusMap: Map<string, string> = new Map([
    ["In-Progress", "/status/in-progress.svg"],
    ["Todo", "/status/todo.svg"],
    ["Done", "/status/done.svg"],
  ]);

  const priorityMap: Map<string, string> = new Map([
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
        </tr>
      </thead>

      <tbody className="border-collapse border border-slate-400">
        {tasks.map((task, index) => (
          <tr className="hover:bg-slate-50" key={index}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td className="text-left">
              <img src={statusMap.get(task.status)} width={20} alt="status" />
              {task.status}
            </td>
            <td className="text-left">
              <img
                src={priorityMap.get(task.priority)}
                width={20}
                alt="priority"
              />
              {task.priority}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
