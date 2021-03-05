import React from "react";
import "../Navbar/Header.css"

function Header (){

return (
   
  <header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
      Show navigation
    </a>
    <a className="mobile-btn" href="#" title="Hide navigation">
      Hide navigation
    </a>
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Accueil
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          À propos
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#resume">
          Formations
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#competences">
          Compétences
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#projets">
          Projets
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#interets">
          Centre d'intérêt
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
        <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Fanny Camus</h1>
              <h3>
                Développeur web Junior , je suis passionnée du numérique et des
                jeux vidéos.
              </h3>
              </div>
              </div>
      </header>
   
  );

}

export default Header; 