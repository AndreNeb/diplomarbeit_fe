import './i18n'
import {useTranslation} from "react-i18next";


import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from "react-router-dom";

import login from './pictures/lightMode/login-picture_lightMode.png';
import language from './pictures/lightMode/language_lightMode.png';
import regeln from './pictures/lightMode/regeln_lightMode.png';
import info from './pictures/lightMode/info_lightMode.png';
import support from './pictures/lightMode/support_lightMode.png';
import patienten from './pictures/other/patienten.png';
import maske from './pictures/other/maske.png';
import spritze from './pictures/other/spritze.png';
import wartezimmer from './pictures/other/wartezimmer.png';
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
import './stylesheets/topbar/topbar.css';
import './stylesheets/Rules/leftbar/leftbar.css';
import './stylesheets/Rules/leftbar/buttons.css';
import './stylesheets/general/general.css';
import './stylesheets/homepage-widgets/small-widgets.css';
import './stylesheets/homepage-widgets/big-widgets.css';
import RulesPage from './RulesPage';
import SupportPage from "./SupportPage";
import InfoPage from "./InfoPage";
import DocumentPage from "./DocumentPage";
import LogInOutPage from "./LogInOutPage";


function App() {

    const {t} = useTranslation();

    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [showdarklight, setDarklight] = useState(true);

    const Mode = () => {
        setDarklight(!showdarklight);
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
        setDarkMode(prevMode => !prevMode);  // Der Zustand wird umgeschaltet

    };

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.body.className = darkMode ? 'dark' : 'light';
    }, [darkMode]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setDarkMode(e.matches);

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);


    return (<Router>
            <>
                <Routes>
                    <Route path="/" element={
                        <body className={`homepage ${darkMode ? 'dark' : 'light'}`}>
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
                                            <img src={darkMode ? documentBlack : documentImage} className="icons" alt={t('documents')}/>
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
                        <div className="widgets">
                            <div className="small-widgets-outer-div">
                                <div className="general-small-widget-layout small-widget1">
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
                                <div className="general-small-widget-layout small-widget2">
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
                                <div className="general-small-widget-layout small-widget3">
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
                                <div className="general-small-widget-layout small-widget4">
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
                    }
                    />

                    <Route path="/rulesPage" element={<RulesPage/>}/>
                    <Route path="/documentPage" element={<DocumentPage/>}/>
                    <Route path="/infoPage" element={<InfoPage/>}/>
                    <Route path="/supportPage" element={<SupportPage/>}/>
                    <Route path="/loginoutpage" element={<LogInOutPage/>}/>
                </Routes>

            </>

        </Router>
    );
}

export default App;