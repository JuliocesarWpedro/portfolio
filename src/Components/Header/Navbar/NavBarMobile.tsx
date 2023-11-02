import React from 'react';
import IconNavBarMobile from '../../../SvgComponents/IconNavBarMobile';
import styles from './NavBarMobile.module.scss';
import { useLanguage } from '../../../hooks/useLanguage';

const NavBarMobile = () => {
  const { currentLanguage, handleChangeLanguage, translate } = useLanguage();
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  return (
    <>
   
      <IconNavBarMobile setOpenModal={setOpenModal} />
      <nav
        className={styles.navBarMobile}
        style={{ display: openModal ? 'flex' : 'none' }}
      >
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
    </>
  );
};

export default NavBarMobile;
