import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import Welcome from "./components/Welcome.jsx";
import { useState } from "react";
import ProjectInput from "./components/ProjectInput.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import NewTask from "./components/NewTask.jsx";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[],
  })

  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId,
      }
      return {
        ...prevState,
        tasks:[...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks:prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleAddClick() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId:null,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id:projectId,
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }

  function handleCancelClick() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId:undefined,
      }
    })
  }
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let content;

  function deleteSelectedProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    })
  }

  if (projectState.selectedProjectId === undefined) {
    content = <Welcome onAddClick={handleAddClick}/>
  }else if (projectState.selectedProjectId === null) {
    content = <NewProject  onCancel={handleCancelClick} onAdd={handleAddProject} />
  }else {
    content = <SelectedProject tasks={projectState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} project={selectedProject} onDelete={deleteSelectedProject}/>
  }

  return (
    <main className="h-screen flex gap-8">
      <SideBar selectedProjectId={projectState.selectedProjectId} projects={projectState.projects} onAddClick={handleAddClick} onProjectClick={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
