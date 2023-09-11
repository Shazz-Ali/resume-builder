import React from "react";
import "../Styles/TemplateHeading.css";

// This component renders a heading with an optional color and a vertical line below it.
const TemplateHeading = (props) => {
  return (
    <div>
      <h2
        style={{ color: props.color }}
        className="professional-experience-heading"
      >
        {props.title}
      </h2>
      <hr style={{ backgroundColor: props.color }} className="vertical-line" />
    </div>
  );
};

export default TemplateHeading;
