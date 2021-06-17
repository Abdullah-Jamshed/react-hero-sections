import React, { useState, useEffect } from "react";
import Bar from "../images/menu.svg";

const Nav = ({headingColor}) => {
  const [pageName, setPageName] = useState("home");
  const [scrollNav, setScrollNav] = useState(false);

  // HANDLER FUNCTIONS
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    if (pageName === "home") {
      window.addEventListener("scroll", changeNav);
    } else {
      setScrollNav(true);
    }
    // eslint-disable-next-line
  }, [pageName]);

  return (
    <nav className={`nav ${scrollNav ? "colBG" : "transBG"} `}>
      <div className='nav-container'>
        <h2 className='brand-name' style={{color:`${headingColor}`}}>MYBRAND</h2>
        <ul className='links'>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <img src={Bar} alt='menu-icon' className='menu-icon' />
      </div>
    </nav>
  );
};

export default Nav;
