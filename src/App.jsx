import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
import useContextState from "./hooks/useContextState";

function App() {
  const { state } = useContextState();

  let content;
  if (state.selectedProjectId === null) {
    content = <NewProject />;
  } else if (state.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else {
    content = <SelectedProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      {content}
    </main>
  );
}

export default App;
