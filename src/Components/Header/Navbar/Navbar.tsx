
import styles from './Navbar.module.scss';
import { useLanguage } from '../../../hooks/useLanguage';

const Navbar = () => {
  const { currentLanguage, handleChangeLanguage, translate } = useLanguage();

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <a href="#about">{translate('navBarAbout')}</a>
        </li>
        <li>
          <a href="#projects">{translate('navBarProjects')}</a>
        </li>
        <li>
          <a href="#contact">{translate('navBarContact')}</a>
        </li>
        {currentLanguage == 'pt' ? (
          <div
            onClick={handleChangeLanguage}
            className={styles.languageContainer}
          >
            <img
              src="flag/BrazilianFlag.png
            "
              alt="Flag Brazilian"
            />
          </div>
        ) : (
          <div
            onClick={handleChangeLanguage}
            className={styles.languageContainer}
          >
            <img src="flag/UnitedStatesFlag.png" alt="Flag United States" />
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
