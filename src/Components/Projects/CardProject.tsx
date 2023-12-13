import { FC } from 'react';
import styles from './CardProject.module.scss';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from './project';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

interface CardProjectProps {
  project: Project;
}

const CardProject: FC<CardProjectProps> = ({ project }) => {
  const { translate } = useLanguage();
  const navigate = useNavigate();
  function formatRoute(title: string): string {
    return title.trim().toLowerCase().replace(/\s+/g, '-');
  }
  const handleLinkClick = () => {
    navigate(`/project/:${formatRoute(project.title)}`);
  };

  return (
    <article className={styles.cardProject}>
      <a href={project.urlProject} target="__blank">
        <img
          loading="lazy"
          width="1200"
          height="800"
          rel="preload"
          src={project.srcImage}
          alt={project.altImage}
        />
      </a>
      <div className={styles.cardProjectBoxTexts}>
        <h3 className={styles.titleBox}>{project.title}</h3>
        <p className={styles.descriptionBox}>{project.description}</p>
        <div className={styles.cardBottomBox}>
          <div className={styles.boxLinks}>
            <a target="__blank" href={project.urlProject}>
              <span aria-label="Link to Website">
                <CgWebsite />
              </span>
            </a>
            <a target="__blank" href={project.urlGitHub}>
              <span aria-label="Link to Github">
                <FaGithub />
              </span>
            </a>
          </div>
          <button onClick={handleLinkClick} className={styles.moreInfos}>
            <p>{translate('more')}</p>
            <span aria-label="More informations">
              <FaExternalLinkAlt />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
