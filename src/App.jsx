import login from './pictures/login-picture.png';
import logo from './pictures/hamburger-menu.png';
import language from './pictures/language.png';
import regeln from './pictures/regeln.png';
import info from './pictures/info.png';
import support from './pictures/support.png';
import patienten from './pictures/patienten.png';
import './stylesheets/topbar/topbar.css';
import './stylesheets/leftbar/leftbar.css';
import './stylesheets/leftbar/buttons.css';
import './stylesheets/general/general.css';
import './stylesheets/homepage-widgets/small-widgets.css';
import './stylesheets/homepage-widgets/big-widgets.css';

function App() {
    return (

        <>
            <header></header>
            <body>
            <div className="header">
                <div className="left-section">
                    <img src={logo} className="logo" alt="Logo"/>
                    <img src={regeln} className="regeln" alt="Regeln"/>
                    <img src={info} className="info" alt="Info"/>
                    <img src={support} className="support" alt="Support"/>
                </div>
                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Suchen"/>
                </div>
                <div className="right-section">
                    <img src={language} className="language" alt="language"/>
                    <img src={login} className="login" alt="login"/>
                </div>
            </div>

            <div className="small-widgets-outer-div">
                <div className="general-small-widget-layout small-widget1">
                    <div className="small-widgets-color small-widget1-color-patienten">
                        &nbsp;
                    </div>
                    <div className="small-widgets-text">
                        <div className="small-widgets-text-top">Patienten</div>
                        <div className="small-widgets-text-middle">4.500</div>
                        <div className="small-widgets-text-bottom">&#43;8,5 &#037;</div>
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
                        <div className="small-widgets-text-top">OP - Auslastung</div>
                        <div className="small-widgets-text-middle">70 &#037;</div>
                        <div className="small-widgets-text-bottom">8 / 9 Belegt</div>
                    </div>
                </div>
                <div className="general-small-widget-layout small-widget3">
                    <div className="small-widgets-color small-widget3-color-patienten">
                        &nbsp;
                    </div>
                    <div className="small-widgets-text">
                        <div className="small-widgets-text-top">Narkosen</div>
                        <div className="small-widgets-text-middle">400</div>
                        <div className="small-widgets-text-bottom">4,5 &#037;</div>
                    </div>
                </div>
                <div className="general-small-widget-layout small-widget4">
                    <div className="small-widgets-color small-widget4-color-patienten">
                        &nbsp;
                    </div>
                    <div className="small-widgets-text">
                        <div className="small-widgets-text-top">Wartezimmer</div>
                        <div className="small-widgets-text-middle">11 Patienten</div>
                        <div className="small-widgets-text-bottom">Gut belegt</div>

                    </div>
                </div>
            </div>

            <div className="big-widgets-general">

                <div className="big-widget">Calendar</div>

                <div className="big-widget">Mail</div>
            </div>
            </body>
        </>

    );
}

export default App;