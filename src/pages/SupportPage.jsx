import React, {useContext, useState} from 'react';
import '../stylesheets/rules/leftbar/buttons.css';
import '../stylesheets/supportpage/support.css';
import classNames from 'classnames';
import {useTranslation} from 'react-i18next';
import Header from "../components/Header";
import {DarkModeContext} from "../components/DarkModeContext";
import HiddenHeader from "../components/HiddenHeader";

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
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    return (

        <body className={`support ${darkMode ? 'dark' : 'light'}`}>

        <Header/>
        <HiddenHeader/>

        <div className="general-container" style={{
            backgroundColor: darkMode ? "black" : "rgba(250, 246, 240, 255)",
            transition: "background-color 1.1s ease"
        }}>
            <div className={`general-inner-container ${darkMode ? 'dark' : 'light'}`}>
                <span className={`text ${darkMode ? 'dark' : 'light'}`}>{t('support-text')}</span>
                <div className="field-container">

                    <form onSubmit={handleSubmit}>
                        <div className="text-fields-container">
                            <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`}
                                   placeholder={t('name')}
                                   required/>
                            <input type="email" name="email" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`}
                                   placeholder={t('email')}
                                   required/>
                            <textarea name="message" className={`contact-messages ${darkMode ? 'dark' : 'light'}`}
                                      placeholder={t('message')}
                                      required></textarea>
                        </div>


                        <div className="button-container">
                            <button type="submit"
                                    className={classNames('submit-button', darkMode ? 'dark' : 'light', {active: isActive})}>
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
        </div>
        </body>

    );
}

export default SupportPage;
