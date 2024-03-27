import React from 'react';
import './AboutUs.css';
import Footer from './Footer';
import CardDeal from './CardDeal';
import styles, { layout } from "../style";
import Navbar from './Navbar';
import Slider from './Slider';
import { Slider2 } from '.';
import Container from '@mui/material/Container';
import { evee,evee1,evee2,evee3 } from '../assets'; // Assuming evee is an image import
import sh2 from '../assets/a.png';
import m from '../assets/m.png';
import sh4 from '../assets/a.png';
import './OurService.css'; // Assuming OurService.css styles the component
 


const AboutUs = () => {
  return (
    
    <div className="about">
   
    <div className="about-us">
    <Navbar/>
 <h2 className={`${styles.flexCenter} ${styles.heading2} ` }>
        About Us 
      </h2>
      <main>
        <section className="mission">
          <p>Established in 2017, alela multimedia is an emerging leader in media productions, event planning, and corporate communications solutions. Our diverse range of services caters to non-governmental organizations, private firms, and our own successful in-house events.
We take pride in organizing the annual Lomi'na Harmonica Concert+, a vibrant festival-like event dedicated to Timket or The Finding of the True Cross. Additionally, in collaboration with various venues, artists and sponsors, we host Teguadz Arts, a monthly artistry event providing a platform for both established and aspiring poets and artists.
</p>
        </section>
      
      </main>
      <CardDeal/>
      <h2 className={`${styles.flexCenter} ${styles.heading2} ` }>
      Core Values
      </h2>
      <Slider2 />
      <div className='ourservice'>
  {/* <h2 className={`${styles.flexCenter} ${styles.heading3} `}>
    Vision
  </h2> */}
  <div className='sban'>
    <div className="service-container">
    <img
        src={sh2}
        alt="Service 1"
        className="service-image"
      />
      <div className="service-content">
        {/* <h2 className={`${styles.flexCenter} ${styles.heading3}`}>
        Vision
        </h2> */}
        <p>
        Our vision is to become one of the leading communications, public relations (PR),
         and marketing companies in East Africa within the next decade.
        </p>
      </div>
    </div>
    <div className="service-container">

      <div className="service-content">
        {/* <h2 className={`${styles.flexCenter} ${styles.heading3}`}>
        Mission
        </h2> */}
        <p>
        We are committed to delivering high-quality communications, PR, and marketing services to our esteemed customers. Through strategic planning, cutting-edge technology, and a team of industry professionals, we aim to exceed expectations.
        </p>
      </div>
      <img
        src={m}
        alt="Service 1"
        className="service-image"
      />
    </div>
  </div>
</div>
  <Footer/>
    </div>
    </div>
  );
}

export default AboutUs;
