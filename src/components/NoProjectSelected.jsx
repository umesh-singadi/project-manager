import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="w-2/3 mt-24 text-center ">
      <img
        src={noProjectImg}
        className="w-16 h-16 object-contain mx-auto"
        alt="No project selected"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or start with new one
      </p>
      <Button onClick={onStartAddProject}>Create new project</Button>
    </div>
  );
}

export default NoProjectSelected;
