import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import LanguageButton from './LanguageButton';
import { PiKeyReturnFill } from 'react-icons/pi';

const Header = () => {
  const [openModalLanguage, setOpenModalLanguage] = useState<boolean>(false);

  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

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
        <a href="/">Julio Cesar</a>
      </h2>
      <div
        className={styles.iconsIndividualProjectsHeader}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <LanguageButton
          openModalLanguage={openModalLanguage}
          setOpenModalLanguage={setOpenModalLanguage}
        />
        <a href="/#projects">
          <PiKeyReturnFill style={{ width: '35px', height: '35px' }} />
        </a>
      </div>
    </header>
  );
};

export default Header;
