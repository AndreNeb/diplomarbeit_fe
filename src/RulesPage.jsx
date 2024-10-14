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
    const [currentDiv, setCurrentDiv] = useState('div1'); // initial div1 sichtbar

    const handleMainClick = () => {
        setCurrentDiv('div1');
    };

    const handleHamburgerClick = () => {
        setCurrentDiv('div2');
    };

    const handleCategoriesClick = () => {
        setCurrentDiv('div3');
    };

    const handlePlusClick = () => {
        setCurrentDiv('div4');
    };

    const handleHamburger2Click = () => {
        setCurrentDiv('div5');
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


                {currentDiv === 'div1' && (
                    <div className="left-bar-backdiv">
                        <div className="left-bar-shown" id="shownSidebar2">
                            <div className="top-leftbar-section">
                                <div className="hamburger-menu">
                                    <img src={hamburger} onClick={handleHamburgerClick}
                                         className="hamburger-menu-picture"
                                         alt="Hamburger menu"/>
                                </div>
                                <div className="searchbar-menu">
                                    <input className="search-bar" type="text" placeholder={t('searchbar-placeholder')}/>
                                </div>
                            </div>
                            <div className="button-section">
                                <button onClick={() => handleCategoriesClick(t('child'))}
                                        className="button-general">{t('child')}</button>
                                <button onClick={() => handleCategoriesClick(t('lung'))}
                                        className="button-general">{t('lung')}</button>
                                <button onClick={() => handleCategoriesClick(t('heart'))}
                                        className="button-general">{t('heart')}</button>
                                <button onClick={() => handleCategoriesClick(t('stomach '))}
                                        className="button-general">{t('stomach')}</button>
                                <button onClick={() => handleCategoriesClick(t('leg'))}
                                        className="button-general">{t('leg')}</button>
                                <button onClick={() => handleCategoriesClick(t('arms'))}
                                        className="button-general">{t('arms')}</button>
                                <button onClick={() => handleCategoriesClick(t('liver'))}
                                        className="button-general">{t('liver')}</button>
                                <button onClick={() => handleCategoriesClick(t('gallbladder'))}
                                        className="button-general">{t('gallbladder')}</button>
                                <button onClick={() => handleCategoriesClick(t('kidney'))}
                                        className="button-general">{t('kidney')}</button>
                                <button onClick={() => handleCategoriesClick(t('brain'))}
                                        className="button-general">{t('brain')}</button>
                                <button onClick={() => handleCategoriesClick(t('specialized'))}
                                        className="button-general">{t('specialized')}</button>
                                <button onClick={() => handleCategoriesClick(t('other'))}
                                        className="button-general">{t('other')}</button>
                            </div>
                        </div>
                    </div>
                )}
                {currentDiv === 'div2' && (
                    <div className="left-bar-hidden" id="hiddenSidebar2">
                        <div className="hamburger-menu">
                            <img src={hamburger} onClick={handleMainClick} className="hamburger-menu-picture"
                                 alt="Hamburger menu"/>
                        </div>
                    </div>
                )}
                {currentDiv === 'div3' && (
                    <div className="left-bar-hidden" id="hiddenSidebar2">
                        <div className="arrow-menu">
                            <img src={arrowleft} onClick={handleMainClick}
                                 className="arrow-left"
                                 alt="Arrow left"/>
                        </div>
                        <div className="hamburger-menu">
                            <img src={plusdark} onClick={handlePlusClick} className="hamburger-menu-picture"
                                 alt="Hamburger menu"/>
                        </div>
                    </div>

                )}

                {currentDiv === 'div3' && (
                    <div className="right-section-rules-hidden">
                        <div className="name-section" id="shownSidebar3">
                            <div onClick={() => handleCategoriesClick(t('child'))}
                                 className="frame-rules">{t('support')}</div>
                        </div>
                    </div>
                )}

                {currentDiv === 'div4' && (

                    <div className="right-section-rules">
                        <div className="name-section" id="shownSidebar3">
                            <button
                                    className="button-middle">{t('child')}</button>
                        </div>
                    </div>
                )}

                {currentDiv === 'div4' && (
                    <div className="left-bar-backdiv">
                        <div className="left-bar-shown" id="shownSidebar2">
                            <div className="rules-section">
                                <div className="arrow-menu">
                                    <img src={arrowleft} onClick={handleMainClick}
                                         className="arrow-left"
                                         alt="Arrow left"/>
                                </div>
                                <div className="hamburger-menu">
                                    <img src={safedark} className="hamburger-menu-picture"
                                         alt="Hamburger menu"/>
                                </div>
                                <div className="hamburger-menu">
                                    <img src={deletedark} onClick={handlePlusClick} className="hamburger-menu-picture"
                                         alt="Hamburger menu"/>
                                </div>
                                <div className="hamburger-menu">
                                    <img src={hamburger} onClick={handleHamburger2Click}
                                         className="hamburger-menu-picture"
                                         alt="Hamburger menu"/>
                                </div>
                            </div>
                            <div className="button-section">
                                <button onClick={() => handleCategoriesClick(t('child'))}
                                        className="button-general">{t('child')}</button>
                                <button onClick={() => handleCategoriesClick(t('lung'))}
                                        className="button-general">{t('lung')}</button>
                                <button onClick={() => handleCategoriesClick(t('heart'))}
                                        className="button-general">{t('heart')}</button>
                                <button onClick={() => handleCategoriesClick(t('stomach '))}
                                        className="button-general">{t('stomach')}</button>
                                <button onClick={() => handleCategoriesClick(t('leg'))}
                                        className="button-general">{t('leg')}</button>
                                <button onClick={() => handleCategoriesClick(t('arms'))}
                                        className="button-general">{t('arms')}</button>
                                <button onClick={() => handleCategoriesClick(t('liver'))}
                                        className="button-general">{t('liver')}</button>
                                <button onClick={() => handleCategoriesClick(t('gallbladder'))}
                                        className="button-general">{t('gallbladder')}</button>
                                <button onClick={() => handleCategoriesClick(t('kidney'))}
                                        className="button-general">{t('kidney')}</button>
                                <button onClick={() => handleCategoriesClick(t('brain'))}
                                        className="button-general">{t('brain')}</button>
                                <button onClick={() => handleCategoriesClick(t('specialized'))}
                                        className="button-general">{t('specialized')}</button>
                                <button onClick={() => handleCategoriesClick(t('other'))}
                                        className="button-general">{t('other')}</button>
                            </div>
                        </div>
                    </div>
                )}
                {currentDiv === 'div5' && (
                    <div className="left-bar-hidden" id="hiddenSidebar2">
                        <div className="arrow-menu">
                            <img src={arrowleft} onClick={handleMainClick}
                                 className="arrow-left"
                                 alt="Arrow left"/>
                        </div>
                        <div className="hamburger-menu">
                            <img src={safedark} onClick={handlePlusClick} className="hamburger-menu-picture"
                                 alt="Hamburger menu"/>
                        </div>
                        <div className="hamburger-menu">
                            <img src={deletedark} onClick={handlePlusClick} className="hamburger-menu-picture"
                                 alt="Hamburger menu"/>
                        </div>
                        <div className="hamburger-menu">
                            <img src={hamburger} onClick={handlePlusClick} className="hamburger-menu-picture"
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