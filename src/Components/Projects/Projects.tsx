import { useState } from 'react';
import styles from './Projects.module.scss';
import { useLanguage } from '../../hooks/useLanguage';
import CardProject from './CardProject';
import ProjectCardInProgress from './ProjectCardInProgress';
import { projects } from './project';

const Projects = () => {
  const { translate } = useLanguage();
  const [currentActiveFilter, setCurrentActiveFilter] = useState<string>('all');

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
          <button
            translate="no"
            onClick={() => {
              if (currentActiveFilter !== 'all') {
                setCurrentActiveFilter('all');
              }
            }}
            className={currentActiveFilter === 'all' ? styles.active : ''}
          >
            {translate('allprojectsFilter')}
          </button>
          <button
            translate="no"
            onClick={() => {
              if (currentActiveFilter !== 'react') {
                setCurrentActiveFilter('react');
              }
            }}
            className={currentActiveFilter === 'react' ? styles.active : ''}
          >
            React
          </button>
          <button
            translate="no"
            onClick={() => {
              if (currentActiveFilter !== 'node') {
                setCurrentActiveFilter('node');
              }
            }}
            className={currentActiveFilter === 'node' ? styles.active : ''}
          >
            Node
          </button>
          <button
            translate="no"
            onClick={() => {
              if (currentActiveFilter !== 'next') {
                setCurrentActiveFilter('next');
              }
            }}
            className={currentActiveFilter === 'next' ? styles.active : ''}
          >
            Next
          </button>
          <button
            translate="no"
            onClick={() => {
              if (currentActiveFilter !== 'javascript') {
                setCurrentActiveFilter('javascript');
              }
            }}
            className={
              currentActiveFilter === 'javascript' ? styles.active : ''
            }
          >
            Javascript
          </button>
        </div>
        <div className={styles.rightContainer}>
          {currentActiveFilter === 'all'
            ? projects.map((project, index) => (
                <CardProject key={index} project={project}></CardProject>
              ))
            : projects
                .filter(
                  (project) =>
                    project.mainCategory.toLowerCase() ===
                    currentActiveFilter.toLowerCase(),
                )
                .map((project, index) => (
                  <CardProject key={index} project={project}></CardProject>
                ))}
          <ProjectCardInProgress />
        </div>
      </div>
    </div>
  );
};

export default Projects;
