import React, {useContext, useState} from 'react';
import hamburger from "../pictures/lightMode/hamburger-menu_lightMode.png";
import hamburgerBlack from "../pictures/darkMode/hamburger-menu_darkMode.png";
import {useTranslation} from "react-i18next";
import {DarkModeContext} from '../components/DarkModeContext';

function HiddenHeader() {

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const {t} = useTranslation();

    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenuAndNavigate = (path) => {
        setIsOpen(false);

        setTimeout(() => {
            window.location.href = path;
        }, 500);
    };

    return (
        <div>
            <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
                <div className={`hamburger-menu-div ${darkMode ? 'dark' : 'light'}`}>
                    <button className="hamburger-button" onClick={toggleMenu}>
                        <img src={darkMode ? hamburgerBlack : hamburger}
                             className={`icons ${darkMode ? 'dark' : 'light'}`}
                             alt="HamburgerMenu"/>
                    </button>
                    <span style={{
                        color: darkMode ? "white" : "black",
                        fontSize: "26px",
                        marginLeft: "30px",
                        fontWeight: "600",
                        marginRight: "40%",
                        fontFamily: "Times New Roman",
                        cursor: "pointer"
                    }} onClick={() => toggleMenuAndNavigate('/Home')}>N A R K O</span>
                </div>
            </div>


            <div className={`menu-overlay ${isOpen ? 'open' : ''}`} style={{backgroundColor: darkMode ? 'black' : 'rgba(250, 246, 240, 255)'}}>
                <div className="menu-items">
                    <a style={{cursor: "pointer"}} className={`text-in-hidden-header ${darkMode ? 'dark' : 'light'}`} onClick={() => toggleMenuAndNavigate('/Home')}>{t('home')}</a>
                    <a style={{cursor: "pointer"}} className={`text-in-hidden-header ${darkMode ? 'dark' : 'light'}`} onClick={() => toggleMenuAndNavigate('/rulesPage')}>{t('rules')}</a>
                    <a style={{cursor: "pointer"}} className={`text-in-hidden-header ${darkMode ? 'dark' : 'light'}`} onClick={() => toggleMenuAndNavigate('/documentPage')}>{t('documents')}</a>
                    <a style={{cursor: "pointer"}} className={`text-in-hidden-header ${darkMode ? 'dark' : 'light'}`} onClick={() => toggleMenuAndNavigate('/infoPage')}>{t('info')}</a>
                    <a style={{cursor: "pointer"}} className={`text-in-hidden-header ${darkMode ? 'dark' : 'light'}`} onClick={() => toggleMenuAndNavigate('/supportPage')}>{t('support')}</a>
                    <a style={{cursor: "pointer"}} className={`text-in-hidden-header ${darkMode ? 'dark' : 'light'}`} onClick={() => toggleMenuAndNavigate('/')}>{t('logout')}</a>
                </div>
            </div>
        </div>
    )
        ;
}

export default HiddenHeader;