import * as React from 'react';
import PublicIcon from '@mui/icons-material/Public';

import spanish from "./../../../assets/languages/spanish.svg"
import english from "./../../../assets/languages/english.svg"

import styles from "./languageMenu.module.css"

import { useTranslation } from 'react-i18next';

const languages = [{ icon: spanish, name: "Español", value: "es" }, { icon: english, name: "English", value: "en" }]

const LanguageMenu = () => {
    const { i18n } = useTranslation('common')

    return (
        <div className={styles.languageSelector}>
            <button className={styles.languageButton}>
                <PublicIcon sx={{ height: "40px", width: "40px", color: "white" }} />
            </button>

            <div className={styles.languageDropdown}>
                {languages.map((language) => (
                    <div onClick={() => i18n.changeLanguage(language.value)} className={styles.languageOption} key={language.name}>
                        <img src={language.icon} alt={language.name} className={styles.flag} />{language.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LanguageMenu;