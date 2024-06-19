import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
import useContextState from "../hooks/useContextState";

function NoProjectSelected() {
  const { startAddProject } = useContextState();

  return (
    <div className="flex flex-col items-center mt-24">
      <img
        src={noProjectImage}
        className="w-16 h-16 object-contain mx-auto"
        alt="No Project Selected"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mt-2">
        Please select a project or start with a new one.
      </p>
      <Button onClick={startAddProject}>Create New Project</Button>
    </div>
  );
}

export default NoProjectSelected;
