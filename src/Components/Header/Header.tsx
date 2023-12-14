import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Navbar from './Navbar/Navbar';
import NavBarMobile from './Navbar/NavBarMobile';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [openModalLanguage, setOpenModalLanguage] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 150;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s ease-in-out',
      }}
      className={styles.header}
    >
      <h2>
        <a translate="no" href="/">
          Julio Cesar
        </a>
      </h2>
      <Navbar
        openModalLanguage={openModalLanguage}
        setOpenModalLanguage={setOpenModalLanguage}
      />
      <NavBarMobile
        openModalLanguage={openModalLanguage}
        setOpenModalLanguage={setOpenModalLanguage}
      />
    </header>
  );
};

export default Header;
