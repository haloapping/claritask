import { Task, formTaskSchema } from "@/types/task";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type AddTaskDialogProps = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function AddTaskDialog({ tasks, setTasks }: AddTaskDialogProps) {
  // TODO: Override close dialog behavior so if there's required input error
  // the dialog wouldn't be closed
  const [open, setOpen] = useState(false);

  function handleSubmitAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const taskFormData = new FormData(event.currentTarget);
    const taskValues = Object.fromEntries(taskFormData);
    const result = formTaskSchema.safeParse(taskValues);

    if (!result.success || !result.data) {
      setOpen(false);
      console.log(result.error);
      return null;
    }

    const newTask: Task = {
      id: tasks.length + 1,
      title: result.data.title,
      description: result.data.description,
      status: result.data.status,
      priority: result.data.priority,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: null,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon /> Add Task
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Make a task today.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmitAddTask} method="post">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Title"
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Description"
                className="col-span-3"
                rows={5}
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select name="status" required>
                <SelectTrigger id="status" className="w-[180px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent id="status">
                  <SelectGroup>
                    <SelectLabel>Select Status</SelectLabel>
                    <SelectItem value="Todo">Todo</SelectItem>
                    <SelectItem value="In-Progress">In-Progress</SelectItem>
                    <SelectItem value="Done">Done</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <Select name="priority" required>
                <SelectTrigger id="priority" className="w-[180px]">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent id="priority">
                  <SelectGroup>
                    <SelectLabel>Select Priority</SelectLabel>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Add Task</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
