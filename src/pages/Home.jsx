import React, {useContext, useState} from 'react';

import patienten from "../pictures/lightMode/patients_lightMode.png";
import patientenBlack from "../pictures/darkMode/patients_darkMode.png";
import maske from "../pictures/lightMode/mask_lightMode.png";
import maskeBlack from "../pictures/darkMode/mask_darkMode.png";
import spritze from "../pictures/lightMode/syringe_lightMode.png";
import spritzeBlack from "../pictures/darkMode/syringe_darkMode.png";
import wartezimmer from "../pictures/lightMode/waitingroom_lightMode.png";
import wartezimmerBlack from "../pictures/darkMode/waitingroom_darkMode.png";
import {useTranslation} from "react-i18next";
import Header from '../components/Header';
import {DarkModeContext} from '../components/DarkModeContext';
import HiddenHeader from "../components/HiddenHeader";


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
        <HiddenHeader/>

        <div className="small-widgets-outer-div">
            <div
                className={`general-small-widget-layout small-widget1 ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget1-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{color: darkMode ? "white":"gray", transition: "color 1.1s ease"}}>{t('patient')}</div>
                    <div className="small-widgets-text-middle" style={{color: darkMode ? "white":"black", transition: "color 1.1s ease"}}>4.500</div>
                    <div className="small-widgets-text-bottom" style={{color: darkMode ? "white":"#077507", transition: "color 1.1s ease"}}>&uarr; &#43;8,5 &#037;</div>
                </div>
                <div>
                    <img src={darkMode ? patientenBlack : patienten} className="small-widgets-picture-layout"
                         alt="Patienten"/>
                </div>
            </div>
            <div className={`general-small-widget-layout small-widget2 ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget2-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{color: darkMode ? "white":"gray", transition: "color 1.1s ease"}}>{t('op-workload')}</div>
                    <div className="small-widgets-text-middle" style={{color: darkMode ? "white":"black", transition: "color 1.1s ease"}}>70 &#037;</div>
                    <div className="small-widgets-text-bottom" style={{color: darkMode ? "white":"#077507", transition: "color 1.1s ease"}}>8 /
                        9 {t('unavailable')}</div>
                </div>
                <div>
                    <img src={darkMode ? maskeBlack : maske} className="small-widgets-picture-layout"
                         alt="OP - Maske"/>
                </div>
            </div>
            <div className={`general-small-widget-layout small-widget3 ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget3-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{color: darkMode ? "white":"gray", transition: "color 1.1s ease"}}>{t('anesthesia')}</div>
                    <div className="small-widgets-text-middle" style={{color: darkMode ? "white":"black", transition: "color 1.1s ease"}}>400</div>
                    <div className="small-widgets-text-bottom" style={{color: darkMode ? "white":"#077507", transition: "color 1.1s ease"}}>&darr; 4,5 &#037;</div>
                </div>
                <div>
                    <img src={darkMode ? spritzeBlack : spritze} className="small-widgets-picture-layout"
                         alt="Spritze"/>
                </div>
            </div>
            <div className={`general-small-widget-layout small-widget4 ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget4-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{color: darkMode ? "white":"gray", transition: "color 1.1s ease"}}>{t('waiting-room')}</div>
                    <div className="small-widgets-text-middle" style={{color: darkMode ? "white":"black", transition: "color 1.1s ease"}}>9 {t('patients')}</div>
                    <div className="small-widgets-text-bottom" style={{color: darkMode ? "white":"#077507", transition: "color 1.1s ease"}}>{t('waiting-room-usage')}</div>
                </div>
                <div>
                    <img src={darkMode ? wartezimmerBlack : wartezimmer}
                         className="small-widgets-picture-layout wartezimmer-picture-layout"
                         alt="Wartezimmer"/>
                </div>
            </div>
        </div>


        <div className="big-widgets-general">

            <div className={`big-widget ${darkMode ? 'dark' : 'light'}`}>Kalender</div>
            <div className={`big-widget ${darkMode ? 'dark' : 'light'}`}>Arbeitszeit</div>


        </div>



        </body>
    );
}

export default Home;
