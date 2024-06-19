import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const startAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const cancelAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const selectProject = (projectId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const addProject = (projectData) => {
    const newProject = { ...projectData, id: Math.random() };
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
  };
  const deleteProject = () => {
    setProjectsState((preState) => ({
      ...preState,
      selectedProjectId: undefined,
      projects: preState.projects.filter(
        (project) => project.id !== preState.selectedProjectId
      ),
    }));
  };
  const addTask = (text) => {
    setProjectsState((preState) => {
      const taskId = Math.random();
      const newTask = {
        text,
        id: taskId,
        projectId: preState.selectedProjectId,
      };
      return {
        ...preState,
        tasks: [newTask, ...preState.tasks],
      };
    });
  };

  const deleteTask = (taskId) => {
    setProjectsState((preState) => ({
      ...preState,
      tasks: preState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  const selectedTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      tasks={selectedTasks}
      onAddTask={addTask}
      onDeleteTask={deleteTask}
      onDelete={deleteProject}
      project={selectedProject}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={cancelAddProject} onAdd={addProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={startAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={projectsState.projects}
        onStartAddProject={startAddProject}
        onSelectProject={selectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
