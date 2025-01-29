import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function NavBar() {
  return (
    <header className="mx-auto mb-5 mt-10 w-3/5">
      <div className="flex flex-col">
        <div className="alig mb-5 flex justify-between">
          <section className="flex items-center justify-between gap-1">
            <a href="">
              <img src="/logo.svg" alt="logo" width={30} />
            </a>
            <a href="/">
              <h1>KlarinTask</h1>
            </a>
          </section>

          <section className="flex items-center justify-between gap-1">
            <nav className="mr-8 flex gap-4">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "hover:underline"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "hover:underline"
                }
              >
                About
              </NavLink>
            </nav>

            <Avatar>
              <AvatarImage src="/user-avatar.jpg" alt="avatar" />
              <AvatarFallback>FU</AvatarFallback>
            </Avatar>

            <p>FafaFufu</p>
          </section>
        </div>
      </div>
    </header>
  );
}
