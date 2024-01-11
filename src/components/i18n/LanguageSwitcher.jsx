import React from "react";
import { useTranslation } from "react-i18next";
import br from '../../assets/br.svg';
import us from '../../assets/us.svg';
import "../theme/themes.css";

// Criando um array com as linguagens que o site suporta
const languageOptions = [
  {
    name: "Português",
    value: "ptBr",
    flag: br
  },
  {
    name: "English",
    value: "en",
    flag: us
  }
];

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  return (
    <div className="language-switcher">
      <span className="language__switcher-selectYourLanguage">{t('selectYourLanguage')}</span>

      {languageOptions.map((languageOption) => (
        <button
          key={languageOption.value}
          onClick={() => i18n.changeLanguage(languageOption.value)}
          className={`language-switcher__button ${
            selectedLanguage === languageOption.value ? "selected" : ""
          }`}
        >
          <img className="language__switcher-img" src={languageOption.flag} alt={languageOption.name} />
          <span 
            style={{
              fontWeight: 
                i18n.language === languageOption.value ? "bold" : "normal",
              textDecoration:  
                i18n.language === languageOption.value ? "underline" : "none",
              display: selectedLanguage === languageOption.value ? "none" : "block",
            }} 
            className="language__switcher-languageName"
          >
            {languageOption.name}
          </span>
        </button>
      ))}
    </div>
  );
};
