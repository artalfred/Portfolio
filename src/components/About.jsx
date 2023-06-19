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
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my{" "}
                <a
                  href="https://www.linkedin.com/in/art-alfred/"
                  target="_blank"
                >
                  <span className="fw-bold text-decoration-underline text-warning">
                    Linkedin
                  </span>{" "}
                </a>
                where I post useful content related to Web Development and
                Programming
              </p>

              <p className="fw-lighter font-secondary-paragraph mt-4">
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to{" "}
                <span className="fw-semibold">contact</span> me.
              </p>

              <a
                href="mailto:bernalesartalfred@gmail.com"
                className="text-decoration-none"
              >
                <Button
                  title="CONTACT"
                  position="start"
                  fontSize="sm"
                  marginTop="5"
                />
              </a>
            </div>

            <div className="col-12 col-lg-6">
              <h4 className="fw-bold">My Skills</h4>

              <div className="row row-cols-auto g-3 about__parent">
                <div className="col">
                  <div className="rounded-2 about__skills">HTML</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">CSS</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">Javascript</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">jQuery</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">React</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">SASS</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">Github</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">
                    Responsive Design
                  </div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">PHP Basics</div>
                </div>
                <div className="col">
                  <div className="rounded-2 about__skills">MySql Basics</div>
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
