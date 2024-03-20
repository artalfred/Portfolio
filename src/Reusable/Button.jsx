import React from "react";

function Button({ title, position, fontSize, marginTop, btnStyle, btnBorder }) {
  return (
    <div
      className={`d-flex mt-${marginTop} justify-content-${position} effect`}
    >
      <button
        className={`btn btn-outline-warning fw-semibold py-3 px-5 ${btnBorder}`}
        style={{
          letterSpacing: "1.4px",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          fontSize: "14px",
        }}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
