import React from "react";
import "../BasicExample/BasicExample.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Competences from "../Competences/Competences";
import Projets from "../Projets/Projets";
import Interets from "../Interets/Interets";
import Form from "../Form/Form";
import Header from "../Navbar/Header";



export default function BasicExample() {
  return (
  
    <Router>
      <div>
      <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll">
            <Link to="/header">Accueiiiiiiiiiiiiiiil</Link>
            </a>
          </li>
          <li>
          <a className="smoothscroll">
            <Link to="/about">À propos</Link>
            </a>
          </li>
          <li>
          <a className="smoothscroll">
            <Link to="/resume">Formations</Link>
            </a>
          </li>
          <li>
          <a className="smoothscroll">
            <Link classname="smoothscroll"to="/competences">Compétences</Link>
            </a>
          </li>
          <li>
          <a className="smoothscroll">
            <Link to="/projets">Projets</Link>
            </a>
          </li>
          <li>
          <a className="smoothscroll">
            <Link to="/interets">Centre d'intérêt</Link>
            </a>
          </li>
          <li>
          <a className="smoothscroll">
            <Link to="/Form">Contact</Link>
            </a>
          </li>
        </ul>
        </nav>
        <Switch>
        <Route exact path="/header">
            <Header />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/competences">
            <Competences/>
          </Route>
          <Route path="/projets">
            <Projets/>
          </Route>
          <Route path="/interets">
            <Interets/>
          </Route>
          <Route path="/form">
          <Form/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

