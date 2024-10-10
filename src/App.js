import './App.css';
import logo from './pictures/login-picture.jpg';
import hamburger from './pictures/hamburger-menu.png';
import './stylesheets/topbar.css';

function App() {
  return (
      <>
        <header>

        </header>
        <body>
        <div className="header">
          <div className="left-section">
            <img src={hamburger} className="hamburger-menu" alt="Menu"/>

          </div>
          <div className="middle-section">
              <input className= "search-bar" type ="text" placeholder="Suchen" />
          </div>
          <div className="right-section">
            <img src= {logo} className="login" alt="login"/>
          </div>
        </div>

        <div className="left-bar-general">

        </div>


        </body>
      </>
  );
}

export default App;
