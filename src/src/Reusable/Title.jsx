import React from "react";

function SecondaryTitle({ title, description }) {
  return (
    <div>
      <h1 className="display-6 text-center effect fw-bold">{title}</h1>

      <div className="w-100 position-relative mt-4">
        <div
          className="bg-warning rounded-5 d-flex position-absolute top-50 start-50 translate-middle"
          style={{ height: ".3rem", width: "2rem" }}
        ></div>
      </div>

      <div className="d-flex justify-content-center">
        <p
          className="text-center mt-4 font-secondary-title fw-lighter"
          style={{ maxWidth: "50rem" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default SecondaryTitle;
