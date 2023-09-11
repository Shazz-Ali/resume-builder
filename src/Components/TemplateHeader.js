import React from "react";
import "../Styles/TemplateHeader.css";

// Define a functional component called TemplateHeader that takes 'props' as input
const TemplateHeader = (props) => {
  return (
    // Create a div with a background color based on the 'bgColor' prop
    <div style={{ backgroundColor: props.bgColor }}>
      <div className="template-header">
        <div className="template-header-first">
          {/* Conditional rendering based on the presence of a profile image */}
          {props.personalInfo.profileImg.length > 0 ? (
            // Display the profile image if it exists
            <div className="template-img-cont">
              <img
                className="template-profile-img"
                src={props.personalInfo.profileImg}
                alt="profile-img"
              />
            </div>
          ) : (
            // Display initials in a colored container if no profile image
            <div
              style={{ backgroundColor: props.primaryColor }}
              className="template-img-cont"
            >
              <p style={{ color: props.bgColor }} className="template-img-text">
                AM
              </p>
            </div>
          )}
          <div className="template-user-details-cont">
            {/* Display the user's full name with a color based on 'primaryColor' prop */}
            <h2
              style={{ color: props.primaryColor }}
              className="template-user-name"
            >
              {props.personalInfo.firstName + " " + props.personalInfo.lastName}
            </h2>
            {/* Display the user's job title with a color based on 'secondaryColor' prop */}
            <p
              style={{ color: props.secondaryColor }}
              className="template-user-designation"
            >
              {props.workExperience[0].jobTitle}
            </p>
          </div>
        </div>
        {/* Display the user's address with a color based on 'primaryColor' prop */}
        <p
          style={{ color: props.primaryColor }}
          className="template-header-second"
        >
          {props.personalInfo.address}
        </p>
      </div>
      {/* Display the user's objective with a color based on 'secondaryColor' prop */}
      <p
        style={{ color: props.secondaryColor }}
        className="template-user-about"
      >
        {props.personalInfo.objective}
      </p>
    </div>
  );
};

export default TemplateHeader;
