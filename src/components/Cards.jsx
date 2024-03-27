import React, { useState, useEffect } from 'react';
import ph1 from '../assets/ph1.jpg';
import ph2 from '../assets/ph2.jpg';
import ph3 from '../assets/ph3.jpg';
import ph4 from '../assets/ph4.jpg';
import ph5 from '../assets/ph5.jpg';
import ph6 from '../assets/ph6.jpg';
import { evee } from '../assets';
import { evee1 } from '../assets';
import { evee2 } from '../assets';
import { evee3 } from '../assets';
import  evee4 from '../assets/evee4.jpg';
import  evee5 from '../assets/evee5.jpg';
import  evee6 from '../assets/evee6.jpg';
import  evee7 from '../assets/evee7.jpg';
import './Cards.css';
import Button from './Button';
import styles, { layout } from "../style";

const Cards = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const images = [ph1, ph2, ph3, ph4, ph5, ph3];
  const images1 = [evee1, evee2, evee3, evee4, evee5,ph6];
  const images2 = [evee1, evee2, evee3, evee4, evee5,ph6];
  const images3 = [evee6, evee7, evee3, ph4, ph5, ph3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false); // Trigger fade out effect
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        setFadeIn(true); // Trigger fade in effect after fade out
      }, 500); // Wait for 0.5s before changing the image
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  return (
    <section>
      <div className='header'>
        <h2 className={styles.heading2}>Our Works <br className="sm:block hidden" /> </h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={images[currentImageIndex]}
            className={`w-100 shadow-1-strong rounded mb-4 ${fadeIn ? 'fade-in' : 'fade-out'}`}
            alt='Boat on Calm Water'
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
        <img
            src={images1[currentImageIndex]}
            className={`w-100 shadow-1-strong rounded mb-4 ${fadeIn ? 'fade-in' : 'fade-out'}`}
            alt='Boat on Calm Water'
          />

<img
            src={images2[currentImageIndex]}
            className={`w-100 shadow-1-strong rounded mb-4 ${fadeIn ? 'fade-in' : 'fade-out'}`}
            alt='Boat on Calm Water'
          />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
      <img
            src={images[currentImageIndex]}
            className={`w-100 shadow-1-strong rounded mb-4 ${fadeIn ? 'fade-in' : 'fade-out'}`}
            alt='Boat on Calm Water'
          />     
    </div>
      </div>
    </section>
  );
};

export default Cards;
