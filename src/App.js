import logo from './logo.svg';
import login from './pictures/login-picture.jpg';
import './App.css';
import './stylesheets/topbar.css';

function App() {
  return (
      <>
        <header>

        </header>
        <body>
        <div className="header">
          <div className="left-section">
            <img src={logo} className="hamburger-menu" alt="logo"/>
          </div>
          <div className="middle-section">
              <input className= "search-bar" type ="text" placeholder="Suchen" />
          </div>
          <div className="right-section">
            <img src={login} className="login" alt="login"/>
          </div>
        </div>
        </body>
      </>
  );
}

export default App;
