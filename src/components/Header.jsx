import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {DarkModeContext} from './DarkModeContext';
import apple from "../pictures/other/NARKO_Logo.png";
import regelnBlack from "../pictures/darkMode/rules_darkMode.png";
import regeln from "../pictures/lightMode/regeln_lightMode.png";
import documentBlack from "../pictures/darkMode/document_darkMode.png";
import documentImage from "../pictures/lightMode/document_lightMode.png";
import infoBlack from "../pictures/darkMode/info_darkMode.png";
import info from "../pictures/lightMode/info_lightMode.png";
import supportBlack from "../pictures/darkMode/support_darkMode.png";
import support from "../pictures/lightMode/support_lightMode.png";
import sun from "../pictures/darkMode/sun_darkMode.png";
import moon from "../pictures/lightMode/moon_lightMode.png";
import languageBlack from "../pictures/darkMode/language_darkMode.png";
import language from "../pictures/lightMode/language_lightMode.png";
import loginBlack from "../pictures/darkMode/login-picture_darkMode.png";
import login from "../pictures/lightMode/login-picture_lightMode.png";
import {useTranslation} from "react-i18next";

import "../stylesheets/topbar/topbar.css"

function Header() {

    const {t} = useTranslation();

    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    return (

        <div className="header"
             style={{backgroundColor: darkMode ? 'black' : 'white', transition: "background-color 1.1s ease"}}>
            <div className="left-section">
                <Link to="/">
                    <span style={{
                        color: darkMode ? "white" : "black",
                        fontSize: "26px",
                        marginLeft: "30px",
                        fontWeight: "600",
                        fontFamily: "Timed New Roman"
                    }}>N A R K O</span>
                </Link>

                <div className="topbar-functional-divs">
                    <Link to="/RulesPage">
                        <div className="icons-tooltip">
                            <img src={darkMode ? regelnBlack : regeln}
                                 className={`icons ${darkMode ? 'dark' : 'light'} mode`} alt={t('rules')}/>
                            <div className="tooltip">{t('rules')}</div>
                        </div>
                    </Link>

                    <Link to="/DocumentPage">
                        <div className="icons-tooltip">
                            <img src={darkMode ? documentBlack : documentImage}
                                 className={`icons ${darkMode ? 'dark' : 'light'} mode`} alt={t('documents')}/>
                            <div className="tooltip">{t('documents')}</div>
                        </div>
                    </Link>

                    <Link to="/InfoPage">
                        <div className="icons-tooltip">
                            <img src={darkMode ? infoBlack : info}
                                 className={`icons ${darkMode ? 'dark' : 'light'} mode`} alt={t('info')}/>
                            <div className="tooltip">{t('info')}</div>
                        </div>
                    </Link>

                    <Link to="/SupportPage">
                        <div className="icons-tooltip">
                            <img src={darkMode ? supportBlack : support}
                                 className={`icons ${darkMode ? 'dark' : 'light'} mode`} alt={t('support')}/>
                            <div className="tooltip">{t('support')}</div>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="middle-section">
                <input
                    className={`search-bar ${darkMode ? 'dark' : 'light'}`}
                    type="text"
                    placeholder={t('searchbar-placeholder')}
                    style={{
                        backgroundColor: darkMode ? 'black' : 'white',
                        color: darkMode ? 'white' : 'black',
                        borderColor: darkMode ? 'white' : 'rgb(192, 192, 192)'
                    }}
                />

            </div>
            <div className="right-section">

                <img onClick={toggleDarkMode} src={darkMode ? sun : moon}
                     className={`icons ${darkMode ? 'dark' : 'light'} mode`} alt={t('rules')}
                     alt="Mode"/>

                <img src={darkMode ? languageBlack : language} className={`icons ${darkMode ? 'dark' : 'light'} mode`}
                     alt={t('rules')} alt={t('language')}/>

                <Link to="/LogInOutPage">
                    <img src={darkMode ? loginBlack : login} className={`icons ${darkMode ? 'dark' : 'light'} mode`}
                         alt={t('rules')} alt="login"/>
                </Link>
            </div>
        </div>);
}


export default Header;
