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
import './stylesheets/homepage-widgets/widgets-general.css';



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

            <div className="left-bar-general">
                <div className="generell-buttons">Kind</div>
            </div>
            <div>

            </div>
            </body>
        </>

    );
}

export default App;