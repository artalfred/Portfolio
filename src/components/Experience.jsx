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
      <div className="container-xxl">
        <div className="d-grid justify-content-center">
          <div className="experience__jobs">
            <div className="row">
              <div className="col-4">1</div>
              <div className="col-8 border">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
