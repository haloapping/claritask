import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Task } from "../types/task";
import { DeleteTaskModal, EditTaskModal } from "./modal";
import { useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

export function TaskTable() {
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

  const initialTasks: Array<Task> = [
    {
      id: 1,
      title: "Jadwal Pagi",
      description: "Bagi-bagi Susu Ultramilk (Gratis)",
      status: "In-Progress",
      priority: "High",
    },
    {
      id: 2,
      title: "Jadwal Siang",
      description: "Makan Siang (Gratis)",
      status: "Todo",
      priority: "Low",
    },
    {
      id: 3,
      title: "Jadwal Malam",
      description: "Rapat Persiapan Jan Ethes jadi Presiden",
      status: "Done",
      priority: "Medium",
    },
  ];

  const [tasks, setTasks] = useState<Array<Task>>(initialTasks);

  const newTask: Task = {
    id: tasks.length + 1,
    title: "Jadwal Malam " + tasks.length,
    description: "Rapat Persiapan Jan Ethes jadi Presiden",
    status: "Done",
    priority: "Medium",
  };

  return (
    <>
      <div className="mb-5 flex justify-between">
        <section>
          <h1 className="text-2xl">Hello Fufufafa!</h1>
          <p className="text-sm">Here's a list of your tasks for this month!</p>
        </section>

        <section>
          <Button
            onClick={() => {
              setTasks([...tasks, newTask]);
            }}
          >
            <PlusIcon /> New Task
          </Button>
        </section>
      </div>

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
                      <EditTaskModal />
                      <DeleteTaskModal />
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
