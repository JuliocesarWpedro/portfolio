import React from 'react';
import styles from './Navbar.module.scss';
import { useLanguage } from '../../../hooks/useLanguage';
import LanguageButton from '../LanguageButton';

const Navbar = ({
  setOpenModalLanguage,
  openModalLanguage,
}: {
  setOpenModalLanguage: React.Dispatch<React.SetStateAction<boolean>>;
  openModalLanguage: boolean;
}) => {
  const { translate } = useLanguage();

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <a href="/#about">{translate('navBarAbout')}</a>
        </li>
        <li>
          <a href="/#projects">{translate('navBarProjects')}</a>
        </li>
        <li>
          <a href="/#contact">{translate('navBarContact')}</a>
        </li>
        <LanguageButton
          openModalLanguage={openModalLanguage}
          setOpenModalLanguage={setOpenModalLanguage}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
