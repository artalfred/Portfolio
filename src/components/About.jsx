import React from "react";
import bodyDark from "../img/HeroSection/bodyDark.png";

function About() {
  return (
    <div
      className="about"
      id="about"
      style={{
        backgroundImage: `url(${bodyDark})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container-xxl">
        <div className="d-flex justify-content-center">
          <div className="d-grid justify-content-center align-items-center">
            <h2 className="fw-semibold belleza-regular text-center navy-light">
              Hi, I'm Art Alfred. Nice to meet you.
            </h2>
            <p className="text-center fw-light about__description mt-4">
              I'm a Full stack developer with a passion for web development, and
              a bootcamp graduate at kodeGo. With strong focus on
              frontend-development, I succesfully delivered numerous projects,
              showcasing expertise in creating visually appealing and
              user-friendly websites.
            </p>

            <p className="text-center fw-light mt-5">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="row">
              <div className="col-12 col-lg-4"></div>

              <div className="col-12 col-lg-4">
                <div className="row row-cols-auto g-3 about__parent d-flex align-items-center justify-content-center">
                  <div className="col">
                    <p
                      className="navy-lightest fw-light d-flex align-items-center gap-1 d-flex align-items-center gap-1"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="about__icons">
                        <ion-icon name="caret-forward-outline"></ion-icon>
                      </span>
                      Javascript
                    </p>
                  </div>
                  <div className="col">
                    <p
                      className="navy-lightest fw-light d-flex align-items-center gap-1"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="about__icons">
                        <ion-icon name="caret-forward-outline"></ion-icon>
                      </span>
                      React
                    </p>
                  </div>
                  <div className="col">
                    <p
                      className="navy-lightest fw-light d-flex align-items-center gap-1"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="about__icons">
                        <ion-icon name="caret-forward-outline"></ion-icon>
                      </span>
                      Node.js
                    </p>
                  </div>
                  <div className="col">
                    <p
                      className="navy-lightest fw-light d-flex align-items-center gap-1"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="about__icons">
                        <ion-icon name="caret-forward-outline"></ion-icon>
                      </span>
                      MongoDb
                    </p>
                  </div>
                  <div className="col">
                    <p
                      className="navy-lightest fw-light d-flex align-items-center gap-1"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="about__icons">
                        <ion-icon name="caret-forward-outline"></ion-icon>
                      </span>
                      WordPress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
