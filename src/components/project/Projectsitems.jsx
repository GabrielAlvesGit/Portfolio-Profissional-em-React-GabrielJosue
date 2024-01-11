import React from "react";
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Projectsitems = ({ item }) => {
  // Importar o i18n para traduzir o texto
  const {t} = useTranslation();
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className="project__img" />
      <h3 className="project__title">{t(`projects.${item.title}.title`)}</h3>

      <p className="project__description">{t(`projects.${item.title}.description`)}</p>

      {/* Verifica se item.technologies está definido antes de mapear */}
      {item.technologies && item.technologies.length > 0 && (
        <ul className="technologies-list">
          {item.technologies.map((tech, index) => (
            <li key={index} className="technologies-item">
              {tech}
            </li>
          ))}
        </ul>
      )}

      <div className="project__container-link">
        {item.pageLink && (
          <a href={item.pageLink} className="project__button">
            {t("projects.visitePag")} <i className="bx bx-link-external project__button-icon"></i>
          </a>
        )}

        {item.codeLink && (
          <a href={item.codeLink} className="project__button">
            {t("projects.codigo")} <i className="bx bxl-github project__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projectsitems;
