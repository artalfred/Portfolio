import React from "react";
import background from "../img/project/background.png";
import projects from "../Api";
import { useParams } from "react-router-dom";
import ProjectNav from "./ProjectNav";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Works() {
  const { id } = useParams();

  return (
    <div style={{ paddingBottom: "8rem" }}>
      <div
        className="work"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          height: "40rem",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <ProjectNav />
        <div className="container">
          <div className="work__content">
            <h1 className="display-4 text-center fw-bold effect text-uppercase">
              {projects[id].name}
            </h1>

            <div
              className="d-flex justify-content-center effect"
              style={{ marginTop: "1.7rem" }}
            >
              <p
                className="text-center fw-lighter font-md"
                style={{ maxWidth: "50rem" }}
              >
                {projects[id].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-grid justify-content-center overview__parent ">
          <div className="d-flex justify-content-center">
            <div className="card border-0 work__box effect">
              <img
                src={projects[id].other}
                alt="project"
                className="overview__img img-fluid"
              />
            </div>
          </div>

          <div className="overview__overview container">
            <div>
              <h4 className="fw-semibold">Project Overview</h4>

              <p className="font-secondary-paragraph fw-light mt-4">
                {projects[id].overview}
              </p>

              <h5 className="fw-semibold mt-5">Challenges</h5>
              <p className="font-secondary-paragraph fw-light mt-4">
                {projects[id].challenges}
              </p>

              <h5 className="fw-semibold mt-5">Tools Used</h5>
              <div className="row row-cols-auto g-3 mt-2">
                {projects[id].tools.map((tool) => {
                  return (
                    <div key={tool.id} className="col mt-3">
                      <div className="rounded-2 about__skills">{tool.used}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="overview__button mt-5">
              <a
                href={projects[id].url}
                target="_blank"
                className="text-decoration-none"
              >
                <Button title="PROJECT LINK" position="start" fontSize="sm" />
              </a>

              <Link to="/projects">
                <button className="btn btn-outline-warning fw-bold py-3 px-5 font-sm">
                  OTHER PROJECTS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
