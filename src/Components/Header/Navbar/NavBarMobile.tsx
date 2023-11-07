import React from 'react';
import IconNavBarMobile from '../../../SvgComponents/IconNavBarMobile';
import styles from './NavBarMobile.module.scss';
import { useLanguage } from '../../../hooks/useLanguage';

const NavBarMobile = () => {
  const { currentLanguage, handleChangeLanguage, translate } = useLanguage();
  const dropwdownRef = React.useRef<HTMLDivElement>(null);

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleClickOutsideDropdown = React.useCallback(
    (e: Event) => {
      if (
        openModal &&
        dropwdownRef.current &&
        !dropwdownRef.current.contains(e.target as Node)
      ) {
        setOpenModal(false);
      }
    },
    [openModal],
  );
  React.useEffect(() => {
    const handleClick = (e: Event) => {
      handleClickOutsideDropdown(e);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClickOutsideDropdown]);

  const handleClickEscOutsideModal = React.useCallback(
    (e: KeyboardEvent) => {
      if (openModal && e.key === 'Escape') {
        setOpenModal(false);
      }
    },
    [openModal],
  );

  React.useEffect(() => {
    const handleClickEsc = (e: KeyboardEvent) => {
      handleClickEscOutsideModal(e);
    };

    if (openModal) {
      document.addEventListener('keydown', handleClickEsc);
    } else {
      document.removeEventListener('keydown', handleClickEsc);
    }
  }, [handleClickEscOutsideModal, openModal]);

  return (
    <div ref={dropwdownRef} className={styles.containerModal}>
      <IconNavBarMobile setOpenModal={setOpenModal} />
      {openModal && (
        <nav className={styles.navBarMobile}>
          <ul>
            <li onClick={() => setOpenModal(false)}>
              <a href="#about">{translate('navBarAbout')}</a>
            </li>
            <li onClick={() => setOpenModal(false)}>
              <a href="#projects">{translate('navBarProjects')}</a>
            </li>
            <li onClick={() => setOpenModal(false)}>
              <a href="#contact">{translate('navBarContact')}</a>
            </li>
            {currentLanguage == 'pt' ? (
              <div
                onClick={handleChangeLanguage}
                className={styles.languageContainer}
              >
                <img src="flag/UnitedStatesFlag.png" alt="Flag United States" />
              </div>
            ) : (
              <div
                onClick={handleChangeLanguage}
                className={styles.languageContainer}
              >
                <img src="flag/BrazilianFlag.png" alt="Flag Brazilian" />
              </div>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavBarMobile;
