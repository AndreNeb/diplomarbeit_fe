import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import './stylesheets/leftbar/buttons.css';
import './stylesheets/topbar/topbar.css';

import logo from "./pictures/hamburger-menu.png";
import regeln from "./pictures/regeln.png";
import info from "./pictures/info.png";
import support from "./pictures/support.png";
import language from "./pictures/language.png";
import login from "./pictures/login-picture.png";
import hamburger from "./pictures/hamburger-menu.png";
import React, {useState} from 'react';

import {useTranslation} from "react-i18next";
import InfoPage from "./InfoPage";
import SupportPage from "./SupportPage";
import App from "./App";

function RulesPage() {

    const {t} = useTranslation();

    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [showSidebar, setShowSidebar] = useState(true);

    const handleClick = () => {
        setShowSidebar(!showSidebar);
    };

    return (

        <>

            <body className="rules">
            < div className="header">
                <div className="left-section">
                    <Link to="/">
                        <img src={logo} className="logo" alt="Logo"/>
                    </Link>
                    <div className="topbar-functional-divs">
                        <Link to="/RulesPage">
                            <img src={regeln} className="regeln" alt="Regeln"/>
                        </Link>
                    </div>
                    <div className="topbar-functional-divs">
                        <Link to="/InfoPage">
                            <img src={info} className="info" alt="Info"/>
                        </Link>
                    </div>
                    <div className="topbar-functional-divs">
                        <Link to="/SupportPage">
                            <img src={support} className="support" alt="Support"/>
                        </Link>
                    </div>

                </div>

                <div className="right-section">
                    <img src={language} className="language" alt={('language')}/>
                    <img src={login} className="login" alt="login"/>
                </div>


                {showSidebar ? (
                    <div className="left-bar-backdiv">
                        <div className="left-bar-shown " id="shownSidebar">
                            <div className="top-leftbar-section">
                                <div className="hamburger-menu">
                                    <img src={hamburger} onClick={handleClick}
                                         className="hamburger-menu-picture"
                                         alt="Hamburger menu"/>
                                </div>
                                <div className="searchbar-menu">
                                    <input className="search-bar" type="text"
                                           placeholder={t('searchbar-placeholder')}/>
                                </div>
                            </div>
                            <div className="button-section">
                                <button className="button-general">{t('child')}</button>
                                <button className="button-general">{t('lung')}</button>
                                <button className="button-general">{t('heart')}</button>
                                <button className="button-general">{t('stomach')}</button>
                                <button className="button-general">{t('leg')}</button>
                                <button className="button-general">{t('arms')}</button>
                                <button className="button-general">{t('liver')}</button>
                                <button className="button-general">{t('gallbladder')}</button>
                                <button className="button-general">{t('kidney')}</button>
                                <button className="button-general">{t('brain')}</button>
                                <button className="button-general">{t('specialized')}</button>
                                <button className="button-general">{t('other')}</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="left-bar-hidden" id="hiddenSidebar" onClick={handleClick}>
                        <div className="hamburger-menu">
                            <img src={hamburger} onClick={handleClick} className="hamburger-menu-picture"
                                 alt="Hamburger menu"/>
                        </div>
                    </div>
                )}

            </div>
            </body>

        </>

    )
        ;
}

export default RulesPage;