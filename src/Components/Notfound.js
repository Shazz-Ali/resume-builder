import React from "react";
import Navbar from "./Common/Navbar";
import "../Styles/Notfound.css";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  // Define the Notfound functional component
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <div id="particles" className="particles">
        <span></span> {/* Render a series of spans for particle animation */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <main>
        <section>
          <h1>Page Not Found!</h1> {/* Display a title for the 404 page */}
          <div>
            <span>4</span>
            <span className="circle">0</span>
            <span>4</span> {/* Display "404" with a circular styling */}
          </div>
          <p>
            We are unable to find the page
            <br />
            you're looking for.
          </p>{" "}
          {/* Display a message for the user */}
          <div>
            <button>
              {/* Render a button with a link to the home page */}
              <NavLink
                to="/"
                style={{ color: "#fafafa", textDecoration: "none" }}
              >
                Back to Home Page
              </NavLink>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Notfound;
