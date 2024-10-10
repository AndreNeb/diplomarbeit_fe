import logo from './logo.svg';
import './App.css';
//import './stylsheets/topbar.css';

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

          </div>
        </div>
        </body>
      </>
  );
}

export default App;
