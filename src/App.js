
import logo from './pictures/login-picture.jpg'
import hamburger from './pictures/hamburger-menu.png';
import notification from './pictures/Notification-bell.png';
import './stylesheets/topbar/topbar.css';
import './stylesheets/leftbar/leftbar.css';
import './stylesheets/leftbar/buttons.css';
import './stylesheets/general/general.css';
import './stylesheets/homepage-widgets/calendar.css';
import './stylesheets/homepage-widgets/widgets-general.css';
import './stylesheets/homepage-widgets/small-widgets.css'



function App() {
    return (
    <>
        <header>

        </header>
        <body>
        <div className="header">
            <div className="left-section">
                <img src={hamburger} className="hamburger-menu" alt="Menu"/>
                <div className="tooltip"></div>

            </div>
            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Suchen"/>
            </div>
            <div className="right-section">
                <img src={notification} className="notification" alt="Notification"/>
                <img src={logo} className="login" alt="login"/>
            </div>
        </div>


        <div className="small-widgets-general">
            <div className="try">hola1</div>
            <div className="try">hola2</div>
            <div className="try">hola3</div>
            <div className="try">hola4</div>
        </div>


        <div className="widgets">
            loll
            <div className="calendar">
                lol
            </div>

            <div className="mail">
                123
            </div>

        </div>



        </body>
    </>
    );
}

export default App;
