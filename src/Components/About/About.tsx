import styles from './About.module.scss';
import { useLanguage } from '../../hooks/useLanguage';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { FaNode } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import SaasIcon from '../../SvgComponents/Sass';

const About = () => {
  const { translate } = useLanguage();

  return (
    <div className={styles.aboutContainer} id="about">
      <div className={styles.titleAboutContainer}>
        <div className={styles.titleDescription}>
          <h2 translate="no" className={styles.titleAbout}>
            {translate('titleNameAbout')}
            <span translate="no">Julio Cesar</span>
          </h2>
          <p translate="no">{translate('subTitleAbout')}</p>
        </div>

        <div className={styles.IconsContainer}>
          <FaReact />
          <IoLogoJavascript />
          <BiLogoTypescript />
          <SaasIcon />
          <SiNextdotjs />
          <GrGraphQl />
          <FaNode />
        </div>
      </div>

      <div className={styles.aboutContainerRight}>
        <div className={styles.imageAbout}>
          <div></div>
          <img
            loading="lazy"
            rel="preload"
            src="/ImageJulio.webp"
            alt="Imagem"
          />
        </div>
        <div className={styles.linksSocialMedia}>
          <a target="__blank" href="https://github.com/JuliocesarWpedro">
            <p translate="no">GitHub</p>
            <span aria-label="GitHub Icon">
              <FaGithub alt="GitHub" />
            </span>
          </a>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/julio-cesar-wanderosfky-977301297/"
          >
            <p translate="no">Linkedin</p>
            <span aria-label="Linkedin Icon">
              <FaLinkedin alt="Linkedin" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
