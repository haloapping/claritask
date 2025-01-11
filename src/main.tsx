import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import logo from "../public/logo.svg";
import userAvatar from "../public/user-avatar.jpg";
import { App } from "./app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header className="mx-auto mb-5 mt-10 flex w-3/5 justify-between">
      <section className="flex items-center justify-between gap-1">
        <a href="">
          <img src={logo} alt="logo" width={30} />
        </a>
        <a href="">
          <h1>KlarinTask</h1>
        </a>
      </section>

      <section className="flex items-center justify-between gap-1">
        <img
          className="borde w-7 rounded-full"
          src={userAvatar}
          alt="user avatar"
        />
        <p>FafaFufu</p>
      </section>
    </header>

    <main className="m-auto w-3/5">
      <App />
    </main>

    <footer className="m-auto mt-4 w-3/5">
      <p className="text-center">
        @klarintask by{" "}
        <a
          className="font-medium hover:underline"
          href="https://haloapping.com"
        >
          haloapping
        </a>
      </p>
    </footer>
  </StrictMode>,
);
