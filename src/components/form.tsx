export function TaskForm() {
  return (
    <div className="mx-auto mt-7">
      <form>
        <div className="mb-4 flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            className="rounded-sm border px-2"
            id="title"
            name="title"
            type="text"
            placeholder="Makan Bubur"
            required
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            className="resize-none rounded-sm border px-2"
            id="description"
            name="description"
            placeholder="1 Mangkok Bubur Gak Pake Kecap"
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
            <option value="-" defaultChecked></option>
            <option value="Todo">
              <img src="/status/todo.svg" alt="todo icon" /> Todo
            </option>
            <option value="In-Progress">
              <img src="/status/in-progress.svg" alt="in-progress icon" />
              In-Progress
            </option>
            <option value="Done">
              <img src="/status/done.svg" alt="done icon" />
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
            <option value="-" defaultChecked></option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </form>
    </div>
  );
}
