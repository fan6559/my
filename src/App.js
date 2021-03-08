import React from "react";
import './App.css';
import Navbar2 from "./Components/Navbar2/Navbar"
import Header from "./Components/Header/Header"
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Competences from "./Components/Competences/Competences";
import Projets from "./Components/Projets/Projets";
import Interets from "./Components/Interets/Interets";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar2/>
    < Header/>
     < About />
     < Resume />
     < Competences />
     < Projets />
     < Interets />
     < Form />
     < Footer />
    </div>
  );
}

export default App;
