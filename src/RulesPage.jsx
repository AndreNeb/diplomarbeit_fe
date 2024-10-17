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
import arrowleft from "./pictures/arrow-left.png";
import plusdark from "./pictures/plus-black.png";
import safedark from "./pictures/safe-black.png";
import deletedark from "./pictures/delete-black.png";

import React, {useState} from 'react';

import {useTranslation} from "react-i18next";
import document from "./pictures/document.png";
import moon from "./pictures/moon.png";
import sun from "./pictures/sun.png";
import apple from "./pictures/apple.png";


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


    const Mode = () => {
        setDarklight(!showdarklight);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const styles = {
        box: {
            width: "20%",
            boxSizing: "border-box", // Funktioniert in React, camelCase!
            wordWrap: "break-word",  // Funktioniert ebenfalls in React, camelCase!
            overflowWrap: "break-word", // Unterstützt den Umbruch von langen Wörtern
        },
    };

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
                                    <img src={regeln} className="icons" alt={t('rules')}/>
                                    <div className="tooltip">{t('rules')}</div>
                                </div>
                            </Link>

                            <Link to="/DocumentPage">
                                <div className="icons-tooltip">
                                    <img src={document} className="icons" alt={t('documents')}/>
                                    <div className="tooltip">{t('documents')}</div>
                                </div>
                            </Link>

                            <Link to="/InfoPage">
                                <div className="icons-tooltip">
                                    <img src={info} className="icons" alt={t('info')}/>
                                    <div className="tooltip">{t('info')}</div>
                                </div>
                            </Link>

                            <Link to="/SupportPage">
                                <div className="icons-tooltip">
                                    <img src={support} className="icons" alt={t('support')}/>
                                    <div className="tooltip">{t('support')}</div>
                                </div>
                            </Link>


                        </div>
                    </div>
                    <div className="middle-section">
                        <input className="search-bar" type="text" placeholder={t('searchbar-placeholder')}/>
                    </div>
                    <div className="right-section">
                        {showdarklight ? (
                            <img onClick={Mode} src={moon} className="icons mode" alt="Mode"/>
                        ) : (
                            <img onClick={Mode} src={sun} className="icons mode" alt="Mode"/>
                        )}
                        <img src={language} className="icons" alt={t('language')}/>
                        <img src={login} className="icons" alt="login"/>
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
                            <div  className="content-divs-header" style={styles.box}>
                                {t('NameCategories')}
                            </div>
                            <div  className="content-divs-header" style={styles.box}>
                                {t('RuleName')}
                            </div>
                            <div  className="content-divs-header" style={styles.box}>
                                {t('RuleNumber')}
                            </div>
                            <div  className="content-divs-header" style={styles.box}>
                                {t('Author')}
                            </div>
                            <div  className="content-divs-header-rightest" style={styles.box}>
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
            </div>


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