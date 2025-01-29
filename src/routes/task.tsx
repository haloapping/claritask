import { useParams } from "react-router";

export function TaskRoute() {
  const { id } = useParams();
  if (!id) return null;

  // TODO: Logic to get task details by ID

  return (
    <div>
      <h1>Task Details</h1>
      <p>Task ID: {id}</p>
    </div>
  );
}
