import React from 'react';
import './AboutUs.css';
import Footer from './Footer';
import CardDeal from './CardDeal';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <section className="mission">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra leo ac magna varius, eget vehicula dui vehicula. Donec eget ligula auctor, efficitur lorem et, fermentum velit.</p>
        </section>
      
      </main>
      <CardDeal/>
  <Footer/>
    </div>
  );
}

export default AboutUs;
