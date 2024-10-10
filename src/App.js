
import logo from './pictures/login-picture.jpg'
import hamburger from './pictures/hamburger-menu.png';
import './stylesheets/topbar/topbar.css';
import './stylesheets/leftbar/leftbar.css';
import './stylesheets/leftbar/buttons.css';
import './stylesheets/general/general.css';



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
              <input className= "search-bar" type ="text" placeholder="Suchen" />
          </div>
          <div className="right-section">
            <img src= {logo} className="login" alt="login"/>
          </div>
        </div>

        <div className="left-bar-general">
            <button className="startseite-button">
                Startseite
            </button>
            <br/>
            <button className="personal-space-button">
                Personal Space
            </button>
            <br/>
            <button className="support-button">
                Support
            </button>
            <br/>
            <div className="button-container">
                <button className="regeln-button">Regeln</button>
                <div className="hidden-buttons">
                    <button className="extra-button">Fachspezifische</button>
                    <button className="extra-button">Kind</button>
                    <button className="extra-button">Lunge</button>
                    <button className="extra-button">Herz</button>
                    <button className="extra-button">Magen</button>
                    <button className="extra-button">Beine</button>
                </div>
            </div>
        </div>


        </body>
      </>
  );
}

export default App;
