import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import { LayoutRoute } from "@/routes/layout";
import { AboutRoute } from "@/routes/about";
import { IndexRoute } from "@/routes";
import { NotFoundRoute } from "@/routes/not-found";
import { TaskRoute } from "@/routes/task";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRoute />}>
          <Route path="/" element={<IndexRoute />} />
          <Route path="/about" element={<AboutRoute />} />
          {/* <Route path="/tasks" element={<TasksRoute />} /> */}
          <Route path="/tasks/:id" element={<TaskRoute />} />
          <Route path="/*" element={<NotFoundRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
