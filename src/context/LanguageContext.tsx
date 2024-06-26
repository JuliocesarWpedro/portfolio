import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  handleChangeLanguage: (language: string) => void;
  translate: (key: string) => string;
  currentLanguage: string;
};

export const LanguageContext = React.createContext<
  LanguageContextType | undefined
>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = React.useState(language);

  const handleChangeLanguage = (newLanguage: string) => {
    if (newLanguage !== currentLanguage) {
      setCurrentLanguage(newLanguage);
      changeLanguage(newLanguage);
    }
  };

  const translate = (key: string) => {
    return t(key);
  };

  return (
    <LanguageContext.Provider
      value={{ handleChangeLanguage, translate, currentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
