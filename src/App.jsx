import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [state, setState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const startAddProject = () => {
    setState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const cancelAddProject = () => {
    setState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const selectProject = (projectId) => {
    setState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const addProject = (projectData) => {
    const newProject = { ...projectData, id: Math.random() };
    setState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
  };

  const deleteProject = () => {
    setState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  };

  const addTask = (text) => {
    setState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const deleteTask = (taskId) => {
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  const selectedProject = state.projects.find(
    (project) => project.id === state.selectedProjectId
  );
  const selectedTasks = state.tasks.filter(
    (task) => task.projectId === state.selectedProjectId
  );

  let content;
  if (state.selectedProjectId === null) {
    content = <NewProject onCancel={cancelAddProject} onAdd={addProject} />;
  } else if (state.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={startAddProject} />;
  } else {
    content = (
      <SelectedProject
        tasks={selectedTasks}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
        onDelete={deleteProject}
        project={selectedProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={state.projects}
        onStartAddProject={startAddProject}
        onSelectProject={selectProject}
        selectedProjectId={state.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
