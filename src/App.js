import logo from './logo.svg';
import './App.css';

//import './stylesheets/topbar.css';

function App() {
    return (
        <>
            <header>

            </header>
            <body>
            <div className="header">
                <div className="left-section">
                    <img src={logo} className="hamburger-menu" alt="logo"/>
                    <img src={logo} className="NARKO-logo" alt="logo"/>
                </div>
                <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Suchen"/>
                    <button className="search-button">
                        <img src={logo} className="search-icon" alt="logo"/>
                    </button>
                </div>
                <div className="right-section">
                    <img src={logo} className="login-picture" alt="logo"/>
                </div>
            </div>
            </body>
        </>
    );
}

export default App;
