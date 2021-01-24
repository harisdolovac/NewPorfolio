import React from "react";
import PROJECTS from "../data/projects";
import "../css/Project.css";

const Project = (props) => {
  const { title, image, description, link } = props.project;

  return (
    <div className="all_projects">
      <div className="wrapper_projects">
        <div className="overlay">
          <div className="new_content">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Visit website
              </a>
            </button>
          </div>
        </div>
        <h3>{title}</h3>

        <div className="image_div">
          <img className="image_projects" src={image} alt="projects" />
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {PROJECTS.map((project, i) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
