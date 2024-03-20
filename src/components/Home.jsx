import React from "react";
import Hero from "../img/HeroSection/Hero.jpg";
import Button from "../Reusable/Button";
import resume from "../Assets/bernales_art_alfred_resume.pdf";
import bodyDark from "../img/HeroSection/bodyDark.png";

function Home() {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${bodyDark})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="position-absolute start-50 translate-middle w-100 home container">
        <h1 className="text-center display-1 home__title effect belleza-regular navy-lightest">
          Art Bernales
        </h1>
        <h3 className="text-center home__title effect belleza-regular navy-light-body">
          Full stack Developer
        </h3>

        <div className="d-flex justify-content-center effect">
          <p className="text-center fw-light mt-4 navy-light-description home__description">
            A 22-year-old IT Student and aspiring software developer based in
            Mandaluyong, Philippines.
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-center gap-4">
          <a href="#projects" className="text-decoration-none">
            <Button title="PROJECTS" position="center" marginTop="5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
