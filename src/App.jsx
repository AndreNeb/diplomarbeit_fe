import './i18n'
import {useTranslation} from "react-i18next";


import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import login from './pictures/login-picture.png';
import logo from './pictures/hamburger-menu.png';
import language from './pictures/language.png';
import regeln from './pictures/regeln.png';
import info from './pictures/info.png';
import support from './pictures/support.png';
import patienten from './pictures/patienten.png';
import maske from './pictures/maske.png';
import spritze from './pictures/spritze.png';
import wartezimmer from './pictures/wartezimmer.png';
import document from './pictures/document.png';
import moon from './pictures/moon.png';
import sun from './pictures/sun.png';
import './stylesheets/topbar/topbar.css';
import './stylesheets/leftbar/leftbar.css';
import './stylesheets/leftbar/buttons.css';
import './stylesheets/general/general.css';
import './stylesheets/homepage-widgets/small-widgets.css';
import './stylesheets/homepage-widgets/big-widgets.css';
import './stylesheets/homepage-widgets/copyrighttext.css';
import RulesPage from './RulesPage';
import SupportPage from "./SupportPage";
import InfoPage from "./InfoPage";
import DocumentPage from "./DocumentPage";


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

    return (
        <Router>
            <>
                <Routes>
                    <Route path="/" element={
                        <body className="homepage">
                        <div className="header">
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


                                    <Link to="/SupportPage" className="icon-link">
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
                        </div>

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
                                    <img src={patienten} className="small-widgets-picture-layout" alt="Patienten"/>
                                </div>
                            </div>
                            <div className="general-small-widget-layout small-widget2">
                                <div className="small-widgets-color small-widget2-color-patienten">
                                    &nbsp;
                                </div>
                                <div className="small-widgets-text">
                                    <div className="small-widgets-text-top">{t('op-workload')}</div>
                                    <div className="small-widgets-text-middle">70 &#037;</div>
                                    <div className="small-widgets-text-bottom">8 / 9 {t('unavailable')}</div>
                                </div>
                                <div>
                                    <img src={maske} className="small-widgets-picture-layout" alt="OP - Maske"/>
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
                                    <img src={spritze} className="small-widgets-picture-layout" alt="Spritze"/>
                                </div>
                            </div>
                            <div className="general-small-widget-layout small-widget4">
                                <div className="small-widgets-color small-widget4-color-patienten">
                                    &nbsp;
                                </div>
                                <div className="small-widgets-text">
                                    <div className="small-widgets-text-top">{t('waiting-room')}</div>
                                    <div className="small-widgets-text-middle">9 {t('patients')}</div>
                                    <div className="small-widgets-text-bottom">  {t('waiting-room-usage')}</div>
                                </div>
                                <div>
                                    <img src={wartezimmer}
                                         className="small-widgets-picture-layout wartezimmer-picture-layout"
                                         alt="Wartezimmer"/>
                                </div>
                            </div>
                        </div>

                        <div className="big-widgets-general">

                            <div className="big-widget">Calendar</div>
                            <div className="big-widget">Arbeitszeit</div>


                        </div>

                        <div className="copyright-text-outer-div">
                            <div className="copyright-text-inner-div">
                                <div>&copy; 2024</div>
                                <br/>
                                Feichtenschlager,
                                Nebauer,
                                Würcher
                                <div className="htl">HTBLuVA Salzburg</div>
                            <br/>
                            </div>
                        </div>
                        </body>}/>

                    <Route path="/rulesPage" element={<RulesPage/>}/>
                    <Route path="/documentPage" element={<DocumentPage/>}/>
                    <Route path="/infoPage" element={<InfoPage/>}/>
                    <Route path="/supportPage" element={<SupportPage/>}/>
                </Routes>
            </>

        </Router>
    );
}

export default App;