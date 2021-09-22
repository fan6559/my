import React from "react";
import "../Navbar2/Navbar.css"

function Navbar () {
    return( 
    < div className="header">
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
     <ul className="menu">
      <li><a href="#">Accueil</a></li>
      <li><a href="#about">À propos</a></li>
      <li><a href="#resume"> Formations</a></li>
      <li><a href="#expepro"> Expérience professionelles</a></li>
      <li><a href="#competences">Compétences</a></li>
      <li><a href="#projets">Projets</a></li>
      <li><a href="#interets">Centres d'intêrets</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
   </ div>
   

    )
}

export default Navbar;