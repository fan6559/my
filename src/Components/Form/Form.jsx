import React from "react";
import "./Form.css"


function Form () {
    return(
     <div  id="contact" className="tact">
         <div className="contact">
         <h2>Contactez-moi !</h2>
         </div>
         <div className="embed-responsive embed-responsive-16by9">
<iframe className="embed-responsive-item" style={{borderRadius:"16px",width:"98%"}}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46314.00970175292!2d-1.5542904196120277!3d43.489283106434286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51401cdc979735%3A0xbdbc5ff838b9ab48!2s64600%20Anglet!5e0!3m2!1sfr!2sfr!4v1612359710489!5m2!1sfr!2sfr" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
</div>
            <div className="social">
                <a href="mailto:fanny.camus@outlook.fr">
                    <img src="/Logo/mail.png" alt="Mail"></img>   
                    </a>
                <a href="tel:+33619783884">
                    <img src="/Logo/phone-call.png" alt="tel"></img>
                    </a>
                <a href="https://www.linkedin.com/in/fanny-camus-js/" target="_blank">
                    <img src="/Logo/linkedin.png" alt="Logo Lk"></img>
                    </a>
                <a href="https://github.com/fan6559" target="_blank">
                    <img src="/Logo/github.png" alt="Logo Yt"></img>
                    </a>
                    <a href="https://twitter.com/fann_game" target="_blank">
                    <img src="/Logo/twitter.png" alt="Logo Yt"></img>
                    </a>
            </div>
      </div>
   
    )
}

export default Form; 