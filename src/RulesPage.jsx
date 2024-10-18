import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import './stylesheets/leftbar/buttons.css';
import './stylesheets/topbar/topbar.css';

import arrowleft from "./pictures/lightMode/arrow-left_lightMode.png";
import plusdark from "./pictures/lightMode/plus_lightMode.png";
import safedark from "./pictures/lightMode/safe_lightMode.png";
import deletedark from "./pictures/lightMode/delete_lightMode.png";

import React, {useEffect, useState} from 'react';

import {useTranslation} from "react-i18next";


import login from './pictures/lightMode/login-picture_lightMode.png';
import language from './pictures/lightMode/language_lightMode.png';
import regeln from './pictures/lightMode/regeln_lightMode.png';
import info from './pictures/lightMode/info_lightMode.png';
import support from './pictures/lightMode/support_lightMode.png';
import documentImage from './pictures/lightMode/document_lightMode.png';
import moon from './pictures/lightMode/moon_lightMode.png';
import sun from './pictures/darkMode/sun_darkMode.png';
import apple from './pictures/other/apple.png';
import hamburger from './pictures/other/hamburger-menu.png';
import supportBlack from './pictures/darkMode/support_darkMode.png';
import infoBlack from './pictures/darkMode/info_darkMode.png';
import documentBlack from './pictures/darkMode/document_darkMode.png';
import regelnBlack from './pictures/darkMode/rules_darkMode.png';
import languageBlack from './pictures/darkMode/language_darkMode.png';
import loginBlack from './pictures/darkMode/login-picture_darkMode.png';





function RulesPage() {

    const {t} = useTranslation();

    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [text, setText] = useState("");


    const [currentDiv, setCurrentDiv] = useState('MainPage'); // initial div1 sichtbar

    const handleMainClick = () => {
        setCurrentDiv('MainPage');
    };

    const handleHamburgerClick = () => {
        setCurrentDiv('Leftbar-hidden-MainPage');
    };

    const handleCategoriesClick = (message) => {
        setCurrentDiv('Category');
        setText(message)
    };

    const handlePlusClick = () => {
        setCurrentDiv('BuildPage');
    };

    const handleHamburgerRulesBuildClick = () => {
        setCurrentDiv('Leftbar-hidden-RulesPage');
    };

    const [showdarklight, setDarklight] = useState(true);


    const styles = {
        box: {
            width: "20%",
            boxSizing: "border-box", // Funktioniert in React, camelCase!
            wordWrap: "break-word",  // Funktioniert ebenfalls in React, camelCase!
            overflowWrap: "break-word", // Unterstützt den Umbruch von langen Wörtern
        },
    };





    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        // Setze die Dark Mode Klasse auf den body und die aktuelle Seite
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.body.className = darkMode ? 'dark' : 'light';  // Body Dark Mode

        // Wenn du spezifische Seitenklassen wie 'homepage', 'rules' etc. verwendest
        const pageElement = document.querySelector('.homepage');  // oder rulesPage, supportPage je nach Route
        if (pageElement) {
            pageElement.className = `homepage ${darkMode ? 'dark' : 'light'}`;
        }
    }, [darkMode]);



    return (

        <>

            <body className="rules">
            <div className="header">
                <div className="left-section">
                    <Link to="/">
                        <img src={apple} className="logo" alt={t('logo')}/>
                    </Link>

                    <div className="topbar-functional-divs">
                        <Link to="/RulesPage">
                            <div className="icons-tooltip">
                                <img src={darkMode ? regelnBlack : regeln} className="icons" alt={t('rules')}/>
                                <div className="tooltip">{t('rules')}</div>
                            </div>
                        </Link>

                        <Link to="/DocumentPage">
                            <div className="icons-tooltip">
                                <img src={darkMode ? documentBlack : documentImage} className="icons"
                                     alt={t('documents')}/>
                                <div className="tooltip">{t('documents')}</div>
                            </div>
                        </Link>

                        <Link to="/InfoPage">
                            <div className="icons-tooltip">
                                <img src={darkMode ? infoBlack : info} className="icons mode" alt={t('info')}/>
                                <div className="tooltip">{t('info')}</div>
                            </div>
                        </Link>

                        <Link to="/SupportPage">
                            <div className="icons-tooltip">
                                <img src={darkMode ? supportBlack : support} className="icons mode" alt={t('support')}/>
                                <div className="tooltip">{t('support')}</div>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="middle-section">
                    <input className="search-bar" type="text"
                           placeholder={t('searchbar-placeholder')}/>
                </div>
                <div className="right-section">

                    <img onClick={toggleDarkMode} src={darkMode ? sun : moon} className="icons mode"
                         alt="Mode"/>

                    <img src={darkMode ? languageBlack : language} className="icons" alt={t('language')}/>

                    <Link to="/LogInOutPage">
                        <img src={darkMode ? loginBlack : login} className="icons" alt="login"/>
                    </Link>
                </div>
            </div>

            {currentDiv === 'MainPage' && (
                <div className="left-bar-backdiv">
                    <div className="left-bar-shown" id="shownSidebar2">
                        <div className="top-leftbar-section">
                            <div className="menu">
                                <img src={hamburger} onClick={handleHamburgerClick}
                                     className="menu-picture"
                                     alt="Hamburger menu"/>
                            </div>
                            <div className="searchbar-menu">
                                <input className="search-bar" type="text"
                                       placeholder={t('searchbar-placeholder')}/>
                            </div>
                        </div>
                        <div className="button-section">
                            <button onClick={() => handleCategoriesClick(t('child'))}
                                    className="button-general-leftbar">{t('child')}</button>
                            <button onClick={() => handleCategoriesClick(t('lung'))}
                                    className="button-general-leftbar">{t('lung')}</button>
                            <button onClick={() => handleCategoriesClick(t('heart'))}
                                    className="button-general-leftbar">{t('heart')}</button>
                            <button onClick={() => handleCategoriesClick(t('stomach '))}
                                    className="button-general-leftbar">{t('stomach')}</button>
                            <button onClick={() => handleCategoriesClick(t('leg'))}
                                    className="button-general-leftbar">{t('leg')}</button>
                            <button onClick={() => handleCategoriesClick(t('arms'))}
                                    className="button-general-leftbar">{t('arms')}</button>
                            <button onClick={() => handleCategoriesClick(t('liver'))}
                                    className="button-general-leftbar">{t('liver')}</button>
                            <button onClick={() => handleCategoriesClick(t('gallbladder'))}
                                    className="button-general-leftbar">{t('gallbladder')}</button>
                            <button onClick={() => handleCategoriesClick(t('kidney'))}
                                    className="button-general-leftbar">{t('kidney')}</button>
                            <button onClick={() => handleCategoriesClick(t('brain'))}
                                    className="button-general-leftbar">{t('brain')}</button>
                            <button onClick={() => handleCategoriesClick(t('specialized'))}
                                    className="button-general-leftbar">{t('specialized')}</button>
                            <button onClick={() => handleCategoriesClick(t('other'))}
                                    className="button-general-leftbar">{t('other')}</button>
                        </div>
                    </div>
                </div>
            )}
            {currentDiv === 'Leftbar-hidden-MainPage' && (
                <div className="left-bar-hidden left-bar-size-main" id="hiddenSidebar2">
                    <div className="menu">
                        <img src={hamburger} onClick={handleMainClick} className="menu-picture"
                             alt="Hamburger menu"/>
                    </div>
                </div>
            )}
            {currentDiv === 'Category' && (
                <div className="left-bar-hidden left-bar-size-add" id="hiddenSidebar2">
                    <div className="arrow-menu">
                        <img src={arrowleft} onClick={handleMainClick}
                             className="arrow-left"
                             alt="Arrow left"/>
                    </div>
                    <div className="menu">
                        <img src={plusdark} onClick={handlePlusClick} className="plus-menu-picture"
                             alt="Plus menu"/>
                    </div>
                </div>

            )}

            {currentDiv === 'Category' && (
                <div className="frame-rules">
                    <div className="rules-header">
                        <input className="search-bar" type="text" placeholder={t('searchbar-placeholder')}/>
                    </div>
                    <div className="rules-body-categories">
                        <div className="content-divs-header" style={styles.box}>
                            {t('NameCategories')}
                        </div>
                        <div className="content-divs-header" style={styles.box}>
                            {t('RuleName')}
                        </div>
                        <div className="content-divs-header" style={styles.box}>
                            {t('RuleNumber')}
                        </div>
                        <div className="content-divs-header" style={styles.box}>
                            {t('Author')}
                        </div>
                        <div className="content-divs-header-rightest" style={styles.box}>
                            {t('Date')}
                        </div>
                    </div>
                    <div className="rules-body-content">
                        <div className="content-divs" style={styles.box}>
                            test
                        </div>
                        <div className="content-divs" style={styles.box}>
                            {t('RuleName')}
                        </div>
                        <div className="content-divs" style={styles.box}>
                            {t('RuleNumber')}
                        </div>
                        <div className="content-divs" style={styles.box}>
                            {t('Author')}
                        </div>
                        <div className="content-divs-rightest" style={styles.box}>
                            {t('Date')}
                        </div>
                    </div>

                </div>
            )}

            {currentDiv === 'BuildPage' && (
                <div className="name-section" id="shownSidebar3">
                    <button
                        className="button-middle">{text}</button>
                </div>
            )}

            {currentDiv === 'BuildPage' && (
                <div className="left-bar-backdiv">
                    <div className="left-bar-shown" id="shownSidebar2">
                        <div className="rules-section">
                            <div className="arrow-menu">
                                <img src={arrowleft} onClick={handleMainClick}
                                     className="arrow-left"
                                     alt="Arrow left"/>
                            </div>
                            <div className="menu">
                                <img src={safedark} className="menu-picture"
                                     alt="Safe menu"/>
                            </div>
                            <div className="menu">
                                <img src={deletedark} onClick={handlePlusClick} className="menu-picture"
                                     alt="Delete menu"/>
                            </div>
                            <div className="menu">
                                <img src={hamburger} onClick={handleHamburgerRulesBuildClick}
                                     className="menu-picture"
                                     alt="Hamburger menu"/>
                            </div>
                        </div>
                        <div className="button-section">
                            <button onClick={() => handleCategoriesClick(t('child'))}
                                    className="button-general-leftbar">{t('child')}</button>
                            <button onClick={() => handleCategoriesClick(t('lung'))}
                                    className="button-general-leftbar">{t('lung')}</button>
                            <button onClick={() => handleCategoriesClick(t('heart'))}
                                    className="button-general-leftbar">{t('heart')}</button>
                            <button onClick={() => handleCategoriesClick(t('stomach '))}
                                    className="button-general-leftbar">{t('stomach')}</button>
                            <button onClick={() => handleCategoriesClick(t('leg'))}
                                    className="button-general-leftbar">{t('leg')}</button>
                            <button onClick={() => handleCategoriesClick(t('arms'))}
                                    className="button-general-leftbar">{t('arms')}</button>
                            <button onClick={() => handleCategoriesClick(t('liver'))}
                                    className="button-general-leftbar">{t('liver')}</button>
                            <button onClick={() => handleCategoriesClick(t('gallbladder'))}
                                    className="button-general-leftbar">{t('gallbladder')}</button>
                            <button onClick={() => handleCategoriesClick(t('kidney'))}
                                    className="button-general-leftbar">{t('kidney')}</button>
                            <button onClick={() => handleCategoriesClick(t('brain'))}
                                    className="button-general-leftbar">{t('brain')}</button>
                            <button onClick={() => handleCategoriesClick(t('specialized'))}
                                    className="button-general-leftbar">{t('specialized')}</button>
                            <button onClick={() => handleCategoriesClick(t('other'))}
                                    className="button-general-leftbar">{t('other')}</button>
                        </div>
                    </div>
                </div>
            )}
            {currentDiv === 'Leftbar-hidden-RulesPage' && (
                <div className="left-bar-hidden left-bar-size-build" id="hiddenSidebar2">
                    <div className="arrow-menu">
                        <img src={arrowleft} onClick={handleMainClick}
                             className="arrow-left"
                             alt="Arrow left"/>
                    </div>
                    <div className="menu">
                        <img src={safedark} onClick={handlePlusClick} className="menu-picture"
                             alt="Safe menu"/>
                    </div>
                    <div className="menu">
                        <img src={deletedark} onClick={handlePlusClick} className="menu-picture"
                             alt="Delete menu"/>
                    </div>
                    <div className="menu">
                        <img src={hamburger} onClick={handlePlusClick} className="menu-picture"
                             alt="Hamburger menu"/>
                    </div>
                </div>

            )}


            <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
                <div className="hamburger-menu-div">
                    <button className="hamburger-button" onClick={toggleMenu}>
                        {/* Hamburger Icon */}
                        <span className="hamburger-icon"></span>
                        <span className="hamburger-icon"></span>
                        <span className="hamburger-icon"></span>
                    </button>

                    <img src={apple} className="logo-in-hamburger-menu" alt="Logo"/>
                </div>
            </div>

            {/* Das Menü, das den gesamten Bildschirm abdeckt */}
            <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
                <div className="menu-items">


                    <a href="#contact" onClick={toggleMenu}>Home</a>
                    <Link to="/RulesPage">
                        <a href="#about" onClick={toggleMenu}>Regeln</a>
                    </Link>
                    <a href="#about" onClick={toggleMenu}>Dokumente</a>
                    <a href="#services" onClick={toggleMenu}>Info</a>
                    <a href="#contact" onClick={toggleMenu}>Support</a>
                    <a href="#contact" onClick={toggleMenu}>Logout</a>
                </div>
            </div>
            </body>

        </>

    )
        ;
}

export default RulesPage;

