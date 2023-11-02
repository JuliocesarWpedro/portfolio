import styles from '../Components/Header/Navbar/NavBarMobile.module.scss';

interface IconInterface {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function IconNavBarMobile({ setOpenModal }: IconInterface) {
  return (
    <svg
    onClick={() => setOpenModal((value) => !value)}
      className={styles.svgIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 128 128"
    >
      <path
        className={styles.pathOne}
        fill="#2e2e2e"
        d="M64 14a50 50 0 100 100 50 50 0 100-100z"
      ></path>
      <path
        className={styles.pathTwo}
        fill="#C3AEFF"
        d="M64 117c-29.2 0-53-23.8-53-53s23.8-53 53-53 53 23.8 53 53-23.8 53-53 53zm0-100c-25.9 0-47 21.1-47 47s21.1 47 47 47 47-21.1 47-47-21.1-47-47-47z"
      ></path>
      <path
        className={styles.pathThree}
        fill="#b2b2b2"
        d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3s-1.3 3-3 3zm0 15h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3s-1.3 3-3 3zM86.5 82h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3s-1.3 3-3 3z"
      ></path>
    </svg>
  );
}

export default IconNavBarMobile;
