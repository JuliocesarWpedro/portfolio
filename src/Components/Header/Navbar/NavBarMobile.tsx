import React from 'react';

import styles from './NavBarMobile.module.scss';
import { useLanguage } from '../../../hooks/useLanguage';
import IconClose from '../../../SvgComponents/IconClose';

const NavBarMobile = () => {
  const { currentLanguage, handleChangeLanguage, translate } = useLanguage();
  const dropwdownRef = React.useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

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
      <div
        onClick={handleModal}
        style={{ display: openModal ? 'none' : 'flex' }}
        className={styles.menuModalClose}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        style={{ display: !openModal ? 'none' : 'flex' }}
        className={styles.menuModalOpen}
        onClick={handleModal}
      >
        <IconClose />
      </div>
      {openModal && (
        <nav className={styles.navBarMobile}>
          <ul>
            <li>
              <a onClick={handleModal} href="#about">
                {translate('navBarAbout')}
              </a>
            </li>
            <li>
              <a onClick={handleModal} href="#projects">
                {translate('navBarProjects')}
              </a>
            </li>
            <li>
              <a onClick={handleModal} href="#contact">
                {translate('navBarContact')}
              </a>
            </li>
            <li
              id={styles.changeLanguage}
              onClick={() => {
                handleChangeLanguage(), handleModal();
              }}
            >
              <a>{translate('changeLanguage')}</a>
              {currentLanguage === 'pt' ? (
                <div className={styles.languageContainer}>
                  <img
                    src="flag/UnitedStatesFlag.png"
                    alt="Flag United States"
                  />
                </div>
              ) : (
                <div className={styles.languageContainer}>
                  <img src="flag/BrazilianFlag.png" alt="Flag Brazilian" />
                </div>
              )}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavBarMobile;
