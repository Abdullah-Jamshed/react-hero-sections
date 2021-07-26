import React from "react";
import "../styles/heroSection4.css";

const Section4 = () => {
  return (
    <div className='main'>
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
        <a href='#' className='neon-btn'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Hover Me
        </a>
      </div>
      <div className=''>
        <a href='#' className='neon-btn2'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Hover Me
        </a>
      </div>

      <div className='box'>
        <h3 className='heading'> Loading</h3>
      </div>
    </div>
  );
};

export default Section4;
