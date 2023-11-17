import React from 'react';
import styles from './Projects.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MdOutlineArrowLeft } from 'react-icons/md';
import { MdOutlineArrowRight } from 'react-icons/md';

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from 'swiper/modules';

const Projects = () => {
  return (
    <div id="projects" className={styles.projectsContainer}>
      <div className={styles.identificationContainer}>
        <h1 className={styles.titleProjectContainer}>Projects</h1>
        <button>Contact-me</button>
      </div>
      <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{ delay: 5000 }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>{' '}
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/AnimaisFantásticos.png" alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <MdOutlineArrowLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <MdOutlineArrowRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
