import React from "react";

import "./About.css"

function About() {
    return (
        <div id="about" className="about">
      <div className="row">
          <div className="three columns">
            <img className="prof" src="https://media-exp1.licdn.com/dms/image/C4D03AQE4p9Vm7IPMPg/profile-displayphoto-shrink_200_200/0/1611690552506?e=1617235200&v=beta&t=SH8ps3Y_278ApMZLXzjv0gtPmFhR2oNxLbOzbeLSZPw" alt="" />
          </div>
          <div className="nine columns main-col">
            <p>Je m'appelle Fanny j'ai 23 ans, j'habite Anglet. Passionnée par le numérique et les jeux vidéos, j'ai entrepris une formation de développeur web et mobile (Wild Code School, Biarritz). Je souhaite aujourd'hui poursuivre le développement de mes projets web et me mettre au service d'un manager qui me donnerait ma chance pour un premier emploi (livraison, grande distribution, accueil...)
            </p>
        </div>
        </div>
        </div>
    )
};

export default About;