import { Task } from "../types/task";

export function saveTask(tasks: Array<Task>) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks(): Array<Task> {
  return JSON.parse(localStorage.getItem("tasks") ?? "[]");
}

saveTask([
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
]);
