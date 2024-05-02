import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import HeaderIndividualProjects from '../Header/HeaderIndividualProjects';
import ParticlesContainer from '../ParticlesContainer/ParticlesContainer';
import styles from './IndividualProject.module.scss';
import { useParams } from 'react-router-dom';
import { Project, projects } from './project';
import { PiKeyReturnFill } from 'react-icons/pi';
import { FaReact, FaHtml5, FaCss3Alt, FaNode, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';
import SaasIcon from '../../SvgComponents/Sass';
import { CgWebsite } from 'react-icons/cg';
import { useLanguage } from '../../hooks/useLanguage';

interface CategoryIconMap {
  [key: string]: JSX.Element | null;
}

const categoryIconMap: CategoryIconMap = {
  html: <FaHtml5 />,
  javascript: <IoLogoJavascript />,
  typescript: <BiLogoTypescript />,
  react: <FaReact />,
  css: <FaCss3Alt />,
  scss: <SaasIcon />,
  node: <FaNode />,
  next: <SiNextdotjs />,
  tailwindcss: <SiTailwindcss />,
  zustand: null,
  mongodb: <SiMongodb />,
  express: <SiExpress />,
};

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

  const renderCategoryIcons = (categories: string[], parentIndex: number) => {
    return categories.map((category: string, index: number) => {
      const icon =
        categoryIconMap[category.toLowerCase() as keyof CategoryIconMap];
      return (
        <span translate="no" key={`${parentIndex}-${index}`}>
          {icon && icon}
          <p translate="no">{category}</p>
        </span>
      );
    });
  };

  return (
    <>
      <ParticlesContainer />
      <HeaderIndividualProjects />
      <div className={styles.ProjectContainer}>
        {filteredProjects.map((project: Project, index: number) => (
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
                {renderCategoryIcons([project.mainCategory], 0)}
                {project.otherCategories?.map(
                  (category: string, index: number) => {
                    return renderCategoryIcons([category], index);
                  },
                )}
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
