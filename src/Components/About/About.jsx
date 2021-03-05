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
            <p>Je m'appelle Fanny j'ai 23 ans et j'habite Anglet qui se situe sur la côte basque. Après un an de formation à la Wild Code School de Biarritz, je recherche aujourd'hui une entreprise pour m'accueillir en tant qu'alternante pour la préparation de mon diplôme de Développeuse Web avec OpenClassrooms.
            </p>
        </div>
        </div>
        </div>
    )
};

export default About;