import { useState } from "react";

function NewTask({ onAddTask }) {
  const [text, setText] = useState("");

  function handleClick() {
    setText("");
    onAddTask(text);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="w-64 py-1 px-2 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-600 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
