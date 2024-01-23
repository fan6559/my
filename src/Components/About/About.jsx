import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      <video autoPlay muted playsInline loop className="background-video">
        <source src={require("../../Components/Videos/mont.mp4")} type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de vidéos.
      </video>
      <div className="content">
        <div className="row">
          <div className="three columns">
            <img
              className="prof"
              src="https://pbs.twimg.com/profile_images/1696253647611412480/P7DipGAp_400x400.jpg"
              alt=""
            />
          </div>
          <div className="nine columns main-col">
            <p>
              Je m'immerge dans les mondes captivants des jeux vidéo, capture
              des moments magiques à travers la photographie et donne vie à des
              idées numériques grâce au développement web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

