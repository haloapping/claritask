import { BrowserRouter, Route, Routes } from "react-router";
import { IndexRoute } from "./routes";
import { AboutRoute } from "./routes/about";
import { LayoutRoute } from "./routes/layout";
import { NotFoundRoute } from "./routes/not-found";
import { TaskRoute } from "./routes/task";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRoute />}>
          <Route path="/" element={<IndexRoute />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/tasks/:id" element={<TaskRoute />} />
          <Route path="/*" element={<NotFoundRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
