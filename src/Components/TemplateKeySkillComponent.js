import { Container } from "@mui/system";
import React from "react";
import "../Styles/TemplateKeySkillComponent.css";

// This component renders a key skill as a list item inside a Material-UI Container.
const TemplateKeySkillComponent = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default TemplateKeySkillComponent;
