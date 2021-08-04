import React from "react";
import Nav from "../components/Nav";
import "../styles/heroSection6.css";

const Section6 = () => {
  return (
    <>
      <Nav headingColor='#fff' navBg='#2b1055' className='nav-parallax' />
      <div className='parallax-main-container'>
        <div className='section-parallax'>
          <img className='stars' src='/images/stars.png' alt='stars' />
          <img className='mountains_behind' src='/images/mountains_behind.png' alt='mountains_behind' />
          <img className='moon' src='/images/moon.png' alt='moon' />
          <h1 className='parallax-heading'>Moon Light</h1>
          <img className='mountains_front' src='/images/mountains_front.png' alt='mountains_front' />
        </div>
      </div>
    </>
  );
};

export default Section6;
