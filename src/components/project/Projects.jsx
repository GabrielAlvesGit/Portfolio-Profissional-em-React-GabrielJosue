import React, { useEffect } from "react";
import { useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import Projectsitems from "./Projectsitems";

const Projects = () => {
  const [item, setItem] = useState({ name: "todos" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "todos") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClicked = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index);
  };

  return (
    <div>
      <div className="project__filters">
        {projectsNav.map((navItem, index) => {
          return (
            <span
              onClick={(e) => {
                handleClicked(e, index);
              }}
              className={`${active === index ? "active-project" : ""} project__item`}
              key={index}
            >
              {navItem.name}
            </span>
          );
        })}
      </div>

      <div className="project__container container grid">
        {projects.map((projectItem) => {
          return <Projectsitems item={projectItem} key={projectItem.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
