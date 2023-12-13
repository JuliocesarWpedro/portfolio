import {
  Dispatch,
  useRef,
  useCallback,
  useEffect,
  SetStateAction,
} from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { MdOutlineLanguage } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './LanguageButton.module.scss';

interface LanguageButtonProps {
  setOpenModalLanguage: Dispatch<SetStateAction<boolean>>;
  openModalLanguage: boolean;
}

const LanguageButton = ({
  setOpenModalLanguage,
  openModalLanguage,
}: LanguageButtonProps) => {
  const { currentLanguage, handleChangeLanguage } = useLanguage();
  const dropDownLanguage = useRef<HTMLDivElement>(null);
  const { translate } = useLanguage();

  const handleClickOutsideLanguageDropdown = useCallback(
    (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        openModalLanguage &&
        dropDownLanguage.current &&
        !dropDownLanguage.current.contains(e.target as Node) &&
        !target.closest(`.${styles.LanguageContainer}`)
      ) {
        setOpenModalLanguage(false);
      }
    },
    [openModalLanguage, setOpenModalLanguage],
  );
  useEffect(() => {
    const handleClick = (e: Event) => {
      handleClickOutsideLanguageDropdown(e);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClickOutsideLanguageDropdown]);

  function handleOptionLanguage(language: string) {
    handleChangeLanguage(language);
    setOpenModalLanguage((value) => !value);
  }

  return (
    <div className={styles.LanguageContainer} ref={dropDownLanguage}>
      <div
        className={
          openModalLanguage ? styles.languageIconsOpen : styles.languageIcons
        }
        onClick={() => setOpenModalLanguage((value) => !value)}
      >
        <MdOutlineLanguage />
        <IoIosArrowDown
          style={{
            transform: openModalLanguage ? ' scaleY(-1)' : ' scaleY(1)',
          }}
        />
      </div>
      {openModalLanguage && (
        <ul className={styles.languageList}>
          <li
            className={
              currentLanguage === 'en'
                ? styles.languageOptionChosen
                : styles.languageOption
            }
            onClick={() => handleOptionLanguage('en')}
          >
            {translate('language-en')}
          </li>
          <li
            className={
              currentLanguage === 'pt'
                ? styles.languageOptionChosen
                : styles.languageOption
            }
            onClick={() => handleOptionLanguage('pt')}
          >
            {translate('language-pt')}
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageButton;
