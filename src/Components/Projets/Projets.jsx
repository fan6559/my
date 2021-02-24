import React from "react";
import "./Projets.css"

function Projets () {
    return(
        <div className="projet">
        <div className="ts">
        <h2>Projets Web :</h2>
       </div>
       <div className="card">
        <div className="card-image">
            <a href="https://github.com/lucas240/HTML-projet-1" target="_blank">
            <img src="WebAssembly.png" alt="" />
            </a>
            </div>
        <div className="card-body">
            <div className="card-title">
                <h3>Web Assembly</h3>
            </div>
            <div className="card-excerpt">
                <p>Projet effectué en groupe de 3 pour tester nos compétences en HTML/CSS. Ce projet consistait à créer un site web sur le web assembly en forme de blog avec des articles.</p>
            </div>
        </div>
    </div>
    <div className="cards">
        <div className="card-image">
            <a href="https://github.com/WildCodeSchool/btz_p2_0919_wildOfWarcraftProgress" target="_blank">
            <img src="wow-classic1.jpg" alt="" />
            </a>
            </div>
        <div className="card-body">
            <div className="card-title">
                <h3>World Warcraft</h3>
            </div>
            <div className="card-excerpt">
                <p> Projet en groupe de 3. Ce projet m'a permis de faire une première mise en pratique à react ainsi que la récupération des données d'une API. Il m'a permis aussi de découvrir les hooks et react Router.</p>
            </div>
        </div>
    </div>
       </div>
    
    
          
            
    )
}

export default Projets;