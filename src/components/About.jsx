import React from "react";
import SecondaryTitle from "../Reusable/Title";
import Button from "../Reusable/Button";

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <SecondaryTitle
          title="ABOUT ME"
          description="Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology"
        />

        <div className="about__info">
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <h4 className="fw-bold">Get to know me!</h4>

              <p className="fw-lighter font-secondary-paragraph mt-5">
                I'm a <span className="fw-semibold">self-taught developer</span>{" "}
                with a passion for web development, and a bootcamp graduate at
                kodeGo. With strong focus on frontend-development, I succesfully
                delivered numerous projects, showcasing expertise in creating
                visually appealing and user-friendly websites.
              </p>

              <p className="fw-lighter font-secondary-paragraph mt-4">
                I'm open to Job opportunities or Internship where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to{" "}
                <span className="fw-semibold">contact</span> me.
              </p>

              <div className="d-flex gap-4">
                <a
                  href="./Assets/bernales_art_alfred_resume.pdf"
                  download
                  className="text-decoration-none"
                >
                  <Button
                    title="RESUME"
                    position="start"
                    fontSize="sm"
                    marginTop="5"
                    btnStyle={"light"}
                    btnBorder={"border"}
                  />
                </a>

                <a
                  href="mailto:bernalesartalfred@gmail.com"
                  className="text-decoration-none"
                >
                  <Button
                    title="CONTACT"
                    position="start"
                    fontSize="sm"
                    marginTop="5"
                    btnStyle={"warning"}
                  />
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <h4 className="fw-bold">My Skills</h4>

              <div className="row row-cols-auto g-3 about__parent">
                <div className="col">
                  <div className="rounded-2 about__skills">WordPress</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">Javascript</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">React Native</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">jQuery</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">ReactJs</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">SASS/Scss</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">Tailwind</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">
                    PHP (Basic Knowledge)
                  </div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">
                    MySql (Basic Knowledge)
                  </div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">Canva</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">Figma</div>
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
