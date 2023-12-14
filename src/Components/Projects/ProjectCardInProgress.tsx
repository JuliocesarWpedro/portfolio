import { FaGithub } from 'react-icons/fa';
import styles from './ProjectCardInProgress.module.scss';
import { FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../hooks/useLanguage';

const ProjectCardInProgress = () => {
  const { translate } = useLanguage();

  return (
    <article className={styles.cardProject}>
      <div className={styles.loadingElement}></div>
      <div className={styles.cardProjectBoxTexts}>
        <h2 className={styles.titleBox}>{translate('projectInProgress')}</h2>
        <p className={styles.descriptionBox}>
          {translate('projectDescription')}
        </p>
      </div>
      <div className={styles.cardBottomBox}>
        <div className={styles.boxLinks}>
          <a target="__blank" href="https://github.com/JuliocesarWpedro">
            <span aria-label="GitHub Link">
              <FaGithub />
            </span>
          </a>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-wanderosfky-977301297/"
          >
            <span aria-label="Linkedin Link">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCardInProgress;
