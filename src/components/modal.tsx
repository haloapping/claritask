import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TaskForm } from "./form";
import { PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Task } from "@/types/task";
import { loadTasks, saveTask } from "@/storage/local-storage";
import { useState } from "react";

export function AddTaskModal() {
  const localStorageTasks: Array<Task> = loadTasks();
  const [tasks, setTasks] = useState<Array<Task>>(localStorageTasks);
  const newTask: Task = {
    id: tasks.length + 1,
    title: "Jadwal Malam",
    description: "Rapat Persiapan Jan Ethes jadi Presiden",
    status: "Done",
    priority: "Medium",
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusIcon /> New Task
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Task</AlertDialogTitle>
          <AlertDialogDescription>
            <TaskForm />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              setTasks([...tasks, newTask]);
              saveTask(tasks);
            }}
          >
            Add
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function EditTaskModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={buttonVariants({ variant: "secondary" })}>
          <PencilIcon /> Edit
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">Edit Task</AlertDialogTitle>
          <AlertDialogDescription>
            <TaskForm />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Edit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function DeleteTaskModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={buttonVariants({ variant: "destructive" })}>
          <Trash2Icon /> Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Are you sure to delete task?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={buttonVariants({ variant: "destructive" })}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
