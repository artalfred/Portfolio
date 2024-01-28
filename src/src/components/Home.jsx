import React from "react";
import background from "../img/project/background.png";
import Button from "../Reusable/Button";

function Home() {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="position-absolute start-50 translate-middle w-100 home container">
        <h1 className="text-center display-4 home__title effect">
          HEY, I'M ALFRED BERNALES
        </h1>

        <div
          className="d-flex justify-content-center effect"
          style={{ marginTop: "2rem" }}
        >
          <p
            className="text-center fw-lighter font-md"
            style={{ maxWidth: "50rem" }}
          >
            Passionate junior frontend developer specializing in ReactJS,
            dedicated to creating captivating web experiences. Let's collaborate
            and bring your ideas to life!
          </p>
        </div>

        <a href="#projects" className="text-decoration-none">
          <Button
            title="PROJECTS"
            position="center"
            fontSize="md"
            marginTop="5"
            btnStyle={"warning"}
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
