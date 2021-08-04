import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "../styles/heroSection4.css";

const Section4 = () => {
  return (
    <>
      <Nav headingColor='#2196f3' navBg='#111' />
      <div className='main'>
        <div className='container'>
          <div className='outer button'>
            <button>Hover Me</button>
            <span></span>
            <span></span>
          </div>
          <div className='outer circle'>
            <button>Hover Me</button>
            <span></span>
            <span></span>
          </div>
          <div className=''>
            <Link to='#' className='neon-btn'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Hover Me
            </Link>
          </div>
          <div className=''>
            <Link to='#' className='neon-btn2'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Hover Me
            </Link>
          </div>

          <div className='box'>
            <h3 className='heading'> Loading</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
