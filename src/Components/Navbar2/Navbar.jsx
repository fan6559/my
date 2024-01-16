import React from "react";
import { Link } from "react-router-dom";
import "../Navbar2/Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/competences">Compétences</Link></li>
        <li><Link to="/projets">Projets</Link></li>
        <li><Link to="/Interet2">Centres d'intérêts</Link></li>
        <li><Link to="/pictures">Galeries Photos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;