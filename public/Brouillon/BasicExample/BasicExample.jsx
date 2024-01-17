import React from "react";
import "./BasicExample.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "../../../src/Components/Header/Header";
import About from "../../../src/Components/About/About";
import Competences from "../../../src/Components/Competences/Competences";
import Projets from "../../../src/Components/Projets/Projets";
import Interets2 from "../../../src/Components/Interets2/Interets2";
import Resume2 from "../../../src/Components/Resume2/Resume2";
import Form from "../../../src/Components/Form/Form";


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
            <Link to="/header">Accueil</Link>
            </a>
          </li>
          <li>
          <a className="smoothscroll">
            <Link to="/about">À propos</Link>
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
          <Route path="/Resume2">
            <Resume2/>
          </Route>
          <Route path="/competences">
            <Competences/>
          </Route>
          <Route path="/projets">
            <Projets/>
          </Route>
          <Route path="/interet2">
            <Interets2/>
          </Route>
          <Route path="/form">
          <Form/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

