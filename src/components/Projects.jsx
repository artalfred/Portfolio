import React from "react";

import SecondaryTitle from "../Reusable/Title";
import Button from "../Reusable/Button";
import { Link } from "react-router-dom";
import projects from "../Api";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <SecondaryTitle
          title="PROJECTS"
          description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
        />

        <div className="projects__list container">
          {projects.slice(0, 3).map((project, index) => {
            return (
              <div
                key={project.id}
                className="row gy-2 gx-5 align-items-center projects__row"
              >
                <div className="col-12 col-lg-6 projects__column">
                  <div className="card border-0">
                    <img src={project.img} alt="img" />
                  </div>
                </div>

                <div className="col-12 col-lg-6 projects__column">
                  <h3 className="fw-semibold m-0 projects__title">
                    {project.name}
                  </h3>
                  <p className="font-secondary-paragraph fw-lighter mt-4 m-0 projects__description">
                    {project.description}
                  </p>

                  <div className="projects__button">
                    <Link
                      preventScrollReset={true}
                      to={`/project/${project.id}`}
                      className="text-decoration-none"
                    >
                      <Button
                        title="OVERVIEW"
                        position="start"
                        fontSize="sm"
                        marginTop="4"
                        btnStyle={"warning"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-center projects__others">
        <Link to="/projects">
          <button
            className={`btn btn-outline-warning fw-bold py-3 px-5 font-sm font-sm`}
            style={{ letterSpacing: "1.4px" }}
          >
            OTHERS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
