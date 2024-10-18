import React, {useState} from 'react';
import './stylesheets/Rules/leftbar/buttons.css';
import './stylesheets/supportpage/support.css';
import classNames from 'classnames';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import regeln from './pictures/regeln.png';
import info from './pictures/info.png';
import support from './pictures/support.png';
import language from './pictures/language.png';
import login from './pictures/login-picture.png';
import document from "./pictures/document.png";
import moon from "./pictures/moon.png";
import sun from "./pictures/sun.png";
import apple from "./pictures/apple.png";

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

    return (<body className="support">
    <div className="header">
        <div className="left-section">
            <Link to="/">
                <img src={apple} className="logo" alt={t('logo')}/>
            </Link>

            <div className="topbar-functional-divs">
                    <Link to="/RulesPage">
                        <div className="icons-tooltip">
                            <img src={regeln} className="icons" alt={t('rules')}/>
                            <div className="tooltip">{t('rules')}</div>
                        </div>
                    </Link>

                    <Link to="/DocumentPage">
                        <div className="icons-tooltip">
                            <img src={document} className="icons" alt={t('documents')}/>
                            <div className="tooltip">{t('documents')}</div>
                        </div>
                    </Link>

                    <Link to="/InfoPage">
                        <div className="icons-tooltip">
                            <img src={info} className="icons" alt={t('info')}/>
                            <div className="tooltip">{t('info')}</div>
                        </div>
                    </Link>

                    <Link to="/SupportPage">
                        <div className="icons-tooltip">
                            <img src={support} className="icons" alt={t('support')}/>
                            <div className="tooltip">{t('support')}</div>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="middle-section">
                <input className="search-bar" type="text" placeholder={t('searchbar-placeholder')}/>
            </div>
            <div className="right-section">
                {showdarklight ? (
                    <img onClick={Mode} src={moon} className="icons mode" alt="Mode"/>
                ) : (
                    <img onClick={Mode} src={sun} className="icons mode" alt="Mode"/>
                )}
                <img src={language} className="icons" alt={t('language')}/>
                <img src={login} className="icons" alt="login"/>
            </div>
        </div>


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
    </body>);
}

export default SupportPage;
