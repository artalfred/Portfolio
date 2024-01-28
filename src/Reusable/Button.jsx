import React from "react";

function Button({ title, position, fontSize, marginTop, btnStyle, btnBorder }) {
  return (
    <div
      className={`d-flex mt-${marginTop} justify-content-${position} effect`}
    >
      <button
        className={`btn btn-${btnStyle} fw-bold py-3 px-5 font-sm font-${fontSize} ${btnBorder}`}
        style={{ letterSpacing: "1.4px" }}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
