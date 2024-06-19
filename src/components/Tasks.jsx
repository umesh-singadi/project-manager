import NewTask from "./NewTask";

function Tasks({ onAddTask, tasks }) {
  return (
    <section>
      <h2 className="text-stone-700 mb-4 font-bold text-2xl">
        <NewTask onAddTask={onAddTask} />
      </h2>
      {tasks.length ? (
        <ul className="w-full">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="flex justify-between items-center border mb-2 p-2 ">
                <h1>{task.text}</h1>
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">
          This project does not have any tasks.
        </p>
      )}
    </section>
  );
}

export default Tasks;
