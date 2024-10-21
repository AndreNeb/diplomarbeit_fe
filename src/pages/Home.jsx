import * as Imports from '../components/Imports';


function Home() {
    const {darkMode, toggleDarkMode} = Imports.useContext(Imports.DarkModeContext);

    const {t} = Imports.useTranslation();

    const {i18n} = Imports.useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    const [isOpen, setIsOpen] = Imports.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (

        <body className={`homepage ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "" : "rgba(250, 246, 240, 255)", transition: "background-color 1.1s ease"}}>
        <Imports.Header/>

        <div className="small-widgets-outer-div">
            <div
                className={`general-small-widget-layout small-widget1 ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget1-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{color: darkMode ? "white":"gray", transition: "color 1.1s ease"}}>{t('patient')}</div>
                    <div className="small-widgets-text-middle" style={{color: darkMode ? "white":"black", transition: "color 1.1s ease"}}>4.500</div>
                    <div className="small-widgets-text-bottom" style={{color: darkMode ? "white":"#077507", transition: "color 1.1s ease"}}>&uarr; &#43;8,5 &#037;</div>
                </div>
                <div>
                    <img src={darkMode ? Imports.patientenBlack : Imports.patienten} className="small-widgets-picture-layout"
                         alt="Patienten"/>
                </div>
            </div>
            <div className={`general-small-widget-layout small-widget2 ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget2-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{color: darkMode ? "white":"gray", transition: "color 1.1s ease"}}>{t('op-workload')}</div>
                    <div className="small-widgets-text-middle" style={{color: darkMode ? "white":"black", transition: "color 1.1s ease"}}>70 &#037;</div>
                    <div className="small-widgets-text-bottom" style={{color: darkMode ? "white":"#077507", transition: "color 1.1s ease"}}>8 /
                        9 {t('unavailable')}</div>
                </div>
                <div>
                    <img src={darkMode ? Imports.maskeBlack : Imports.maske} className="small-widgets-picture-layout"
                         alt="OP - Maske"/>
                </div>
            </div>
            <div className={`general-small-widget-layout small-widget3 ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget3-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{color: darkMode ? "white":"gray", transition: "color 1.1s ease"}}>{t('anesthesia')}</div>
                    <div className="small-widgets-text-middle" style={{color: darkMode ? "white":"black", transition: "color 1.1s ease"}}>400</div>
                    <div className="small-widgets-text-bottom" style={{color: darkMode ? "white":"#077507", transition: "color 1.1s ease"}}>&darr; 4,5 &#037;</div>
                </div>
                <div>
                    <img src={darkMode ? Imports.spritzeBlack : Imports.spritze} className="small-widgets-picture-layout"
                         alt="Spritze"/>
                </div>
            </div>
            <div className={`general-small-widget-layout small-widget4 ${darkMode ? 'dark' : 'light'}`} style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget4-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{color: darkMode ? "white":"gray", transition: "color 1.1s ease"}}>{t('waiting-room')}</div>
                    <div className="small-widgets-text-middle" style={{color: darkMode ? "white":"black", transition: "color 1.1s ease"}}>9 {t('patients')}</div>
                    <div className="small-widgets-text-bottom" style={{color: darkMode ? "white":"#077507", transition: "color 1.1s ease"}}>{t('waiting-room-usage')}</div>
                </div>
                <div>
                    <img src={darkMode ? Imports.wartezimmerBlack : Imports.wartezimmer}
                         className="small-widgets-picture-layout wartezimmer-picture-layout"
                         alt="Wartezimmer"/>
                </div>
            </div>
        </div>


        <div className="big-widgets-general">

            <div className={`big-widget ${darkMode ? 'dark' : 'light'}`}>Kalender</div>
            <div className={`big-widget ${darkMode ? 'dark' : 'light'}`}>Arbeitszeit</div>


        </div>


        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
            <div className={`hamburger-menu-div ${darkMode ? 'dark' : 'light'}`}>
                <button className="hamburger-button" onClick={toggleMenu}>
                    <img src={darkMode ? Imports.hamburgerBlack : Imports.hamburger} className={`icons ${darkMode ? 'dark' : 'light'}`} alt="HamburgerMenu"/>
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
    );
}

export default Home;
