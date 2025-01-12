import todoIcon from "../../public/status/todo.svg";
import inProgressIcon from "../../public/status/in-progress.svg";
import doneIcon from "../../public/status/done.svg";

export function NewTaskForm() {
  return (
    <div className="mx-auto mt-7 w-4/12">
      <h1 className="mb-4 text-center text-3xl">Create Your Task</h1>
      <form>
        <div className="mb-4 flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            className="rounded-sm border"
            id="title"
            name="title"
            type="text"
            required
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            className="resize-none rounded-sm border"
            id="description"
            name="description"
            rows={4}
            required
          ></textarea>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="status">Status</label>
          <select
            className="rounded-sm border border-gray-200 bg-white"
            id="status"
            name="status"
            required
          >
            <option value="" defaultChecked></option>
            <option value="Todo">
              <img src={todoIcon} alt="todo icon" /> Todo
            </option>
            <option value="In-Progress">
              <img src={inProgressIcon} alt="in-progress icon" />
              In-Progress
            </option>
            <option value="Done">
              <img src={doneIcon} alt="done icon" />
              Done
            </option>
          </select>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="priority">Priority</label>
          <select
            className="rounded-sm border border-gray-200 bg-white"
            id="priority"
            name="priority"
            required
          >
            <option value="" defaultChecked></option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            className="rounded-sm border bg-sky-200 px-4 py-1 hover:bg-sky-300"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
