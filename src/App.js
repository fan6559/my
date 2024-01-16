import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Navbar2 from "./Components/Navbar2/Navbar"
import Header from "./Components/Header/Header"
import About from "./Components/About/About";
import Competences from "./Components/Competences/Competences";
import Projets from "./Components/Projets/Projets";
import Interet2 from "./Components/Interets2/Interet2";
import Pictures from "./Components/AlbumPhotos/Pictures";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar2 />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/about" component={About} />
          <Route path="/competences" component={Competences} />
          <Route path="/projets" component={Projets} />
          <Route path="/interet2" component={Interet2} />
          <Route path="/pictures" component={Pictures} />
          <Route path="/contact">
            <Form />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;