import React from "react";

const Projectsitems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className="project__img" />
      <h3 className="project__title">{item.title}</h3>

      <p className="project__description">{item.description}</p>

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
            Visite a Página <i className="bx bx-link-external project__button-icon"></i>
          </a>
        )}

        {item.codeLink && (
          <a href={item.codeLink} className="project__button">
            Código <i className="bx bxl-github project__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projectsitems;
