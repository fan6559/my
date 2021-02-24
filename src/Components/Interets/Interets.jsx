import React from "react";
import "./Interets.css"

function Interets () {
    return(
        
        <div id="interets" className="interets">
           <div className="cen"> 
            <h2>Centres d'intérêt :</h2>
           </div>
           <section className="inr">
           <figure className="loisirs">
            <img  className="loi"src="Logo/music.jpg" alt="musique"></img>
            <figcaption>Musique</figcaption>
        </figure>
        <figure className="loisirs">
            <img className="loi" src="Logo/La-nouvelle-patisserie.jpg" alt="cuisine"></img>
            <figcaption>Cuisine/Pâtisserie</figcaption>
        </figure>
        <figure className="loisirs">
            <img className="loi"src="Logo/gaming-france.jpg" alt="Gaming"></img>
            <figcaption>Jeux vidéos</figcaption>
        </figure>
        <figure className="loisirs">
            <img className="loi"src="Logo/randonne(1).jpg" alt="Rando"></img>
            <figcaption>Randonnées</figcaption>
        </figure>
           </section>
        </div>
        
    )
}

export default Interets ;