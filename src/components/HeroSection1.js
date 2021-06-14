import React from "react";
import Image from "../images/herobg.svg";

import "../styles/herosection1.css"


const HeroSection1 = () => {
  const text = `Lorem ips o eum illo cupiditate accusamus, fugiat nostrum quaerat. Dignissimos, officiis error amet fuga enim sequi. Suscipit ratione odit labore cum, praesentium sequi!`;
  const words = text.split(" ");
  return (
    <div className='heroSection'>
      <div className='heroContent'>
        <div>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }} className='animated fadeIn'>
            Heading
          </h1>
          <h2 style={{ marginBottom: "20px" }}>
            {"Lorem ips o eum illo cupiditate accusamus, ".split(" ").map((word, i) => (
              <span className='animated fadeIn' style={{ animationDelay: `${i * 0.1}s` }}>
                {word + ` `}
              </span>
            ))}
          </h2>
          <p className='text'>
            {words.map((word, i) => (
              <span className='animated fadeIn' style={{ animationDelay: `${i * 0.1}s` }}>
                {word + ` `}
              </span>
            ))}
          </p>
        </div>
        <div className='imageContainer'>
          <img src={Image} alt='bg' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
