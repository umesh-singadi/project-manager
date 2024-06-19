import { useState } from "react";
import useContextState from "../hooks/useContextState";

function NewTask() {
  const [taskText, setTaskText] = useState("");
  const { addTask } = useContextState();

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        type="text"
        className="w-64 py-1 px-2 rounded-sm bg-stone-200"
        placeholder="Enter task"
      />
      <button
        onClick={handleAddTask}
        className="text-stone-600 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
