import React from "react";
import { NavLink } from "react-router-dom";
import LogoSiteWeb from "./LogoSiteWeb";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <LogoSiteWeb />
        <ul className="navbar--link">
          <NavLink to="/connexion" style={{ textDecoration: "none" }}>
            <li className="navbar--link-item">Connexion</li>
          </NavLink>
          <NavLink to="/inscription" style={{ textDecoration: "none" }}>
            <li className="navbar--link-item">Inscription</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
