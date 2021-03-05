import React from "react";
import "./Competences.css";


function Competences (){
return(
    <div id="competences" className="competences">
        <div className="wrap">
   <div className="section-title wow fadeInUp">
     <h1>Compétences</h1>
     <span className="border"></span>
   </div>
   <article className="row">
     <ul>
       <li className="html">
         <em>HTML/HTML5</em>
         <div>
           <span className="animated fadeInLeft"></span>
         </div>
       </li>
       <li className="css">
         <em>CSS/CSS3</em>
         <div>
           <span className="animated fadeInLeft"></span>
         </div>
       </li>
       <li className="javascript">
         <em>Javascript</em>
         <div>
           <span className="animated fadeInLeft"></span>
         </div>
       </li>
       <li className="reactjs">
         <em>ReactJs</em>
         <div>
           <span className="animated fadeInLeft"></span>
         </div>
       </li>
     </ul>
   </article>
   <article className="row">
     <ul>
       <li className="nodemy">
         <em>NodeJs/MySQL</em>
         <div>
           <span class="animated fadeInLeft"></span>
         </div>
       </li>
       <li className="reactstrap">
         <em>Reactstrap</em>
         <div>
           <span className="animated fadeInLeft"></span>
         </div>
       </li>
       <li className="semantic">
         <em>Semantic-Ui React</em>
         <div>
           <span className="animated fadeInLeft"></span>
         </div>
       </li>
       <li className="adobe">
         <em>Adobe Illustrator</em>
         <div>
           <span className="animated fadeInLeft"></span>
         </div>
       </li>
     </ul>
   </article>
 </div>
            </div>
)           
}

export default Competences; 