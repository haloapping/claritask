import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Header({ username }: { username: string }) {
  return (
    <div className="mb-5 flex justify-between">
      <section>
        <h1 className="text-2xl">Hello {username}!</h1>
        <p className="text-sm">Here's a list of your tasks for this month!</p>
      </section>

      <section>
        <Button
          onClick={() => {
            console.log("Hello");
          }}
        >
          <PlusIcon /> New Task
        </Button>
      </section>
    </div>
  );
}
