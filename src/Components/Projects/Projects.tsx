import React from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.identificationContainer}>
        <h1 className={styles.titleProjectContainer}>Projects</h1>
        <button>Contact-me</button>
      </div>
      <div className={styles.projectsSwiper}></div>
    </div>
  );
};

export default Projects;
