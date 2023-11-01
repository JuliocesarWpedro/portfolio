import React from 'react';
import IconNavBarMobile from '../../../SvgComponents/IconNavBarMobile';
import styles from './NavBarMobile.module.scss';

const NavBarMobile = () => {
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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBarMobile;
