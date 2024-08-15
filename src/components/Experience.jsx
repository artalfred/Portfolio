import React from "react";
import BodyBackground from "../img/HeroSection/BodyBackground.jpg";
import bodyDark from "../img/HeroSection/bodyDark.png";

function Experience() {
  return (
    <div
      className="experience"
      id="experience"
      style={{
        backgroundImage: `url(${bodyDark})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="belleza-regular fw-bold green">Experience</h1>

        <div className="experience__jobs mt-5 px-4">
          <div className="experience__content d-flex gap-4">
            <div className="experience__circle"></div>
            <div className="w-100">
              <div className="experience__info">
                <div>
                  <h5 className="belleza-regular green mb-0">
                    Web Developer Intern
                  </h5>
                  <h6 className="belleza-regular navy-light-body d-grid gap-2">
                    De Castro Consulting
                  </h6>
                </div>
                <h5 className="fs-6 green">10/2023 - Current</h5>
              </div>
              <p className="belleza-regular">
                I coordinated tasks and daily team meetings to facilitate
                efficient collaboration, ensuring the team remained
                synchronized. I also led website design and layout, prioritizing
                a user-friendly experience. Utilizing WordPress and various web
                development technologies, played a pivotal role in achieving
                project success.
              </p>
            </div>
          </div>

          <div className="experience__content d-flex gap-4 mt-5">
            <div className="experience__circle"></div>
            <div className="w-100">
              <div className="experience__info">
                <div>
                  <h5 className="belleza-regular green mb-0">
                    Database Administrator Intern
                  </h5>
                  <h6 className="belleza-regular navy-light-body d-grid gap-2">
                    Work Immersion
                  </h6>
                </div>
                <h5 className="fs-6 green">01/2019 - 04/2019</h5>
              </div>
              <p className="belleza-regular">
                Overseeing job applicant applications for our senior high work
                immersion program. I manage database organization, ensure
                accurate applicant tracking, and provide support throughout the
                application process."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
