import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bar from "../images/menu.svg";

import { FaChevronDown } from "react-icons/fa";

const Nav = ({ headingColor, navBg }) => {
  // eslint-disable-next-line
  const [pageName, setPageName] = useState("home");
  const [scrollNav, setScrollNav] = useState(false);
  const [dropdownShow, setDropdownShow] = useState(false);

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
    <nav className={`nav`} style={{ background: `${scrollNav ? `${navBg}` : "transparent"} ` }}>
      <div className='nav-container'>
        <h2 className='brand-name' style={{ color: `${headingColor}` }}>
          MYBRAND
        </h2>
        <ul className='links'>
          <li>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='link' to='/about'>
              About
            </Link>
          </li>
          <li className='link' onClick={() => setDropdownShow(!dropdownShow)}>
            Sections <FaChevronDown className='dropdownIcon' />
            {dropdownShow && (
              <div className='dropdown'>
                <ul className='dropdown-content'>
                  <li>
                    <Link className='dropdown-item' to='/hero1'>
                      hero1
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/hero2'>
                      hero2
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/hero3'>
                      hero3
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        <img src={Bar} alt='menu-icon' className='menu-icon' />
      </div>
    </nav>
  );
};

export default Nav;
