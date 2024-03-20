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
                    De Castro Consulting
                  </h5>
                  <h6 className="belleza-regular navy-light-body d-grid gap-2">
                    Web Developer Intern
                  </h6>
                </div>
                <h5 className="fs-6 green">10/2023 - Current</h5>
              </div>
              <p className="belleza-regular">
                Led a dynamic web development team in spearheading a website
                overhaul for our company, utilizing WordPress to craft a
                polished online presence. Seamlessly executed the transfer of
                domains and servers to a new platform, ensuring smooth
                transitions and enhanced functionality. Delivered outstanding
                results through collaborative leadership and technical prowess.
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
                Led a dynamic web development team in spearheading a website
                overhaul for our company, utilizing WordPress to craft a
                polished online presence. Seamlessly executed the transfer of
                domains and servers to a new platform, ensuring smooth
                transitions and enhanced functionality. Delivered outstanding
                results through collaborative leadership and technical prowess.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
