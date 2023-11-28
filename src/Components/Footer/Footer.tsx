import React from 'react';
import styles from './Footer.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <h2>
          <a href="/">Julio Cesar</a>
        </h2>
        <ul>
          <li>
            <a href="https://github.com/JuliocesarWpedro">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-wanderosfky-977301297/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
