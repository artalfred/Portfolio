import React from "react";
import projects from "../Api";
import background from "../img/project/background.png";

import { useParams } from "react-router-dom";
import ProjectNav from "../Reusable/ProjectNav";
import { Link } from "react-router-dom";

function Others() {
  return (
    <div className="others">
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
              ALL PROJECTS
            </h1>

            <div
              className="d-flex justify-content-center effect"
              style={{ marginTop: "1.7rem" }}
            >
              <p
                className="text-center fw-lighter font-md"
                style={{ maxWidth: "50rem" }}
              >
                Here you will find more about my personal project experience,
                tools I can use, and my current skills mostly in terms of
                programming and technology
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="others__content container">
        <div className="row gx-4 gy-5 others__row">
          {projects &&
            projects.map((project) => {
              return (
                <div key={project.id} className="col-12 col-md-6 col-lg-4">
                  <Link
                    to={"/project/" + project.id}
                    className="text-decoration-none"
                  >
                    <div className="card border-0 others__card rounded-0 overflow-hidden effect">
                      <img src={project.img} alt={project.name} />
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Others;
