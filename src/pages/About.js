import React from "react";
import Nav from "../components/Nav";

const About = () => {
  return (
    <>
      <Nav navBg='#000' headingColor='#fff' />
      <div className='about-container'>
        <div className="about-content">
          <h1>About</h1>
          <p>This is site for hero sections and diffrent other component for later use</p>
        </div>
      </div>
    </>
  );
};

export default About;
