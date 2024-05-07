import styles from './Footer.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div></div>
        <div>
          <h2>
            <a translate="no" href="/">
              Julio Cesar
            </a>
          </h2>
          <ul>
            <li>
              <a target="__blank" href="https://github.com/JuliocesarWpedro">
                <span aria-label="GitHub Link">
                  <FaGithub />
                </span>
              </a>
            </li>
            <li>
              <a
                target="__blank"
                href="https://www.linkedin.com/in/julio-cesar-wanderosfky-977301297/"
              >
                <span aria-label="Linkedin Link">
                  <FaLinkedin />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
