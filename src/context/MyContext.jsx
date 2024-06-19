import { createContext, useState } from "react";

const MyContext = createContext();

function Provider({ children }) {
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

  const valueToShare = {
    state,
    startAddProject,
    cancelAddProject,
    selectProject,
    addProject,
    deleteProject,
    addTask,
    deleteTask,
  };

  return (
    <MyContext.Provider value={valueToShare}>{children}</MyContext.Provider>
  );
}

export default MyContext;

export { Provider };
