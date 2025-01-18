import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Task } from "../types/task";
import { DeleteTaskModal, EditTaskModal } from "./modal";

export function TaskTable({ tasks }: { tasks: Array<Task> }) {
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
    <>
      {tasks.length <= 0 && <p>No tasks yet</p>}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-center">Description</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Priority</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>
                <img
                  src={statusIconMap.get(task.status)}
                  alt="status icon"
                  width={15}
                />
                {task.status}
              </TableCell>
              <TableCell>
                <div>
                  <img
                    src={priorityIconMap.get(task.priority)}
                    alt="priority icon"
                    width={15}
                  />
                  {task.priority}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center gap-2">
                  <EditTaskModal />
                  <DeleteTaskModal />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
