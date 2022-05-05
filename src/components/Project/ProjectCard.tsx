import React from "react";
import ButtonComponent from "../Button/Button";

import "../../styles/_project.scss";


export type ProjectCardPropsType ={
   id?: number;
   title: string,
   description: string, 
}

const ProjectCard = (props: ProjectCardPropsType) => {
    return (  
     
        <article className="project__article">
          
            <h3 className="project__subtitle"> {props.title}</h3>
            <hr />
             <p className="project__text">
              {props.description}
            </p>
            <a href="#home">
            <ButtonComponent type="button" text="Veiw Project"/>
            </a>
            
        </article>
    );
}

 
export default ProjectCard;