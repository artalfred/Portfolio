import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo_footer from "../img/logo/Logo_v4.png";
import bodyDark from "../img/HeroSection/bodyDark.png";

function Footer() {
  return (
    <footer
      className="w-100 align-items-center footer"
      style={{
        backgroundImage: `url(${bodyDark})`,
      }}
    >
      <div
        className="container-xxl"
        style={{
          borderTop: "1px solid #8892b0",
        }}
      >
        <div className="row py-5">
          <div className="col-12 col-lg-10 order-1 order-md-1 order-lg-1 p-0 footer__logoAndDescription">
            <a href="/" className="navbar-brand footer__logo fw-semibold">
              <img src={logo_footer} alt="logo" />
            </a>
            <p
              className="fw-lighter footer__content belleza-regular"
              style={{ maxWidth: "37rem" }}
            >
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product.
            </p>
          </div>

          <div className="col-12 col-lg-2 order-3 order-md-1 order-lg-2 p-0 footer__socialLinks">
            <h5
              className="fs-6 belleza-regular navy-lightest"
              style={{ fontWeight: "400" }}
            >
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
                  <LinkedInIcon sx={{ color: "#8892b0", fontSize: "1.8rem" }} />
                </a>
              </span>
              <span className="col">
                <a href="">
                  <TwitterIcon sx={{ color: "#8892b0", fontSize: "1.6rem" }} />
                </a>
              </span>
              <span className="col">
                <a href="https://github.com/artalfred" target="_blank">
                  <GitHubIcon sx={{ color: "#8892b0", fontSize: "1.6rem" }} />
                </a>
              </span>
              <span className="col">
                <a
                  href="https://www.facebook.com/artalfred.2001"
                  target="_blank"
                >
                  <FacebookIcon sx={{ color: "#8892b0", fontSize: "1.6rem" }} />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5" style={{ borderTop: ".8px  solid #444" }}>
          <p
            className="green fw-lighter text-center mt-5 pb-2"
            style={{ fontSize: ".8rem" }}
          >
            &copy; Copyright 2023. Made by{" "}
            <a
              href="https://www.linkedin.com/in/art-alfred/"
              target="_blank"
              className="text-light"
            >
              <span className="text-decoration-underline fw-normal green">
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
