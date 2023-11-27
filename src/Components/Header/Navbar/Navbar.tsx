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
        <li id={styles.changeLanguage} onClick={handleChangeLanguage}>
          <button>{translate('changeLanguage')}</button>
          {currentLanguage == 'pt' ? (
            <div className={styles.languageContainer}>
              <img src="flag/UnitedStatesFlag.png" alt="Flag United States" />
            </div>
          ) : (
            <div className={styles.languageContainer}>
              <img
                src="flag/BrazilianFlag.png
            "
                alt="Flag Brazilian"
              />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
