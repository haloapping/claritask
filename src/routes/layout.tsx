import { Outlet } from "react-router";

import { Footer } from "@/components/layout/footer";
import { NavBar } from "@/components/layout/navbar";

export function LayoutRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
