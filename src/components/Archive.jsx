import React from "react";
import BodyBackground from "../img/HeroSection/bodyDark.png";
import ArchiveApi from "../Archive";
import { Link } from "react-router-dom";

function Archive() {
  return (
    <div
      className="projects"
      id="projects"
      style={{
        backgroundImage: `url(${BodyBackground})`,
        paddingTop: "10rem",
      }}
    >
      <div className="container-xxl">
        <div className="d-flex align-items-center gap-2 pb-3 archive_name">
          <span className="d-flex align-items-center">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </span>
          <h6 className="mb-0">Art Alfred</h6>
        </div>

        <h1 className="navy-light fw-semibold">All Projects</h1>

        <div className="mt-4">
          <div
            className="d-flex justify-content-between pb-1 pt-2 align-items-center"
            style={{ borderBottom: "1px solid rgba(203,213,225,.1)" }}
          >
            <div className="d-flex" style={{ gap: "3rem" }}>
              <h6 className="navy-light">Year</h6>
              <h6 className="navy-light">Project</h6>
            </div>
            <div className="d-flex Archive_tools" style={{ gap: "3rem" }}>
              <h6 className="navy-light">Built with</h6>
            </div>
          </div>

          {ArchiveApi.map((Archive) => {
            return (
              <div
                key={Archive.id}
                className="d-flex align-items-center justify-content-between py-3"
                style={{ borderBottom: "1px solid rgba(203,213,225,.1)" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "3rem" }}
                >
                  <h6
                    className="green opacity-50 fw-light mb-0"
                    style={{ fontSize: "14px" }}
                  >
                    {Archive.year}
                  </h6>
                  <Link
                    to={Archive.url}
                    target="_blank"
                    className="d-flex align-items-center gap-2 navy-light link-underline-dark archive_name"
                    style={{ fontSize: "15px" }}
                  >
                    {Archive.name}
                    <span
                      className="mt-2"
                      style={{ transform: "rotate(-40deg)" }}
                    >
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </span>
                  </Link>
                </div>
                <div className="d-flex Archive_tools" style={{ gap: "1rem" }}>
                  {Archive.TechStack.map((tool) => {
                    return (
                      <h6
                        key={tool.id}
                        className="green p-2 rounded-pill mb-0"
                        style={{
                          fontSize: ".75rem",
                          background: "rgba(136, 146, 176, .1)",
                        }}
                      >
                        {tool.tool}
                      </h6>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Archive;
