import login from './pictures/login-picture.png';
import logo from './pictures/hamburger-menu.png';
import language from './pictures/language.png';
import regeln from './pictures/regeln.png';
import info from './pictures/info.png';
import support from './pictures/support.png';
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

            <div className="small-widgets-general">
                <div className="small-widget1">
                    <div className="small-widget1-color-patienten">
                        &nbsp;
                    </div>
                    <div className="small-widget1-text-patienten">
                        <div>Patienten</div>
                        <div>4500</div>
                        <div>&#43;8.5 &#037;</div>
                    </div>
                </div>
                <div className="small-widget2">
                    <div className="small-widget2-color-patienten">
                        &nbsp;
                    </div>
                    <div className="small-widget2-text-patienten">
                        <div>OP - Auslastung</div>
                        <div>70 &#037;</div>
                        <div>8 / 9 Belegt</div>
                    </div>
                </div>
                <div className="small-widget3">
                    <div className="small-widget3-color-patienten">
                        &nbsp;
                    </div>
                    <div className="small-widget3-text-patienten">
                        <div>Narkosen</div>
                        <div>400</div>
                        <div>4.5 &#037;</div>
                    </div>
                </div>
                <div className="small-widget4">
                    <div className="small-widget4-color-patienten">
                        &nbsp;
                    </div>
                    <div className="small-widget4-text-patienten">
                        <div>Wartezimmer</div>
                        <div>11 Patienten</div>
                        <div>Gut belegt</div>

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