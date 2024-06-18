import { useRef } from "react";
import Input from "./Input";

function NewProject({ onAddProject }) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dueDateInputRef = useRef();

  function handleSave() {
    const { title, description, dueDate } = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      dueDate: dueDateInputRef.current.value,
    };

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    onAddProject({ title, description, dueDate });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          onClick={handleSave}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </menu>
      <div>
        <Input type="text" ref={titleInputRef} label="Title" />
        <Input ref={descriptionInputRef} label="Description" isTextArea />
        <Input type="date" ref={dueDateInputRef} label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;
