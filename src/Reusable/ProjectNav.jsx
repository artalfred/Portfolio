import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../img/logo/logo.png";
import { HashLink as Link } from "react-router-hash-link";

function ProjectNav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid p-0">
        <div className="d-flex align-items-center gap-3">
          <a href="/" className="navbar-brand navbar__logo fw-semibold">
            <img src={logo} alt="logo" style={{ height: "3rem" }} />
          </a>
        </div>
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          style={{ boxShadow: "none" }}
        >
          <div
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuOutlinedIcon sx={{ fontSize: "2rem", color: "#333" }} />
          </div>
        </button>

        <div
          className="collapse navbar-collapse navbar__mobile p-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 "></ul>

          <ul className="nav justify-content-end navbar__list gap-3 px-0">
            <li className="nav-item">
              <a
                className="nav-link text-dark text-end fw-semibold font-sm"
                aria-current="page"
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark text-end fw-semibold font-sm"
                to="/#about"
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark text-end fw-semibold font-sm"
                to="/#projects"
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark text-end fw-semibold font-sm"
                href="#"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProjectNav;
