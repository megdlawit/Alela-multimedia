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
            <h1 style={{ fontSize: "1.5rem" }} >Energetic</h1>
            <p style={{ textAlign: "center", padding: "2rem" }} >We are fueled by enthusiasm and unwavering determination in everything we undertake.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faGem} size="2x" color="yellow" /> {/* Perfect icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }}>Perfect</h1>
            <p style={{ textAlign: "center", padding: "2rem" }} >Striving for perfection is at the core of our work. We pursue excellence in every aspect, regardless of the size or complexity.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faHandshake} size="2x" color="yellow" /> {/* Dedicated icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }} >Dedicated</h1>
            <p  style={{ textAlign: "center", padding: "2rem" }} >Our clients and their goals hold great significance to us. We devote ample time and energy to ensure their success.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faFire} size="2x" color="yellow" /> {/* Energetic icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }} >Energetic</h1>
            <p style={{ textAlign: "center", padding: "2rem" }} >We are fueled by enthusiasm and unwavering determination in everything we undertake.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faGem} size="2x" color="yellow" /> {/* Perfect icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }} >Perfect</h1>
            <p style={{ textAlign: "center", padding: "2rem" }}>Striving for perfection is at the core of our work. We pursue excellence in every aspect, regardless of the size or complexity.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-icon">
              <FontAwesomeIcon icon={faHandshake} size="2x" color="yellow" /> {/* Dedicated icon */}
            </div>
            <h1 style={{ fontSize: "1.5rem" }} >Dedicated</h1>
            <p style={{ textAlign: "center", padding: "2rem" }}>Our clients and their goals hold great significance to us. We devote ample time and energy to ensure their success.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
