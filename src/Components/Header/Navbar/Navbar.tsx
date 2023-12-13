import { Dispatch } from 'react';
import styles from './Navbar.module.scss';
import { useLanguage } from '../../../hooks/useLanguage';
import LanguageButton from '../LanguageButton';

const Navbar = ({
  setOpenModalLanguage,
  openModalLanguage,
}: {
  setOpenModalLanguage: Dispatch<React.SetStateAction<boolean>>;
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
      </ul>
      <LanguageButton
        openModalLanguage={openModalLanguage}
        setOpenModalLanguage={setOpenModalLanguage}
      />
    </nav>
  );
};

export default Navbar;
