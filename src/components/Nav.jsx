import React, { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Logo_v4 from "../img/logo/Logo_v4.png";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

function Nav() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navigationBar = document.getElementById("navigation-bar");

    if (scrollY > 16) {
      navigationBar.style.background = "#020c1b, 1";
      navigationBar.style.boxShadow = "0 10px 30px -15px #020c1b";
      navigationBar.style.backdropFilter = "blur(20px)";
    } else if (scrollY < 16) {
      navigationBar.style.boxShadow = "none";
      navigationBar.style.backgroundColor = "transparent";
    } else {
      navigationBar.style.backgroundColor = "transparent";
    }
  }, [scrollY]);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navy-dark"
      id="navigation-bar"
    >
      <div className="container-xxl p-0">
        <div className="d-flex align-items-center gap-1">
          <a href="/" className="navbar-brand navbar__logo">
            <img src={Logo_v4} alt="logo" />
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

          <ul className="nav justify-content-end navbar__list gap-1 px-0">
            <li className="nav-item">
              <HashLink
                className="nav-link text-end font-sm belleza-regular navy-light"
                aria-current="page"
                to="/#about"
                style={{ fontWeight: "500" }}
              >
                <span
                  className="fw-light green belleza-regular"
                  style={{ fontSize: "12px" }}
                >
                  01. &nbsp;
                </span>
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark text-end font-sm belleza-regular navy-light"
                aria-current="page"
                to="/experience"
                style={{ fontWeight: "500" }}
              >
                <span
                  className="fw-light green belleza-regular"
                  style={{ fontSize: "12px" }}
                >
                  02. &nbsp;
                </span>
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link text-dark text-end font-sm belleza-regular navy-light"
                to="/#projects"
                style={{ fontWeight: "500" }}
              >
                <span
                  className="fw-light green belleza-regular"
                  style={{ fontSize: "12px" }}
                >
                  03.&nbsp;
                </span>
                Work
              </HashLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark text-end font-sm belleza-regular navy-light"
                href="mailto: bernalesartalfred@gmail.com"
                style={{ fontWeight: "500" }}
              >
                <span
                  className="fw-light green belleza-regular"
                  style={{ fontSize: "12px" }}
                >
                  04. &nbsp;
                </span>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
