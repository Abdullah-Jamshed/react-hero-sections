import React from "react";
import Image from "../images/herobg.svg";

import styles from "../styles/sass/heroSection1.module.scss";

const HeroSection1 = () => {
  const text = `Lorem ips o eum illo cupiditate accusamus, fugiat nostrum quaerat. Dignissimos, officiis error amet fuga enim sequi. Suscipit ratione odit labore cum, praesentium sequi!`;
  const words = text.split(" ");
  return (
    <div className={`${styles.heroSection}`}>
      <div className={`${styles.heroContent}`}>
        <div>
          <h1 style={{ marginBottom: "10px", fontSize: "4rem" }} className={`${(styles.animated, styles.fadeIn)} `}>
            Heading
          </h1>
          <h2 style={{ marginBottom: "20px" }}>
            {"Lorem ips o eum illo cupiditate accusamus, ".split(" ").map((word, i) => (
              <span className={`${styles.animated} ${styles.fadeIn} `} style={{ animationDelay: `${i * 0.1}s` }}>
                {word + ` `}
                
              </span>
            ))}
          </h2>
          <p className={`${styles.text}`}>
            {words.map((word, i) => (
              <span key={i} className={`${styles.animated} ${styles.fadeIn} `} style={{ animationDelay: `${i * 0.1}s` }}>
                {word + ` `}
              </span>
            ))}
          </p>
        </div>
        <div className={`${styles.imageContainer}`}>
          <img src={Image} alt='bg' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
