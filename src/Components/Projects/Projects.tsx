import React from 'react';
import styles from './Projects.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MdOutlineArrowLeft } from 'react-icons/md';
import { MdOutlineArrowRight } from 'react-icons/md';
import { Pagination, Navigation } from 'swiper/modules';
import { useLanguage } from '../../hooks/useLanguage';

interface Project {
  srcImage: string;
  altImage: string;
  urlGitHub: string;
  urlProject: string;
}

const projects: Project[] = [
  {
    srcImage: '/AnimaisFantásticos.png',
    altImage: 'Projeto AnimaisFantásticos',
    urlGitHub: 'https://github.com/JuliocesarWpedro/animais-fantasticos',
    urlProject:
      'https://animais-fantasticos-git-master-julio-cesar-w-pedros-projects.vercel.app/',
  },
  {
    srcImage: '/Pokedex.png',
    altImage: 'Projeto Pokedex',
    urlGitHub: 'https://github.com/JuliocesarWpedro/pokedexNext',
    urlProject: 'https://pokedex-next-julio.vercel.app/',
  },
  {
    srcImage: '/Pokedex.png',
    altImage: 'Projeto Pokedex',
    urlGitHub: 'https://github.com/JuliocesarWpedro/pokedexNext',
    urlProject: 'https://pokedex-next-julio.vercel.app/',
  },
  {
    srcImage: '/Pokedex.png',
    altImage: 'Projeto Pokedex',
    urlGitHub: 'https://github.com/JuliocesarWpedro/pokedexNext',
    urlProject: 'https://pokedex-next-julio.vercel.app/',
  },
];

const Projects = () => {
  const { translate } = useLanguage();
  return (
    <div id="projects" className={styles.projectsContainer}>
      <div className={styles.identificationContainer}>
        <h1 className={styles.titleProjectContainer}>
          {translate('projectTitle')}
        </h1>
        <a href="#contact"> {translate('buttonContact')}</a>
      </div>
      <div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          scrollbar={{
            hide: true,
          }}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project, index) => {
            return (
              <SwiperSlide key={index} className={styles.swiperSlideCard}>
                <img src={project.srcImage} alt={project.altImage} />
                <div className={styles.projectsSlideLinks}>
                  <a
                    rel="noreferrer noopener"
                    target="__blank"
                    href={project.urlProject}
                  >
                    {translate('viewProject').toUpperCase()}
                  </a>
                  <a target="__blank" href={project.urlGitHub}>
                    {translate('viewCode').toUpperCase()}
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
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
