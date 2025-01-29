import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { LayoutRoute } from "@/routes/layout";
import { AboutRoute } from "@/routes/about";
import { IndexRoute } from "@/routes";
import { NotFoundRoute } from "@/routes/not-found";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRoute />}>
          <Route path="/" element={<IndexRoute />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/*" element={<NotFoundRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
