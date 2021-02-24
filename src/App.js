import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Header";
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
     < Navbar />
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
