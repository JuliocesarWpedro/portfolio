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
  const { translate, currentLanguage } = useLanguage();
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
        <h3 translate="no" className={styles.titleBox}>
          {project.title}
        </h3>
        <p translate="no" className={styles.descriptionBox}>
          {currentLanguage === 'en'
            ? project.description.en.text
            : project.description.pt.text}
        </p>
        <div className={styles.cardBottomWrapper}>
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
              <p translate="no">{translate('more')}</p>
              <span aria-label="More informations">
                <FaExternalLinkAlt />
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
