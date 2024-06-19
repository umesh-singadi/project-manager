import Button from "./Button";
import useContextState from "../hooks/useContextState";

function ProjectSidebar() {
  const { startAddProject, selectProject, state } = useContextState();
  const { projects, selectedProjectId } = state;

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={startAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            isSelected={project.id === selectedProjectId}
            onSelect={selectProject}
          />
        ))}
      </ul>
    </aside>
  );
}

function ProjectItem({ project, isSelected, onSelect }) {
  const classes = `w-full text-left py-1 px-2 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800
    ${isSelected ? "bg-stone-800 text-stone-200" : "text-stone-400"}`;

  return (
    <li>
      <button className={classes} onClick={() => onSelect(project.id)}>
        {project.title}
      </button>
    </li>
  );
}

export default ProjectSidebar;
