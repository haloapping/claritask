import { Task } from "@/types/task";
import { ChangeEvent } from "react";
import { Input } from "../ui/input";

type SearchTableProps = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function Search({ tasks, setTasks }: SearchTableProps) {
  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const keyword: string = event.target.value;
    const filteredTasks: Array<Task> = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(keyword.toLowerCase()) ||
        task.description.toLowerCase().includes(keyword.toLowerCase()) ||
        task.status.toLowerCase().includes(keyword.toLowerCase()) ||
        task.priority.toLowerCase().includes(keyword.toLowerCase()),
    );

    if (keyword !== "") {
      setTasks(filteredTasks);
    }
  }

  return (
    <div className="mb-4 flex justify-end">
      <Input
        className="w-1/4"
        type="text"
        id="keyword"
        name="keyword"
        placeholder="Search"
        onChange={handleSearch}
      />
    </div>
  );
}
