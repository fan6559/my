import React from "react";
import "./About.css";


function About() {
    return (
        <div id="about" className="about">
            <div className="video-background">
                <video autoPlay loop muted className="video">
                    <source src={require("../../Components/Videos/mont.mp4")} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content">
                <div className="row">
                    <div className="three columns">
                        <img className="prof" src="https://pbs.twimg.com/profile_images/1696253647611412480/P7DipGAp_400x400.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <p>Je m'immerge dans les mondes captivants des jeux vidéo, capture des moments magiques à travers la photographie et donne vie à des idées numériques grâce au développement web.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
