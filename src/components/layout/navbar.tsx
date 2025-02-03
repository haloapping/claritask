import { Link, NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function NavBar() {
  return (
    <header className="mb-5 mt-10 flex w-full max-w-4xl justify-center">
      <div className="mb-5 flex w-full justify-between">
        <section className="flex items-center justify-between gap-1">
          <Link to="/">
            <img src="/logo.svg" alt="logo" width={30} />
          </Link>
          <Link to="/">
            <h1>KlarinTask</h1>
          </Link>
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
    </header>
  );
}
