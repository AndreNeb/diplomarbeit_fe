import React, {useState} from 'react';
import '../stylesheets/Rules/leftbar/buttons.css';
import '../stylesheets/supportpage/support.css';
import classNames from 'classnames';
import {useTranslation} from 'react-i18next';
import {HashRouter, Link} from 'react-router-dom';
import regeln from '../pictures/lightMode/regeln_lightMode.png';
import info from '../pictures/lightMode/info_lightMode.png';
import support from '../pictures/lightMode/support_lightMode.png';
import language from '../pictures/lightMode/language_lightMode.png';
import login from '../pictures/lightMode/login-picture_lightMode.png';
import document from "../pictures/lightMode/document_lightMode.png";
import moon from "../pictures/lightMode/moon_lightMode.png";
import sun from "../pictures/darkMode/sun_darkMode.png";
import apple from "../pictures/other/NARKO_Logo.png";
import Header from "../components/Header";

function SupportPage() {

    const {t} = useTranslation();
    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [showdarklight, setDarklight] = useState(true);

    const Mode = () => {
        setDarklight(!showdarklight);
    };


    const [btnText, setBtnText] = useState(t('submit'));
    const [isActive, setIsActive] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target); // Holt die Formular-Daten

        try {
            // Sende die Daten an die Formspree - API
            const response = await fetch('https://formspree.io/f/movqqjlb', {
                method: 'POST', body: formData, headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setBtnText(t('thanks'));
                setIsActive(true);

                setTimeout(() => {
                    window.location.reload(); // Seite neu laden nach 3 s
                }, 4000);

            } else {
                setBtnText(t('error'))

                setTimeout(() => {
                    window.location.reload(); // Seite neu laden nach 3 s
                }, 4000);
            }
        } catch (error) {

        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <body className="support">

        <Header/>

            <div className="general-container">
                <div className="general-inner-container">
                    <span className="text">{t('support-text')}</span>
                    <div className="field-container">

                        <form onSubmit={handleSubmit}>
                            <div className="text-fields-container">
                                <input type="text" name="name" className="contact-inputs" placeholder={t('name')}
                                       required/>
                                <input type="email" name="email" className="contact-inputs" placeholder={t('email')}
                                       required/>
                                <textarea name="message" className="contact-messages" placeholder={t('message')}
                                          required></textarea>
                            </div>


                            <div className="button-container">
                                <button type="submit" className={classNames('submit-button', {active: isActive})}>
                                    <p>{btnText}</p>
                                    <div className="check-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {formStatus && <p className="form-status">{formStatus}</p>}


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
            </div>
        </body>

    );
}

export default SupportPage;
