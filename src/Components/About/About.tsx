import { motion } from 'framer-motion';
import styles from './About.module.scss';
import { useLanguage } from '../../hooks/useLanguage';

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

  return (
    <div className={styles.aboutContainer}>
      <motion.div
        className={styles.titleAboutContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className={styles.titleAbout}>
          {translate('titleNameAbout')}
          <span>Julio Cesar</span>
        </h2>
        <p>{translate('subTitleAbout')}</p>
      </motion.div>

      <div className={styles.imageAbout}>imagem</div>
    </div>
  );
};

export default About;
