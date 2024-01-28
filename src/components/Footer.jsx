import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo_footer from "../img/logo/logo_footer.png";

function Footer() {
  return (
    <footer className="w-100 align-items-center footer">
      <div className="container-xxl">
        <div className="row py-5">
          <div className="col-12 col-lg-10 order-2 order-md-2 order-lg-1">
            <div className="d-flex align-items-center gap-1">
              <a href="/" className="navbar-brand navbar__logo fw-semibold">
                <img
                  src={logo_footer}
                  alt="logo"
                  style={{ height: "3.6rem", marginLeft: "-1.3rem" }}
                />
              </a>
            </div>
            <p
              className="text-light fw-lighter footer__content"
              style={{ maxWidth: "37rem", fontSize: ".9rem" }}
            >
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product.
            </p>
          </div>

          <div className="col-12 col-lg-2 order-1 order-md-1 order-lg-2">
            <h5 className="text-light fs-6" style={{ fontWeight: "400" }}>
              SOCIAL LINKS
            </h5>

            <div
              className="row grid-row-auto footer__content"
              style={{ maxWidth: "15rem" }}
            >
              <span className="col">
                <a
                  href="https://www.linkedin.com/in/art-alfred/"
                  target="_blank"
                >
                  <LinkedInIcon sx={{ color: "#fff", fontSize: "1.8rem" }} />
                </a>
              </span>
              <span className="col">
                <a href="">
                  <TwitterIcon sx={{ color: "#fff", fontSize: "1.6rem" }} />
                </a>
              </span>
              <span className="col">
                <a href="https://github.com/artalfred" target="_blank">
                  <GitHubIcon sx={{ color: "#fff", fontSize: "1.6rem" }} />
                </a>
              </span>
              <span className="col">
                <a
                  href="https://www.facebook.com/artalfred.2001"
                  target="_blank"
                >
                  <FacebookIcon sx={{ color: "#fff", fontSize: "1.6rem" }} />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5" style={{ borderTop: ".8px  solid #444" }}>
          <p
            className="text-light fw-lighter text-center mt-5"
            style={{ fontSize: ".8rem" }}
          >
            &copy; Copyright 2023. Made by{" "}
            <a
              href="https://www.linkedin.com/in/art-alfred/"
              target="_blank"
              className="text-light"
            >
              <span className="text-decoration-underline fw-normal">
                Art Alfred Bernales
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
