import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './ProjectCardInProgress.module.scss';
import { FaLinkedin } from 'react-icons/fa';

const ProjectCardInProgress = () => {
  return (
    <article className={styles.cardProject}>
      <div className={styles.loadingElement}></div>
      <div className={styles.cardProjectBoxTexts}>
        <h3 className={styles.titleBox}>Projeto em Andamento...</h3>
        <p className={styles.descriptionBox}>
          Um novo projeto está sendo realizado neste momento...
        </p>
        <div className={styles.cardBottomBox}>
          <div className={styles.boxLinks}>
            <a target="__blank" href="https://github.com/JuliocesarWpedro">
              <FaGithub />
            </a>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-wanderosfky-977301297/"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCardInProgress;
