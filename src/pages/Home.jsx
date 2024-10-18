import React, {useContext, useState} from 'react';

import {Link} from "react-router-dom";
import apple from "../pictures/other/apple.png";
import patienten from "../pictures/other/patienten.png";
import maske from "../pictures/other/maske.png";
import spritze from "../pictures/other/spritze.png";
import wartezimmer from "../pictures/other/wartezimmer.png";
import hamburger from "../pictures/other/hamburger-menu.png";
import {useTranslation} from "react-i18next";
import Header from '../components/Header';
import {DarkModeContext} from '../components/DarkModeContext';


function Home() {
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


    return (

        <body className={`homepage ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "" : "rgba(250, 246, 240, 255)", transition: "background-color 1.1s ease"}}>
        <Header/>

        <div className="small-widgets-outer-div">
            <div className="general-small-widget-layout small-widget1" style={{backgroundColor: darkMode ? "rgba(250, 246, 240, 255)" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget1-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top">{t('patient')}</div>
                    <div className="small-widgets-text-middle">4.500</div>
                    <div className="small-widgets-text-bottom">&uarr; &#43;8,5 &#037;</div>
                </div>
                <div>
                    <img src={patienten} className="small-widgets-picture-layout"
                         alt="Patienten"/>
                </div>
            </div>
            <div className="general-small-widget-layout small-widget2" style={{backgroundColor: darkMode ? "rgba(250, 246, 240, 255)" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget2-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top">{t('op-workload')}</div>
                    <div className="small-widgets-text-middle">70 &#037;</div>
                    <div className="small-widgets-text-bottom">8 /
                        9 {t('unavailable')}</div>
                </div>
                <div>
                    <img src={maske} className="small-widgets-picture-layout"
                         alt="OP - Maske"/>
                </div>
            </div>
            <div className="general-small-widget-layout small-widget3" style={{backgroundColor: darkMode ? "rgba(250, 246, 240, 255)" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget3-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top">{t('anesthesia')}</div>
                    <div className="small-widgets-text-middle">400</div>
                    <div className="small-widgets-text-bottom">&darr; 4,5 &#037;</div>
                </div>
                <div>
                    <img src={spritze} className="small-widgets-picture-layout"
                         alt="Spritze"/>
                </div>
            </div>
            <div className="general-small-widget-layout small-widget4" style={{backgroundColor: darkMode ? "rgba(250, 246, 240, 255)" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget4-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top">{t('waiting-room')}</div>
                    <div className="small-widgets-text-middle">9 {t('patients')}</div>
                    <div
                        className="small-widgets-text-bottom">  {t('waiting-room-usage')}</div>
                </div>
                <div>
                    <img src={wartezimmer}
                         className="small-widgets-picture-layout wartezimmer-picture-layout"
                         alt="Wartezimmer"/>
                </div>
            </div>
        </div>


        <div className="big-widgets-general">

            <div className="big-widget">Kalender</div>
            <div className="big-widget">Arbeitszeit</div>


        </div>


        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
            <div className="hamburger-menu-div">
                <button className="hamburger-button" onClick={toggleMenu}>
                    {/* Hamburger Icon */}
                    {/*<span className="hamburger-icon"></span>
                                        <span className="hamburger-icon"></span>
                                        <span className="hamburger-icon"></span>*/}
                    <img src={hamburger} className="icons" alt="HamburgerMenu"/>

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
    );
}

export default Home;
