export function Header({ username }: { username: string }) {
  return (
    <div className="mb-5 flex justify-between">
      <section>
        <h1 className="text-2xl">Halo {username}!</h1>
        <p className="text-sm">Here's a list of your tasks for this month!</p>
      </section>

      <section>
        <button className="rounded-md border bg-sky-200 px-4 py-1 hover:bg-sky-300">
          New Task
        </button>
      </section>
    </div>
  );
}
