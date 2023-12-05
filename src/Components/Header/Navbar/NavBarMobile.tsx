import React from 'react';

import styles from './NavBarMobile.module.scss';
import { useLanguage } from '../../../hooks/useLanguage';
import IconClose from '../../../SvgComponents/IconClose';
import LanguageButton from '../LanguageButton';

const NavBarMobile = ({
  setOpenModalLanguage,
  openModalLanguage,
}: {
  setOpenModalLanguage: React.Dispatch<React.SetStateAction<boolean>>;
  openModalLanguage: boolean;
}) => {
  const { translate } = useLanguage();
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

  React.useEffect(() => {
    if (openModalLanguage) {
      setOpenModal(false);
    }
  }, [openModalLanguage, setOpenModalLanguage]);

  React.useEffect(() => {
    if (openModal) {
      setOpenModalLanguage(false);
    }
  }, [openModal, setOpenModalLanguage]);



  return (
    <div ref={dropwdownRef} className={styles.containerModal}>
      <LanguageButton
        openModalLanguage={openModalLanguage}
        setOpenModalLanguage={setOpenModalLanguage}
      />
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
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavBarMobile;
