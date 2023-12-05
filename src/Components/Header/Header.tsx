import React from 'react';
import styles from './Header.module.scss';
import Navbar from './Navbar/Navbar';
import NavBarMobile from './Navbar/NavBarMobile';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState<boolean>(false);
  const [openModalLanguage, setOpenModalLanguage] =
    React.useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-350%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={styles.header}
    >
      <h2>
        <a href="/">Julio Cesar</a>
      </h2>
      <Navbar
        openModalLanguage={openModalLanguage}
        setOpenModalLanguage={setOpenModalLanguage}
      />
      <NavBarMobile
        openModalLanguage={openModalLanguage}
        setOpenModalLanguage={setOpenModalLanguage}
      />
    </motion.header>
  );
};

export default Header;
