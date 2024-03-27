import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { evee,evee1,evee2,evee3 } from '../assets'; // Assuming evee is an image import
import sh2 from '../assets/a.png';
import sh3 from '../assets/a.png';
import sh4 from '../assets/a.png';
import './OurService.css'; // Assuming OurService.css styles the component
import styles, { layout } from '../style'; // Assuming styles and layout are imported correctly
import Navbar from './Navbar';
import Footer from './Footer';

const OurService = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const serviceImages = [
 
    evee1, 
    evee2,
    evee3
    
  ];

  const handleImageChange = () => {
    const newIndex = (currentImageIndex + 1) % serviceImages.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(handleImageChange, 2000); // Change image every 2 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  
  return (
    <div>

      <div className='ourservice'>

        <Container maxWidth="lg">

          <Navbar />
          <h2 className={`${styles.flexCenter} ${styles.heading3} `}>
            Our Service
          </h2>
          <p className='ourservicep'>
            Our dedicated team of experts is enthusiastic about conceptualizing,
            coordinating, and delivering a wide range of indoor and outdoor
            events, spanning from concerts, fashion shows, and sports activities
            to poetry programs, campaigns, and more. As a socially conscious
            company, we have gained a reputation for organizing impactful social
            events that aim to bring positive change and benefit communities.
          </p>

          <div className='sban'>
            <div className="service-container">
            <img
                src={serviceImages[currentImageIndex]}
                alt="Service 1"
                className="service-image"
              />
              <div className="service-content">
                <h2 className={`${styles.flexCenter} ${styles.heading3}`}>
                  Events
                </h2>
                <p>
                  Our passionate team excels in initiating, planning, and
                  executing indoor and outdoor events of all sizes. From concerts
                  and fashion shows to sporting activities and poetry programs,
                  we craft memorable experiences. As a socially responsible
                  firm, we also organize events that benefit communities.
                </p>
              </div>
            </div>

            <div className="service-container">
              <div className="service-content">
                <h2 className={`${styles.flexCenter} ${styles.heading3} `}>
                  Corporate Communications
                </h2>
                <p>
                  Our comprehensive corporate communications services encompass
                  content development for various communication materials, media
                  liaising, speechwriting, press releases, magazine and newspaper
                  content creation, website development, social media
                  management, and design and printing of marketing materials.
                </p>
              </div>
              <img
                src={serviceImages[currentImageIndex]}
                alt="Service 1"
                className="service-image"
              />
            </div>

            <div className="service-container">
            <img
                src={serviceImages[currentImageIndex]}
                alt="Service 1"
                className="service-image"
              />
              <div className="service-content">
                <h2 className={`${styles.flexCenter} ${styles.heading3}`}>
                Media Production:
                </h2>
                <p>
                Using state-of-the-art audiovisual equipment, we specialize in professional video and audio production for enterprises, campaigns, and events. Our expertise extends to documentaries, feature films, short films, radio and television advertisements, and more.
                </p>
              </div>
            </div>

            <div className="service-container">
              <div className="service-content">
                <h2 className={`${styles.flexCenter} ${styles.heading3} `}>
                Innovation & Technology:
                </h2>
                <p>
                We offer cutting-edge website development and management services, catering to companies of all sizes. Additionally, we excel in optimizing social media accounts to enhance interaction and achieve superior results.
                </p>
              </div>
              <img
                src={serviceImages[currentImageIndex]}
                alt="Service 1"
                className="service-image"
              />
            </div>


          </div>
          <Footer />
        </Container>

      </div>
    </div>
  );
};

export default OurService;