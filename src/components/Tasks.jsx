import NewTask from "./NewTask";
import useContextState from "../hooks/useContextState";

function Tasks() {
  const { deleteTask, state } = useContextState();
  const { tasks, selectedProjectId } = state;
  const projectTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );

  return (
    <section>
      <h2 className="text-stone-700 mb-4 font-bold text-2xl">
        <NewTask />
      </h2>
      {projectTasks.length ? (
        <ul className="w-full">
          {projectTasks.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">
          This project does not have any tasks.
        </p>
      )}
    </section>
  );
}

function TaskItem({ task, onDelete }) {
  return (
    <li className="flex justify-between items-center border mb-2 p-2">
      <h1>{task.text}</h1>
      <button
        className="text-stone-700 hover:text-red-500"
        onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default Tasks;
