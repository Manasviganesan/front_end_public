// navbar.tsx
'use client';
import React, { useState } from "react"; // Import React and useState
import "./Navbar.Styles.css";
import Button from "./login_button";

const Navbar = () => { // Define Navbar as a functional component
  const [clicked, setClicked] = useState(true); // Use useState hook instead of this.state

  const handleclick = () => {
    setClicked(!clicked); // Use setClicked function instead of this.setState
  };

  return (
    <nav>
      <ul
        id="navbar"
        className={clicked ? "#navbar active" : "#navbar"}
      >
        <li>
          <a href="#">
            <img src="images/logo.png" ></img>
          </a>
        </li>
        <div className="menu-item">
          <li>
            <a className="active" href="#">
              Home
            </a>
          </li>
        </div>
        <div className="menu-item">
          <li>
            <a href="#">About Us</a>
          </li>
        </div>
        <div className="menu-item">
          <li>
            <a href="#">Events</a>
          </li>
        </div>
        <div className="menu-item">
          <li>
            <a href="#">Timeline</a>
          </li>
        </div>
        <div className="menu-item">
          <li>
            <a href="#">Blogs</a>
          </li>
        </div>

        <li>
          <Button/>
        </li>

        <div id="mobile" onClick={handleclick}>
          <i
            id="bar"
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
