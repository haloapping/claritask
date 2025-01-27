import { Task } from "@/types/task";

export const initialTasks: Array<Task> = [
  {
    id: 1,
    title: "Jadwal Pagi",
    description: "Bagi-bagi Susu Ultramilk (Gratis)",
    status: "In-Progress",
    priority: "High",
    createdAt: new Date().toLocaleString(),
    updatedAt: null,
  },
  {
    id: 2,
    title: "Jadwal Siang",
    description: "Makan Siang (Gratis)",
    status: "Todo",
    priority: "Low",
    createdAt: new Date().toLocaleString(),
    updatedAt: null,
  },
  {
    id: 3,
    title: "Jadwal Malam",
    description: "Rapat Persiapan Jan Ethes jadi Presiden",
    status: "Done",
    priority: "Medium",
    createdAt: new Date().toLocaleString(),
    updatedAt: null,
  },
];
