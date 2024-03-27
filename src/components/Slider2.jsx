import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Slider.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faGem, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function Slider() {
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faFire} size="2x" color="yellow" /> {/* Energetic icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }} >Honesty</h1>
            <p style={{ textAlign: "center", padding: "2rem" }} >Transparency is the foundation of trust. We believe in showcasing our true selves to gain the trust, understanding, and support of our clients.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faGem} size="2x" color="yellow" /> {/* Perfect icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }}>Consistency</h1>
            <p style={{ textAlign: "center", padding: "2rem" }} >We strive for consistency, ensuring that we consistently meet the expectations of our clientele. While maintaining our standards, we embrace positive change.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faHandshake} size="2x" color="yellow" /> {/* Dedicated icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }} >Timeliness</h1>
            <p  style={{ textAlign: "center", padding: "2rem" }} >Time is of the essence. We not only deliver on time but also prioritize punctuality in all our endeavors.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faFire} size="2x" color="yellow" /> {/* Energetic icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }} >Respect</h1>
            <p style={{ textAlign: "center", padding: "2rem" }} >We value our clients, employees, and partners. Mutual respect forms the basis of successful collaborations.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faGem} size="2x" color="yellow" /> {/* Perfect icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }} >Inclusivity</h1>
            <p style={{ textAlign: "center", padding: "2rem" }}>We celebrate diversity and recognize its positive impact on our work and relationships.</p>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
