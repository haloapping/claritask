import { DeleteTaskDialog } from "@/components/tasks/delete-task";
import { EditTaskDialog } from "@/components/tasks/edit-task";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Task } from "@/types/task";
import { ChartNoAxesGanttIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Search } from "./search-tasks";

type TaskTableProps = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function TaskTable({ tasks, setTasks }: TaskTableProps) {
  const statusIconMap: Map<string | undefined, string> = new Map([
    ["Todo", "/status/todo.svg"],
    ["In-Progress", "/status/in-progress.svg"],
    ["Done", "/status/done.svg"],
  ]);

  const priorityIconMap: Map<string | undefined, string> = new Map([
    ["Low", "/priority/low.svg"],
    ["Medium", "/priority/medium.svg"],
    ["High", "/priority/high.svg"],
  ]);

  return (
    <>
      <Search tasks={tasks} setTasks={setTasks} />
      <Table>
        {tasks.length <= 0 ? (
          <TableCaption>No tasks yet.</TableCaption>
        ) : (
          <>
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
                      <Button asChild>
                        <Link to={`/tasks/${task.id}`}>
                          <ChartNoAxesGanttIcon />
                          View
                        </Link>
                      </Button>

                      <EditTaskDialog
                        id={task.id}
                        tasks={tasks}
                        setTasks={setTasks}
                      />

                      <DeleteTaskDialog
                        id={task.id}
                        tasks={tasks}
                        setTasks={setTasks}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </>
  );
}
