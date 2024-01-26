import React, { useState, useEffect } from "react";
import "../Header/Header.css";

function Header() {

  const [greeting, setGreeting] = useState("Bonjour 😎");


  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return hours * 60 + minutes; 
  };

  
  useEffect(() => {
    const updateGreeting = () => {
      const currentTime = getCurrentTime();
      const eveningTime = 17 * 60 + 30; 
      if (currentTime >= eveningTime) {
        setGreeting('Bonsoir 😴');
      } else {
        setGreeting('Bonjour 😎');
      }
    };

    updateGreeting();
    const intervalId = setInterval(updateGreeting, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <div id="header" className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{greeting}</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;