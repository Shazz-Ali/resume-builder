import { TextField } from "@mui/material";
import React from "react";
import "../Styles/InputComponent.css";
import { inputChecks } from "../Utils/inputChecks";

// Define the InputComponent functional component
const InputComponent = (props) => {
  return (
    // Render a container div with a custom class "input-component"
    <div className="input-component">
      <p className="input-title">{props.title}</p>
      {/* Render a Material-UI `TextField` component */}
      <TextField
        variant="outlined"
        type={props.type}
        name={props.name}
        // Spread the result of the `register` function and `inputChecks` function as props
        {...props.register(props.name, inputChecks(props.type, props.name))}
        multiline={props.multiline}
        rows={5}
        value={props.value}
        // Set an event handler for the `onChange` event to update the value using `props.setValue`
        onChange={(e) => props.setValue(e.target.value.toString())}
        // Set the error state based on `props.error`
        error={props.error}
        // Display an error message if `props.errorMessage` is provided, otherwise, display `null`
        helperText={props.errorMessage ? props.errorMessage : null}
      />
    </div>
  );
};

export default InputComponent;
