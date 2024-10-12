import {Link} from "react-router-dom";

import './stylesheets/leftbar/buttons.css';
import './stylesheets/topbar/topbar.css';

import logo from "./pictures/hamburger-menu.png";
import regeln from "./pictures/regeln.png";
import info from "./pictures/info.png";
import support from "./pictures/support.png";
import language from "./pictures/language.png";
import login from "./pictures/login-picture.png";
import hamburger from "./pictures/hamburger-menu.png";

import React from "react";

function RulesPage() {
    return (
        <body className="rules">
        <div>
            <div className="header">
                <div className="left-section">
                    <img src={logo} className="logo" alt="Logo"/>
                    <div className="topbar-functional-divs">

                        <button className="Rules-Button">
                            <img src={regeln} className="regeln" alt="Regeln"/>
                        </button>
                    </div>
                    <img src={info} className="info" alt="Info"/>
                    <img src={support} className="support" alt="Support"/>
                </div>
                <div className="right-section">
                    <img src={language} className="language" alt="language"/>
                    <img src={login} className="login" alt="login"/>
                </div>
            </div>


            <div className="left-bar-general">
                <div className="first-sidebar-section">
                    <div className="searchbar-menu">
                        <input className="search-bar" type="text" placeholder="Suchen..."/>
                    </div>

                    <div className="hamburger-menu">
                        <img src={hamburger} className="hamburger-menu-picture" alt="Hamburgermenu"/>
                    </div>
                </div>


                <div className="button-section">
                    <button className="button-general">Kind</button>
                    <button className="button-general">Lunge</button>
                    <button className="button-general">Herz</button>
                    <button className="button-general">Magen</button>
                    <button className="button-general">Bein</button>
                    <button className="button-general">Arme</button>
                    <button className="button-general">Leber</button>
                    <button className="button-general">Galle</button>
                    <button className="button-general">Niere</button>
                    <button className="button-general">Gehirn</button>
                    <button className="button-general">Fachspezifische</button>
                    <button className="button-general">Sonstige</button>


                </div>
            </div>
        </div>
        </body>

    );
}

export default RulesPage;
