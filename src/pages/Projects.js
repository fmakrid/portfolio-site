import React from "react";
import ProjectView from "../components/ProjectView";
import "../assets/css/Projects.css";

const Projects = () => {
  return (
    <div class="projects">
      <h1>My Projects</h1>
      <h1>(You can click on a project icon to use it live)</h1>
      <ProjectView />
    </div>
  );
};

export default Projects;
