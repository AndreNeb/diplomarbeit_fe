import React, {useContext, useState} from 'react';

import {Link} from "react-router-dom";
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
                        marginRight: "40%"
                    }}>N A R K O</span>
                </div>
            </div>


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
        </div>
    )
        ;
}

export default HiddenHeader;