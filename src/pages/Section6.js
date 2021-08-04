import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import "../styles/heroSection6.css";

const Section6 = () => {
  const [obj, setObj] = useState({ stars: "0", moon: "0" });

  const screenScroll = () => {
    setObj({
      stars: `${window.scrollY * 0.25}px`,
      moon: `${window.scrollY * 1.5}px`,
      mountains_behind: `${window.scrollY * 0.5}px`,
      mountains_front: `${window.scrollY * 0}px`,
      headingRight: `${window.scrollY * 0.4}rem`,
      headingTop: `${window.scrollY * 0.15}rem`,
      btnTop: `${window.scrollY * 1.5}px`,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", screenScroll);
  }, []);

  return (
    <>
      <Nav headingColor='#fff' navBg='#2b1055' className='nav-parallax' />
      <div className='parallax-main-container'>
        <div className='section-parallax'>
          <img style={{ left: obj.stars }} className='stars' src='/images/stars.png' alt='stars' />
          <img style={{ top: obj.mountains_behind }} className='mountains_behind' src='/images/mountains_behind.png' alt='mountains_behind' />
          <img style={{ top: obj.moon }} className='moon' src='/images/moon.png' alt='moon' />
          <h1 style={{ marginRight: obj.headingRight, marginTop: obj.headingTop }} className='parallax-heading'>
            Moon Light
          </h1>
          <a style={{ marginTop: obj.btnTop }} className='parallax-btn' href='#ppp'>
            Explore
          </a>
          <img style={{ top: obj.mountains_front }} className='mountains_front' src='/images/mountains_front.png' alt='mountains_front' />
        </div>
        <div className='parallax-scroll-effect'>
          <h2>Parallax Scroll Effect</h2>
          <p id='ppp'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magni impedit ea sit. Deserunt doloribus impedit nemo odit, aliquid
            vero necessitatibus quidem officia doloremque quos pariatur expedita alias! Aut, harum. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptates magni impedit ea sit. Deserunt doloribus impedit nemo odit, aliquid vero necessitatibus quidem officia
            doloremque quos pariatur expedita alias! Aut, harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magni impedit ea
            sit. Deserunt doloribus impedit nemo odit, aliquid vero necessitatibus quidem officia doloremque quos pariatur expedita alias! Aut, harum.
            pariatur expedita alias! Aut, harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magni impedit ea sit. Deserunt
            doloribus impedit nemo odit, aliquid vero necessitatibus quidem officia doloremque quos pariatur expedita alias! Aut, harum.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magni impedit ea sit. Deserunt doloribus impedit nemo odit, aliquid
            vero necessitatibus quidem officia doloremque quos pariatur expedita alias! Aut, harum. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptates magni impedit ea sit. Deserunt doloribus impedit nemo odit, aliquid vero necessitatibus quidem officia
            doloremque quos pariatur expedita alias! Aut, harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magni impedit ea
            sit. Deserunt doloribus impedit nemo odit, aliquid vero necessitatibus quidem officia doloremque quos pariatur expedita alias! Aut, harum.
            pariatur expedita alias! Aut, harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magni impedit ea sit. Deserunt
            doloribus impedit nemo odit, aliquid vero necessitatibus quidem officia doloremque quos pariatur expedita alias! Aut, harum.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magni impedit ea sit. Deserunt doloribus impedit nemo odit, aliquid
            vero necessitatibus quidem officia doloremque quos pariatur expedita alias! Aut, harum. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptates magni impedit ea sit. Deserunt doloribus impedit nemo odit, aliquid vero necessitatibus quidem officia
            doloremque quos pariatur expedita alias! Aut, harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magni impedit ea
            sit. Deserunt doloribus impedit nemo odit, aliquid vero necessitatibus quidem officia doloremque quos pariatur expedita alias! Aut, harum.
            pariatur expedita alias! Aut, harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates magni impedit ea sit. Deserunt
            doloribus impedit nemo odit, aliquid vero necessitatibus quidem officia doloremque quos pariatur expedita alias! Aut, harum.
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Section6;
