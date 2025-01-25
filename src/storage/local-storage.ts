import { Task } from "../types/task";

export function saveTask(tasks: Array<Task>) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks(): Array<Task> {
  return JSON.parse(localStorage.getItem("tasks") ?? "[]");
}
