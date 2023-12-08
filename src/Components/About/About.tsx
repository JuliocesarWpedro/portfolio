import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div className={styles.aboutContainer} id="about">
      <motion.div
        className={styles.titleAboutContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={styles.titleDescription}>
          <h2 className={styles.titleAbout}>
            {translate('titleNameAbout')}
            <span>Julio Cesar</span>
          </h2>
          <p>{translate('subTitleAbout')}</p>
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
      </motion.div>

      <div className={styles.aboutContainerRight}>
        <motion.div
          className={styles.imageAbout}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div></div>
          <img src="/ImageJulio.png" alt="Imagem" />
        </motion.div>
        <div className={styles.linksSocialMedia}>
          <a target="__blank" href="https://github.com/JuliocesarWpedro">
            <p>Go to GitHub</p>
            <FaGithub />
          </a>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-wanderosfky-977301297/"
          >
            <p>Go to Linkedin</p>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
