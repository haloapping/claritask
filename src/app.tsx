import { initialTasks } from "@/data/initial-tasks";
import { Task } from "@/types/task";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { IndexRoute } from "./routes";
import { AboutRoute } from "./routes/about";
import { LayoutRoute } from "./routes/layout";
import { NotFoundRoute } from "./routes/not-found";
import { TaskRoute } from "./routes/task";

export function App() {
  // TODO: Centralize features
  // function addTasks(formData) {
  //   setTasks([]);
  // }

  const [tasks, setTasks] = useState<Array<Task>>(initialTasks);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutRoute />}>
            <Route
              path="/"
              element={<IndexRoute tasks={tasks} setTasks={setTasks} />}
            />
            <Route path="/about" element={<AboutRoute />} />
            <Route path="/tasks/:id" element={<TaskRoute tasks={tasks} />} />
            <Route path="/*" element={<NotFoundRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
