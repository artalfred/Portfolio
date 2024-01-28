import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import logo from "../img/logo/logo.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid p-0">
        <div className="d-grid align-items-center gap-1">
          <a href="/" className="navbar-brand navbar__logo fw-semibold">
            <img src={logo} alt="logo" style={{ height: "1.3rem" }} />
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
                className="nav-link text-dark text-end font-sm"
                aria-current="page"
                href="/"
                style={{ fontWeight: "500" }}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark text-end font-sm"
                href="#about"
                activeClassName="active"
                style={{ fontWeight: "500" }}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark text-end font-sm"
                href="#projects"
                style={{ fontWeight: "500" }}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark text-end font-sm"
                href="mailto: bernalesartalfred@gmail.com"
                style={{ fontWeight: "500" }}
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

export default Nav;
