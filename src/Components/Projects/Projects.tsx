import React from 'react';
import styles from './Projects.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useLanguage } from '../../hooks/useLanguage';
import CardProject from './CardProject';
import ProjectCardInProgress from './ProjectCardInProgress';

interface Project {
  srcImage: string;
  altImage: string;
  urlGitHub: string;
  urlProject: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    srcImage: '/AnimaisFantásticos.png',
    description: 'Projeto feito com Javascript',
    title: 'Animais Fantásticos',
    altImage: 'Projeto AnimaisFantásticos',
    urlGitHub: 'https://github.com/JuliocesarWpedro/animais-fantasticos',
    urlProject:
      'https://animais-fantasticos-git-master-julio-cesar-w-pedros-projects.vercel.app/',
  },
  {
    srcImage: '/Pokedex.png',
    title: 'Pokedex',
    description: 'Projeto realizado com Html, Css, React, Typescript',
    altImage: 'Projeto Pokedex',
    urlGitHub: 'https://github.com/JuliocesarWpedro/pokedexNext',
    urlProject: 'https://pokedex-next-julio.vercel.app/',
  },
  {
    srcImage: '/Pokedex.png',
    title: 'Pokedex',
    description: 'Projeto feito com React e Next',
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
      <div className={styles.listProjects}>
        <div className={styles.leftContainer}>
          <button className={styles.active}>All Projects</button>
          <button>Javascript</button>
          <button>Typescript</button>
          <button>React</button>
          <button>Node</button>
          <button>Scss</button>
        </div>
        <div className={styles.rightContainer}>
          {projects.map((project, index) => {
            return <CardProject key={index} project={project}></CardProject>;
          })}
          <ProjectCardInProgress />
        </div>
      </div>
    </div>
  );
};

export default Projects;
