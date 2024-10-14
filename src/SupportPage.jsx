import React, { useState } from 'react';
import './stylesheets/leftbar/buttons.css';
import './stylesheets/supportpage/support.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import logo from './pictures/hamburger-menu.png';
import { Link } from 'react-router-dom';
import regeln from './pictures/regeln.png';
import info from './pictures/info.png';
import support from './pictures/support.png';
import language from './pictures/language.png';
import login from './pictures/login-picture.png';
import document from "./pictures/document.png";
import moon from "./pictures/moon.png";
import sun from "./pictures/sun.png";

function SupportPage() {

    const [showdarklight, setDarklight] = useState(true);

    const Mode = () => {
        setDarklight(!showdarklight);
    };

    const [btnText, setBtnText] = useState('Submit');
    const [isActive, setIsActive] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target); // Holt die Formular-Daten

        try {
            // Sende die Daten an die Formspree-API
            const response = await fetch('https://formspree.io/f/movqqjlb', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setFormStatus('Danke für Ihre Nachricht! Wir melden uns bald.');
                setBtnText('Thanks');
                setIsActive(true);

                setTimeout(() => {
                    window.location.reload();
                }, 3500);

            } else {
                setFormStatus('Es gab ein Problem beim Absenden des Formulars.');
            }
        } catch (error) {
            setFormStatus('Fehler beim Absenden. Bitte versuchen Sie es später erneut.');
        }
    };

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <body className="support">
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
        </div>

        <div className="field-container">
            <form onSubmit={handleSubmit}>
                <div className="text-fields-container">
                    <input type="text" id="name" name="name" className="contact-inputs" placeholder="Name" required/>
                    <input type="email" id="email" name="email" className="contact-inputs" placeholder="E-Mail"
                           required/>
                    <textarea id="message" name="message" className="contact-messages" placeholder="Nachricht"
                              required></textarea>
                </div>

                <div>
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
            {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
        </body>
    );
}

export default SupportPage;
