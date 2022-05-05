import React from "react";
import ProjectCard, {ProjectCardPropsType} from "./ProjectCard";


import "../../styles/_project.scss";


type ProjectPropsType ={
   ProjectItems: ProjectCardPropsType[];
};

const Project = ({ProjectItems}: ProjectPropsType) => {

    return (  
        <section className="project" id="project">
          <h2 className="project__title" tabIndex={0}>Projects</h2>
          <hr />
          <section className="project__card">

           { ProjectItems.map((project) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} />    
          ))} 
          
          </section>
          
      </section>

    );
}
 
export default Project;