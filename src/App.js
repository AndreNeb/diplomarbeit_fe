import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
        <div className="header">
          <div className="left-section">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <div className="middle-section">

          </div>
          <div className="right-section">

          </div>
        </div>
        </body>
      </>
  );
}

export default App;
