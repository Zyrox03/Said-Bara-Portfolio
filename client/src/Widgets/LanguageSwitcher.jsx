import i18n from "i18next";
import { useState } from 'react'

export const LanguageSwitcher = () => {

     // TRANSLATIONS

  const [isLangHovered, setIsLangHovered] = useState(false);

  const changeLanguage = () => {

    if (i18n.language === "en") {
      i18n.changeLanguage("fr");
      localStorage.setItem("language", "fr");
    } else if (i18n.language === "fr") {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }

    setIsLangHovered(false);    
  };

  
  return (
    <div
          className="flex items-center justify-center relative overflow-hidden p-2  cursor-pointer"
          onMouseEnter={() => setIsLangHovered(true)}
          onMouseLeave={() => setIsLangHovered(false)}
          onClick={() => changeLanguage()}
        >
          {i18n.language === "en" && (
            <span className={`text-lg text-slate-100 `}>Fr</span>
          )}
          {i18n.language === "fr" && (
            <span className={`text-lg text-slate-100`}>En</span>
          )}

          <div
            className={`w-full h-[2px] bg-slate-100 absolute bottom-0 transition-transform ease-in-out duration-300  ${
              isLangHovered ? "translate-x-[0%]" : "translate-x-[-110%]"
            } `}
          ></div>
        </div>
  )
}
