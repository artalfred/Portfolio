import React from "react";

function Button({ title, position, fontSize, marginTop }) {
  return (
    <div
      className={`d-flex mt-${marginTop} justify-content-${position} effect`}
    >
      <button
        className={`btn btn-warning fw-bold py-3 px-5 font-sm font-${fontSize}`}
        style={{ letterSpacing: "1.4px" }}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
