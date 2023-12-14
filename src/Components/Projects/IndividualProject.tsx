import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import HeaderIndividualProjects from '../Header/HeaderIndividualProjects';
import ParticlesContainer from '../ParticlesContainer/ParticlesContainer';
import styles from './IndividualProject.module.scss';
import { useParams } from 'react-router-dom';
import { Project, projects } from './project';
import { PiKeyReturnFill } from 'react-icons/pi';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { FaNode } from 'react-icons/fa';
import SaasIcon from '../../SvgComponents/Sass';
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { useLanguage } from '../../hooks/useLanguage';

const IndividualProject = () => {
  const { translate, currentLanguage } = useLanguage();
  const { projectName } = useParams();
  const projectname = projectName?.substring(1).replace(/-/g, '').trim();

  const filteredProjects = projects.filter(
    (project: Project) =>
      project.title.replace(/\s+/g, '').toLowerCase() === projectname,
  );

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <>
      <ParticlesContainer />
      <HeaderIndividualProjects />
      <div className={styles.ProjectContainer}>
        {filteredProjects.map((project: Project, index) => (
          <div
            style={{
              position: 'relative',
              zIndex: '1',
            }}
            key={index}
          >
            <div className={styles.ContainerProject}>
              <h3 translate="no">{project.title}</h3>
              <a translate="no" href="/#projects">
                <p>{translate('return')}</p>
                <PiKeyReturnFill alt="Return" />
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <a href={project.urlProject} target="__blank">
                <img
                  rel="preload"
                  src={project.srcImage}
                  alt={project.altImage}
                />
              </a>
              <p translate="no" className={styles.textDescriptionProject}>
                {currentLanguage === 'en'
                  ? project.description.en.text
                  : project.description.pt.text}
              </p>
              <h4 translate="no" className={styles.titleOtherCategories}>
                {translate('TechnologiesUsed')}
              </h4>
              <div className={styles.otherCategories}>
                <span translate="no" className={styles.spanCategory}>
                  {project.mainCategory.toLowerCase() === 'html' ? (
                    <>
                      <p translate="no">{project.mainCategory}</p>
                      <FaHtml5 />
                    </>
                  ) : null}
                  {project.mainCategory.toLowerCase() === 'javascript' ? (
                    <>
                      <p translate="no">{project.mainCategory}</p>
                      <IoLogoJavascript />
                    </>
                  ) : null}
                  {project.mainCategory.toLowerCase() === 'typescript' ? (
                    <>
                      <p translate="no">{project.mainCategory}</p>
                      <BiLogoTypescript />
                    </>
                  ) : null}
                  {project.mainCategory.toLowerCase() === 'react' ? (
                    <>
                      <p translate="no">{project.mainCategory}</p>
                      <FaReact />
                    </>
                  ) : null}
                  {project.mainCategory.toLowerCase() === 'css' ? (
                    <>
                      <p translate="no">{project.mainCategory}</p>
                      <FaCss3Alt />
                    </>
                  ) : null}
                  {project.mainCategory.toLowerCase() === 'scss' ? (
                    <>
                      <p translate="no">{project.mainCategory}</p>
                      <SaasIcon />
                    </>
                  ) : null}
                  {project.mainCategory.toLowerCase().toLowerCase() ===
                  'node' ? (
                    <>
                      <p translate="no">{project.mainCategory}</p>
                      <FaNode />
                    </>
                  ) : null}
                  {project.mainCategory.toLowerCase().toLowerCase() ===
                  'graphql' ? (
                    <>
                      <p translate="no">{project.mainCategory}</p>
                      <GrGraphQl />
                    </>
                  ) : null}
                  {project.mainCategory.toLowerCase().toLowerCase() ===
                  'next' ? (
                    <>
                      <p translate="no">{project.mainCategory.toLowerCase()}</p>
                      <SiNextdotjs />
                    </>
                  ) : null}
                </span>
                {project.otherCategories?.map((category, index) => {
                  return (
                    <span
                      translate="no"
                      className={styles.spanCategory}
                      key={index}
                    >
                      {category.toLowerCase() === 'html' ? (
                        <>
                          <p translate="no">{category}</p>
                          <FaHtml5 />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'javascript' ? (
                        <>
                          <p translate="no">{category}</p>
                          <IoLogoJavascript />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'typescript' ? (
                        <>
                          <p translate="no">{category}</p>
                          <BiLogoTypescript />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'react' ? (
                        <>
                          <p translate="no">{category}</p>
                          <FaReact />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'css' ? (
                        <>
                          <p translate="no">{category}</p>
                          <FaCss3Alt />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'scss' ? (
                        <>
                          <p translate="no">{category}</p>
                          <SaasIcon />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'node' ? (
                        <>
                          <p translate="no">{category}</p>
                          <FaNode />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'graphql' ? (
                        <>
                          <p translate="no">{category}</p>
                          <GrGraphQl />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'next' ? (
                        <>
                          <p translate="no">{category}</p>
                          <SiNextdotjs />
                        </>
                      ) : null}
                    </span>
                  );
                })}
              </div>
              <div className={styles.projectUrls}>
                <a target="__blank" href={project.urlProject}>
                  <p translate="no">{translate('viewProject')}</p>
                  <CgWebsite />
                </a>
                <a target="__blank" href={project.urlGitHub}>
                  <p translate="no">{translate('viewCode')}</p>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default IndividualProject;
