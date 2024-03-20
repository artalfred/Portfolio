import React from "react";

function SecondaryTitle({ title, description }) {
  return (
    <div>
      <h2 className="text-center effect fw-bold belleza-regular navy-lightest">
        {title}
      </h2>

      <div className="d-flex justify-content-center">
        <p
          className="text-center mt-3 fw-regular fw-lighter"
          style={{ maxWidth: "50rem" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default SecondaryTitle;
