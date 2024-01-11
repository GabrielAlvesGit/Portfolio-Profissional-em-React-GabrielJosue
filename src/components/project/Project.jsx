import React from "react";
import "./project.css";
import Projects from "./Projects";
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Project = () => {
  // Importar o i18n para traduzir o texto
  const {t} = useTranslation();
  return(
    <section className="project section" id="projetos">
      <h2 className="section__title" >{t('project.title')}</h2>
      <span className="section__subtitle">{t('project.subtitle')}</span>

      <Projects />
    </section> 
  )
}

export default Project;