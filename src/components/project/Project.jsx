import React from "react";
import "./project.css";
import Projects from "./Projects";


const Project = () => {
  return(
    <section className="project section" id="project">
      <h2 className="section__title" >Projetos</h2>
      <span className="section__subtitle">Meus recentes projetos</span>

      <Projects />
    </section> 
  )
}

export default Project;