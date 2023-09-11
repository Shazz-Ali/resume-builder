import { Button, CircularProgress } from "@mui/material";
import React from "react";
import "../Styles/BackNextBtnComponent.css";

// Define the BackNextBtnComponent function
const BackNextBtnComponent = (props) => {
  return (
    <div className="back-next-btn-cont">
      {props.tab === 0 ? null : (
        // If it is, then return null
        <Button
          onClick={props.onBack}
          className="outlined-btn"
          sx={{ marginRight: "20px" }}
          variant="outlined"
        >
          {props.backTitle}
        </Button>
      )}
      {/* If 'loading' prop is true, display a loading spinner; otherwise, render the 'nextTitle' button */}
      {props.loading ? (
        <CircularProgress size={25} />
      ) : (
        <Button type="submit" className="contained-btn" variant="contained">
          {props.nextTitle}
        </Button>
      )}
    </div>
  );
};

export default BackNextBtnComponent;
