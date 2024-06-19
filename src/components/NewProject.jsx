import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import useContextState from "../hooks/useContextState";
import Button from "./Button";

function NewProject() {
  const { cancelAddProject, addProject } = useContextState();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dueDateInputRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const { value: title } = titleInputRef.current;
    const { value: description } = descriptionInputRef.current;
    const { value: dueDate } = dueDateInputRef.current;

    if (!title || !description || !dueDate) {
      modalRef.current.open();
      return;
    }
    addProject({ title, description, dueDate });
  }

  return (
    <>
      <Modal className="p-20" ref={modalRef} buttonCaps="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please enter a value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end gap-4 my-4">
          <button onClick={cancelAddProject}>Cancel</button>
          <Button onClick={handleSave}>Save</Button>
        </menu>
        <div>
          <Input type="text" ref={titleInputRef} label="Title" />
          <Input ref={descriptionInputRef} label="Description" isTextArea />
          <Input type="date" ref={dueDateInputRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
