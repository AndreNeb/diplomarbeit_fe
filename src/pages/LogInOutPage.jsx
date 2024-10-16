import '../stylesheets/loginoutpage/loginout.css';
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import classNames from "classnames";

function LogInOutPage() {
    const {t} = useTranslation();
    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [btnText, setBtnText] = useState(t('log-text'));
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

        <body className="general-log-field">
            <div className="general-inner-log-field">
                <span className="log-text">{t('log-text')}</span>


                <div className="field-container">


                    <div className="text-fields-container">
                        <input type="text" name="name" className="contact-inputs" placeholder={t('username')}
                               required/>
                        <input type="password" name="email" className="contact-inputs" placeholder={t('password')}
                               required/>
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

                </div>


            </div>
        </body>
    );
}

export default LogInOutPage;
