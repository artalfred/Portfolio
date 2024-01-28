import React from "react";

import react from "../img/logo/react.png";
import js from "../img/logo/js.png";
import mySql from "../img/logo/mySql.png";
import bootstrap from "../img/logo/bootstrap.png";
import sass from "../img/logo/sass.png";
import css from "../img/logo/css.png";
import html from "../img/logo/html.png";
import canva from "../img/logo/canva.png";
import figma from "../img/logo/figma.png";
import vscode from "../img/logo/vscode.png";
import github from "../img/logo/github.png";
import SecondaryTitle from "../Reusable/Title";

const icon = [
  {
    id: 1,
    img: react,
    name: "REACT",
  },
  {
    id: 2,
    img: js,
    name: "JAVASCRIPT",
  },
  {
    id: 3,
    img: mySql,
    name: "MY SQL",
  },
  {
    id: 4,
    img: bootstrap,
    name: "BOOTSTRAP",
  },
  {
    id: 5,
    img: sass,
    name: "SASS",
  },
  {
    id: 6,
    img: css,
    name: "CSS",
  },
  {
    id: 7,
    img: html,
    name: "HTML",
  },
  {
    id: 8,
    img: canva,
    name: "CANVA",
  },
  {
    id: 9,
    img: figma,
    name: "FIGMA",
  },
  {
    id: 10,
    img: vscode,
    name: "VSCODE",
  },
  {
    id: 11,
    img: github,
    name: "GITHUB",
  },
];

function Skills() {
  return (
    <div className="skills container">
      <SecondaryTitle title="KNOWLEDGE AND SKILLS" />

      <div className="skills__item">
        <div className="skills__row mt-5">
          {icon.map((icon) => {
            return (
              <div
                key={icon.id}
                className="skills__box overflow-hidden rounded-3 effect"
                style={{ cursor: "pointer" }}
              >
                <div>
                  <div>
                    <img src={icon.img} alt="react" />
                  </div>
                  <p>{icon.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
