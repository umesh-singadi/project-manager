function SelectedProject({ project, onDelete }) {
  const date = new Date(project.dueDate).toLocaleDateString("en-In", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-2 mb-4 border-b border-stone-300">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className="text-stone-400 mb-4">{date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
    </div>
  );
}

export default SelectedProject;
