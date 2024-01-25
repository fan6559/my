import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/About">À propos</Link></li>
        <li><Link to="/Competences">Compétences</Link></li>
        <li><Link to="/Projets">Projets</Link></li>
        <li><Link to="/Interet2">Centres d'intérêts</Link></li>
        <li><Link to="/Pictures">Galeries Photos</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;