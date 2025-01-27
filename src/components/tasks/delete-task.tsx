import { Task } from "@/types/task";
import { Trash2Icon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";

type DeleteTaskDialogProps = {
  id: number | undefined;
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function DeleteTaskDialog({
  id,
  tasks,
  setTasks,
}: DeleteTaskDialogProps) {
  function handleDeleteTask(id: number | undefined) {
    const filterTasks: Array<Task> = tasks.filter((task) => task.id !== id);
    setTasks(filterTasks);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={buttonVariants({
            variant: "destructive",
          })}
        >
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
            className={buttonVariants({
              variant: "destructive",
            })}
            onClick={() => {
              handleDeleteTask(id);
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
