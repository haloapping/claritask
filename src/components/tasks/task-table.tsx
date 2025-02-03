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
import {
  ChartNoAxesGanttIcon,
  ChevronDownIcon,
  ChevronsDownUpIcon,
  ChevronUpIcon,
  CircleCheckBigIcon,
  CircleDashedIcon,
  CircleIcon,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/tasks/search-tasks";
import { Badge } from "@/components/ui/badge";

type TaskTableProps = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function TaskTable({ tasks, setTasks }: TaskTableProps) {
  const statusIconMap: Map<string | undefined, React.ReactNode> = new Map([
    ["Todo", <CircleDashedIcon className="size-3" />],
    ["In-Progress", <CircleIcon className="size-3" />],
    ["Done", <CircleCheckBigIcon className="size-3" />],
  ]);

  const priorityIconMap: Map<string | undefined, React.ReactNode> = new Map([
    ["Low", <ChevronDownIcon className="size-3" />],
    ["Medium", <ChevronsDownUpIcon className="size-3" />],
    ["High", <ChevronUpIcon className="size-3" />],
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
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {statusIconMap.get(task.status)}
                      <p>{task.status}</p>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {priorityIconMap.get(task.priority)}
                      <p>{task.priority}</p>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
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
