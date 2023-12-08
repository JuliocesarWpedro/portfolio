import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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

const IndividualProject = () => {
  const { projectName } = useParams();
  const projectname = projectName?.substring(1).replace(/-/g, '').trim();

  const filteredProjects = projects.filter(
    (project: Project) =>
      project.title.replace(/\s+/g, '').toLowerCase() === projectname,
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParticlesContainer />
      <Header />
      <div className={styles.ProjectContainer}>
        {filteredProjects.map((project: Project, index) => (
          <div style={{ position: 'relative', zIndex: '1' }} key={index}>
            <div className={styles.ContainerProject}>
              <h1>{project.title}</h1>
              <a href="/#projects">
                <p>Retornar</p>
                <PiKeyReturnFill />
              </a>
            </div>
            <div>
              <img src={project.srcImage} alt={project.altImage} />
              <div className={styles.otherCategories}>
                {project.otherCategories?.map((category, index) => {
                  return (
                    <span className={styles.spanCategory} key={index}>
                      {category.toLowerCase() === 'html' ? (
                        <>
                          <p>{category}</p>
                          <FaHtml5 />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'javascript' ? (
                        <>
                          <p>{category}</p>
                          <IoLogoJavascript />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'typescript' ? (
                        <>
                          <p>{category}</p>
                          <BiLogoTypescript />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'react' ? (
                        <>
                          <p>{category}</p>
                          <FaReact />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'css' ? (
                        <>
                          <p>{category}</p>
                          <FaCss3Alt />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'scss' ? (
                        <>
                          <p>{category}</p>
                          <SaasIcon />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'node' ? (
                        <>
                          <p>{category}</p>
                          <FaNode />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'graphql' ? (
                        <>
                          <p>{category}</p>
                          <GrGraphQl />
                        </>
                      ) : null}
                      {category.toLowerCase() === 'next' ? (
                        <>
                          <p>{category}</p>
                          <SiNextdotjs />
                        </>
                      ) : null}
                    </span>
                  );
                })}
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
