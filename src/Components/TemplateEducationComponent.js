import React from "react";
import "../Styles/TemplateEducationComponent.css";

// Define a functional component called TemplateEducationCompnent that takes 'props' as input
const TemplateEducationCompnent = (props) => {
  return (
    // Create an h3 element with a specific class for styling
    <h3 className="template-education-details">
      {/* Display the 'degree' and 'domain' from the 'education' prop */}
      {props.education.degree} in {props.education.domain}{" "}
      {/* Display the 'university' from the 'education' prop */}
      <span className="template-education-university">
        {props.education.university}
      </span>
      {/* Display the 'startYear' and 'endYear' from the 'education' prop */}
      <span className="education-start-end">
        ({props.education.startYear} - {props.education.endYear})
      </span>
    </h3>
  );
};

export default TemplateEducationCompnent;
