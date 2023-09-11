import { FormControl, FormHelperText } from "@mui/material";
import React from "react";
import "../Styles/SelectComponent.css";

// Define a functional component called SelectComponent that takes 'props' as input
const SelectComponent = (props) => {
  return (
    // Create a div with a specific class for styling
    <div className="select-component">
      {/* Render the 'title' prop within a paragraph element */}
      <p className="select-title">{props.title}</p>
      {/* Create a form control element with error handling based on the 'error' prop */}
      <FormControl fullWidth error={props.error}>
        {/* Render child components provided through 'props.children' */}
        {props.children}
        {/* Display an error message if the 'error' prop is true */}
        <FormHelperText>{props.errorMessage}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
