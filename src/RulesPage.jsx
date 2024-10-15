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


function RulesPage() {

    const {t} = useTranslation();

    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    /*
    const [showSidebar, setShowSidebar] = useState(true);
    const [showSpecificSidebar, setShowSpecificSidebar] = useState(true);
    const [text, setText] = useState("");

    const handleClickMenu = () => {
        setShowSidebar(!showSidebar);
    };

    const handleClickOptions = (message) => {
        setText(message)
        setShowSpecificSidebar(!showSpecificSidebar);
    };
*/
    const [currentDiv, setCurrentDiv] = useState('MainPage'); // initial div1 sichtbar

    const handleMainClick = () => {
        setCurrentDiv('MainPage');
    };

    const handleHamburgerClick = () => {
        setCurrentDiv('Leftbar-hidden-MainPage');
    };

    const handleCategoriesClick = () => {
        setCurrentDiv('Category');
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

                            <img src={regeln} className="icons-left" alt="Rules"/>

                        </Link>

                        <Link to="/DocumentPage">

                            <img src={document} className="icons-left" alt="Document"/>

                        </Link>

                        <Link to="/InfoPage">
                            <img src={info} className="icons-left" alt="Info"/>
                        </Link>

                        <Link to="/SupportPage">
                            <img src={support} className="icons-left" alt="Support"/>
                        </Link>

                    </div>
                </div>
                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder={t('searchbar-placeholder')}/>
                </div>
                <div className="right-section">
                    {showdarklight ? (
                        <img onClick={Mode} src={moon} className="mode" alt="Mode"/>
                    ) : (
                        <img onClick={Mode} src={sun} className="mode" alt="Mode"/>
                    )}
                    <img src={language} className="icons-right" alt={t('language')}/>
                    <img src={login} className="login" alt="login"/>
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
                                    <input className="search-bar" type="text" placeholder={t('searchbar-placeholder')}/>
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
                            <div onClick={() => handleCategoriesClick(t('child'))}
                                 className="frame-rules">{t('support')}</div>
                )}

                {currentDiv === 'BuildPage' && (

                    <div className="right-section-rules">
                        <div className="name-section" id="shownSidebar3">
                            <button
                                    className="button-middle">{t('child')}</button>
                        </div>
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
            </body>

        </>

    )
        ;
}

export default RulesPage;