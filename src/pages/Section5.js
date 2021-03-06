import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import "../styles/heroSection5.css";

const Section5 = () => {
  return (
    <>
      <Nav headingColor='#2196f3' navBg='#000' />

      <div className='main1'>
        <div className='rot-div'>
          <h1>UNDER CONSTRUCTION !</h1>
          <div className='wave-2'></div>
        </div>
      </div>

      <div className='main-cont'>
        <div className='sq-deg'></div>
        <div className='sq-deg1'>
          <div className='cubr'></div>
        </div>
      </div>

      <div className='main-cont-3'>
        <div className='tri'>
          <div className='sq-run'></div>
        </div>
        <div className='tri2'></div>
      </div>

      <div className='main2'>
        <div className='cards-container'>
          <div className='card'>
            <div className='img-box' data-text='Design'>
              <img src='/images/design.png' alt='desgin' />
            </div>
            <div className='card-content'>
              <div>
                <h3>Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic dicta doloribus error repellendus eiu</p>
                <Link to='#'>Read More</Link>
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='img-box' data-text='Code'>
              <img src='/images/code.png' alt='code' />
            </div>
            <div className='card-content'>
              <div>
                <h3>Code</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic dicta doloribus error repellendus eiu</p>
                <Link to='#'>Read More</Link>
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='img-box' data-text='Launch'>
              <img src='/images/startup.png' alt='Launch' />
            </div>
            <div className='card-content'>
              <div>
                <h3>Launch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic dicta doloribus error repellendus eiu</p>
                <Link to='#'>Read More</Link>
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='img-box' data-text='Earn'>
              <img src='/images/money.png' alt='earn' />
            </div>
            <div className='card-content'>
              <div>
                <h3>Earn</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic dicta doloribus error repellendus eiu</p>
                <Link to='#'>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='main3'>
        <div className='loader'>
          <span style={{ "--i": 1 }} className='circle'></span>
          <span style={{ "--i": 2 }} className='circle'></span>
          <span style={{ "--i": 3 }} className='circle'></span>
          <span style={{ "--i": 4 }} className='circle'></span>
          <span style={{ "--i": 5 }} className='circle'></span>
          <span style={{ "--i": 6 }} className='circle'></span>
        </div>
      </div>
    </>
  );
};

export default Section5;
