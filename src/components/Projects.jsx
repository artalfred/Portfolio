import React, { useEffect } from "react";
import SecondaryTitle from "../Reusable/Title";
import { Link } from "react-router-dom";
import Project from "../Api";
import BodyBackground from "../img/HeroSection/bodyDark.png";
import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  return (
    <div
      className="projects"
      id="projects"
      style={{
        backgroundImage: `url(${BodyBackground})`,
      }}
    >
      <div className="container-xxl">
        <div style={{ paddingTop: "7rem" }}>
          <SecondaryTitle title="Some Things I’ve Built" />
        </div>

        <div className="row mt-3 row-gap-3">
          {Project.map((project, el) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={project.id}>
                <Link
                  to={project.url}
                  className="link-underline link-underline-opacity-0"
                  target="__blank"
                >
                  <div className="projects__parent">
                    <div>
                      <img
                        src={project.image}
                        className="img-fluid"
                        alt="Projects"
                      />
                    </div>

                    <div className="d-grid p-4 navy-dark box-shadow projects__content">
                      <h4 className="navy-light fw-regular belleza-regular d-flex gap-2 align-items-center">
                        {project.name}
                        <span>
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>
                      </h4>
                      <div className="d-flex gap-2"></div>
                      <p className="belleza-regular navy-lightest pb-2">
                        {project.description}
                      </p>

                      <p
                        className="belleza-regular navy-lightest mt-3"
                        style={{ fontSize: "14px" }}
                      >
                        TechStack
                      </p>
                      <ul
                        className="row gap-3"
                        style={{ paddingLeft: ".8rem" }}
                      >
                        {project.TechStack.map((tool) => (
                          <li
                            className="col-auto list-group-item belleza-regular green"
                            key={tool.id}
                          >
                            {tool.tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-center projects__others d-flex gap-2">
        <Link
          to="/projects"
          className="link-underline link-underline-opacity-0 belleza-regular fw-semibold fs-6 navy-light-body projectBtn d-flex gap-2"
        >
          View Full Project Archive
          <span className="projects__others__icons projectBtn__arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
