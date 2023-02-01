import React from "react";
import video from "../../assets/video.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar--logo-holder">
          <img src={video} alt="logo" className="navbar--logo" />
          <h1>LabsMovie</h1>
        </div>
        <ul className="navbar--link">
          <li className="navbar--link-item">Connexion</li>
          <li className="navbar--link-item">Inscription</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
