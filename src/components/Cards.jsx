import React from 'react';
import ph1 from '../assets/ph1.jpg';
import ph2 from '../assets/ph2.jpg';
import ph3 from '../assets/ph3.jpg';
import ph4 from '../assets/ph4.jpg';
import ph5 from '../assets/ph5.jpg';
import ph6 from '../assets/ph6.jpg';
import './Cards.css';
import Button from './Button';
import styles, { layout } from "../style";
const Cards = () => (
  <section>
    <div className='header'>
     <h2 className={styles.heading2} >
        Our Works <br className="sm:block hidden" /> 
      </h2>
      </div>
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src={ph1}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={ph6}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src={ph6}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={ph5}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />


      </div>
    </div>

  </section>
);

export default Cards;
