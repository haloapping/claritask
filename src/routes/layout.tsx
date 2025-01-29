import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router";

export function LayoutRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto mb-5 mt-10 w-3/5">
        <Header />
      </header>

      <Outlet />

      <footer className="mx-auto mb-5 mt-10 w-3/5">
        <Footer />
      </footer>
    </div>
  );
}
