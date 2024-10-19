import {Link} from "react-router-dom";

import '../stylesheets/topbar/topbar.css';
import '../stylesheets/Rules/leftbar/buttons.css'
import '../stylesheets/Rules/leftbar/leftbar.css'
import '../stylesheets/Rules/Build-grid.css'
import '../stylesheets/Rules/Rules-overview.css';
import arrowleft from "../pictures/lightMode/arrow-left_lightMode.png";
import plusdark from "../pictures/lightMode/plus_lightMode.png";
import safedark from "../pictures/lightMode/safe_lightMode.png";
import deletedark from "../pictures/lightMode/delete_lightMode.png";
import arrowrightlight from "../pictures/darkMode/arrow_right_darkMode.png";
import arrowrightdark from "../pictures/lightMode/arrow_right_lightMode.png";
import React, {useContext, useState} from 'react';
import {useTranslation} from "react-i18next";
import apple from '../pictures/other/apple.png';
import hamburger from '../pictures/other/hamburger-menu.png';
import Header from "../components/Header";
import {DarkModeContext} from "../components/DarkModeContext";




function RulesPage() {

    const {t} = useTranslation();

    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [buttonTexts, setButtonTexts] = useState([]);

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

    const [divs, setDivs] = useState([]); // Array, das die dynamisch hinzugefügten divs enthält

    const handleAddDiv = (message) => {
        setDivs([...divs, {}]); // Füge ein neues leeres Objekt hinzu, um ein weiteres div zu repräsentieren
        setButtonTexts([...buttonTexts, `${message}`]);
    };

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const styles = {
        box: {
            width: "20%",
            boxSizing: "border-box", // Funktioniert in React, camelCase!
            wordWrap: "break-word",  // Funktioniert ebenfalls in React, camelCase!
            overflowWrap: "break-word", // Unterstützt den Umbruch von langen Wörtern
        },
    };
    const stylesadd = {
        add: {
            display: "flex",
            flexWrap: "wrap", // Elemente umbrechen

            justifyContent: "flex-start", // Start der Buttons links ausrichten
            alignItems: "center",
            alignContent: "flex-start",
            boxSizing: "border-box",
        },
    };




    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };




    return (

        <>

            <body className="rules">

            <Header/>

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
                            <button onClick={() => handleAddDiv(t('if'))}
                                    className="button-general-leftbar-add">{t('if')}</button>
                            <button onClick={() => handleAddDiv(t('and'))}
                                    className="button-general-leftbar-add">{t('and')}</button>
                            <button onClick={() => handleAddDiv(t('or'))}
                                    className="button-general-leftbar-add">{t('or')}</button>
                            <button onClick={() => handleAddDiv(t('text'))}
                                    className="button-general-leftbar-add">{t('text')}</button>
                            <button onClick={() => handleAddDiv(t('greater than'))}
                                    className="button-general-leftbar-add">{t('greater than')}</button>
                            <button onClick={() => handleAddDiv(t('less than'))}
                                    className="button-general-leftbar-add">{t('less than')}</button>
                            <button onClick={() => handleAddDiv(t('equal'))}
                                    className="button-general-leftbar-add">{t('equal')}</button>
                        </div>
                        <div className="frame-add" style={stylesadd.add}>
                            {divs.map((div, index) => (
                                <div key={index} className="grid-different-button">
                                    <button className="query-button">{buttonTexts[index]}</button>
                                    <div className="arrow-right">
                                        <img src={darkMode ? arrowrightlight : arrowrightdark}
                                             className="arrow-right-size"
                                             alt="Arrow right"/>
                                    </div>
                                </div>


                            ))}
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

