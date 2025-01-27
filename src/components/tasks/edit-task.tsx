import { Task } from "@/types/task";
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

type EditDialogProps = {
  id: number | undefined;
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function EditTaskModal({ id, tasks, setTasks }: EditDialogProps) {
  function handleSubmitEditTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTasks(tasks);
  }

  const [taskFormData, setTaskFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setTaskFormData({
      ...taskFormData,
      [name]: value,
    });
  };

  const taskById: Task | undefined = tasks.find((task) => task.id === id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon /> Edit Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>Make a task today.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmitEditTask} method="post">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={taskById?.title}
                onChange={handleInputChange}
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
                value={taskById?.description}
                // onChange={handleInputChange}
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
              <Select name="status" required value={taskById?.status}>
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
              <Select name="priority" required value={taskById?.priority}>
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
              <Button type="submit">Edit Task</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
