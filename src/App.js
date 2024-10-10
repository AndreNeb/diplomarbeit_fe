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
            <img src="/src/pictures/" className="hamburger-menu" alt="Menu"/>
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
