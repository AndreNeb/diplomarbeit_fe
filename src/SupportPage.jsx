import React, {useState} from 'react';
import './stylesheets/leftbar/buttons.css';
import './stylesheets/supportpage/support.css';
import classNames from "classnames";
import {useTranslation} from "react-i18next";
import logo from "./pictures/hamburger-menu.png";
import {Link} from "react-router-dom";
import regeln from "./pictures/regeln.png";
import info from "./pictures/info.png";
import support from "./pictures/support.png";
import language from "./pictures/language.png";
import login from "./pictures/login-picture.png";

function SupportPage() {

    const [btnText, setBtnText] = useState("Submit");
    const [isActive, setIsActive] = useState(false);


    const handleClick = () => {
        setBtnText("Thanks");
        setIsActive(true);


        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    const {t} = useTranslation();

    const {i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <body className="support">


        <div className="header">
            <div className="left-section">
                <img src={logo} className="logo" alt="Logo"/>
                <div className="topbar-functional-divs">
                    <Link to="/RulesPage">
                        <button className="Button-topbar">
                            <img src={regeln} className="regeln" alt="Regeln"/>
                        </button>
                    </Link>
                </div>
                <div className="topbar-functional-divs">
                    <Link to="/InfoPage">
                        <button className="Button-topbar">
                            <img src={info} className="info" alt="Info"/>
                        </button>

                    </Link>
                </div>
                <div className="topbar-functional-divs">
                    <Link to="/SupportPage">
                        <button className="Button-topbar">
                            <img src={support} className="support" alt="Support"/>
                        </button>

                    </Link>
                </div>

            </div>
            <div className="middle-section">
                <input className="search-bar" type="text" placeholder={t('searchbar-placeholder')}/>
            </div>
            <div className="right-section">
                <img src={language} className="language" alt={t('language')}/>
                <img src={login} className="login" alt="login"/>
            </div>
        </div>


        <div className="field-container">

            <form action="https://api.web3forms.com/submit" method="POST">

                <div className="text-fields-container">
                    <input type="hidden" name="access_key" value="28d7253d-5b46-4f9b-8884-a5add3df99f0"/>
                    <input type="text" id="name" name="fname" className="contact-inputs" placeholder="Name"/>
                    <input type="text" id="e-mail" name="fname" className="contact-inputs" placeholder="E - Mail"/>
                    <textarea id="message" name="fname" className="contact-messages" placeholder="Nachricht"/>
                </div>

                <div>
                    <button id="btn" onClick={handleClick}
                            className={classNames("submit-button", {"active": isActive})}>
                        <p id="btnText">{btnText}</p>
                        <div className="check-box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </form>
        </div>

        </body>
    )
        ;
}

export default SupportPage;
