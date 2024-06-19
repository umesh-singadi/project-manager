import Tasks from "./Tasks";
import useContextState from "../hooks/useContextState";

function SelectedProject() {
  const { deleteProject, state } = useContextState();

  const selectedProject = state.projects.find(
    (project) => project.id === state.selectedProjectId
  );

  const date = new Date(selectedProject.dueDate).toLocaleDateString("en-In", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-2 mb-4 border-b border-stone-300">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={deleteProject}>
            Delete
          </button>
        </div>
        <p className="text-stone-400 mb-4">{date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProject.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}

export default SelectedProject;
