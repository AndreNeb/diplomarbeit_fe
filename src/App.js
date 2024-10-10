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
            <img src="pictures/hamburger-menu.png" className="hamburger-menu" alt="Menu"/>

          </div>
          <div className="middle-section">
              <input className= "search-bar" type ="text" placeholder="Suchen" />
          </div>
          <div className="right-section">
            <img src= "pictures/login-picture.jpg" className="login" alt="login"/>
          </div>
        </div>

        <div className="left-bar-general">

        </div>


        </body>
      </>
  );
}

export default App;
