import * as Imports from '../components/Imports';
import HiddenHeader from "../components/HiddenHeader";

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
            <HiddenHeader/>

            <Imports.Sidebar
                darkMode={darkMode}
                currentDiv={currentDiv}
            />
            </body>

        </>

    );
}

export default RulesPage;

