import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
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
        <Navbar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/About" exact component={About} />
          <Route path="/Competences" exact component={Competences} />
          <Route path="/Projets" exact component={Projets} />
          <Route path="/Interet2" exact component={Interet2} />
          <Route path="/Pictures" exact component={Pictures} />
          <Route path="/Contact">
            <Form />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
