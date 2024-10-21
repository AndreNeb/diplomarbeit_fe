import * as Imports from '../components/Imports';

function RulesPage() {


    const {i18n} = Imports.useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [currentDiv, setCurrentDiv] = Imports.useState('MainPage'); // initial div1 sichtbar

    const {darkMode, toggleDarkMode} = Imports.useContext(Imports.DarkModeContext);



    const [isOpen, setIsOpen] = Imports.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (

        <>

            <body className={`rules ${darkMode ? 'dark' : 'light'}`}>

            <Imports.Header/>

            <Imports.Sidebar
                darkMode={darkMode}
                currentDiv={currentDiv}
            />


            <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
                <div className="hamburger-menu-div">
                    <button className="hamburger-button" onClick={toggleMenu}>
                        {/* Hamburger Icon */}
                        <span className="hamburger-icon"></span>
                        <span className="hamburger-icon"></span>
                        <span className="hamburger-icon"></span>
                    </button>

                    <img src={Imports.apple} className="logo-in-hamburger-menu" alt="Logo"/>
                </div>
            </div>

            {/* Das Menü, das den gesamten Bildschirm abdeckt */}
            <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
                <div className="menu-items">


                    <a href="#contact" onClick={toggleMenu}>Home</a>
                    <Imports.Link to="/RulesPage">
                        <a href="#about" onClick={toggleMenu}>Regeln</a>
                    </Imports.Link>
                    <a href="#about" onClick={toggleMenu}>Dokumente</a>
                    <a href="#services" onClick={toggleMenu}>Info</a>
                    <a href="#contact" onClick={toggleMenu}>Support</a>
                    <a href="#contact" onClick={toggleMenu}>Logout</a>
                </div>
            </div>
            </body>

        </>

    );
}

export default RulesPage;

