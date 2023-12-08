import React from 'react';
import styles from './CardProject.module.scss';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from './project';
import { useNavigate } from 'react-router-dom';

interface CardProjectProps {
  project: Project;
}

const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  const navigate = useNavigate();
  function formatRoute(title: string): string {
    return title.trim().toLowerCase().replace(/\s+/g, '-');
  }
  const handleLinkClick = () => {
    navigate(`/project/:${formatRoute(project.title)}`);
  };

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
          <button onClick={handleLinkClick} className={styles.moreInfos}>
            <p>More</p>
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
