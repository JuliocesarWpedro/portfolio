import React from 'react';
import styles from './CardProject.module.scss';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  srcImage: string;
  altImage: string;
  urlGitHub: string;
  urlProject: string;
  title: string;
  description: string;
}

interface CardProjectProps {
  project: Project;
}

const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  return (
    <article className={styles.cardProject}>
      <img src={project.srcImage} alt={project.altImage} />
      <div className={styles.cardProjectBoxTexts}>
        <h3 className={styles.titleBox}>{project.title}</h3>
        <p className={styles.descriptionBox}>{project.description}</p>
        <div className={styles.cardBottomBox}>
          <div className={styles.boxLinks}>
            <a target="__blank" href={project.urlProject}>
              <CgWebsite />
            </a>
            <a target="__blank" href={project.urlGitHub}>
              <FaGithub />
            </a>
          </div>
          <a target="__blank" className={styles.moreInfos}>
            <p>More</p>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
