import * as Imports from '../components/Imports';
import {useContext, useState} from "react";

export const ConstVariables = () => {


    const [buttonTexts, setButtonTexts] = useState([]);

    const [text, setText] = useState("");


    const [currentDiv, setCurrentDiv] = useState('MainPage'); // initial div1 sichtbar

    const handleMainClick = () => {
        setCurrentDiv('MainPage');
        setDivs([]); //Dadurch wird der text bei dem Button text gelöscht und warum auch immer ein anderer eingefügt;
    };

    const handleHamburgerClick = () => {
        setCurrentDiv('Leftbar-hidden-MainPage');
    };

    const handleCategoriesClick = (message) => {
        setCurrentDiv('Category');
        setText(message)
    };

    const handlePlusClick = () => {
        setCurrentDiv('BuildPage');
    };

    const handleHamburgerRulesBuildClick = () => {
        setCurrentDiv('Leftbar-hidden-RulesPage');
    };

    const handleTextFieldClick = () => {
        setCurrentDiv('TextField');

    };
    const [divs, setDivs] = useState([]); // Array, das die dynamisch hinzugefügten divs enthält

    const handleAddDiv = (message) => {
        setDivs([...divs, {}]); // Füge ein neues leeres Objekt hinzu, um ein weiteres div zu repräsentieren
        setButtonTexts([...buttonTexts, `${message}`]);
    };

    const {darkMode, toggleDarkMode} = useContext(Imports.DarkModeContext);

    const styles = {
        box: {
            width: "20%", boxSizing: "border-box", // Funktioniert in React, camelCase!
            wordWrap: "break-word",  // Funktioniert ebenfalls in React, camelCase!
            overflowWrap: "break-word", // Unterstützt den Umbruch von langen Wörtern
        },

    };
    const stylesadd = {
        add: {
            display: "flex", flexWrap: "wrap", // Elemente umbrechen

            justifyContent: "flex-start", // Start der Buttons links ausrichten
            alignItems: "center", alignContent: "flex-start", boxSizing: "border-box",
        },
    };


    const {t} = Imports.useTranslation();
    const {i18n} = Imports.useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [btnText, setBtnText] = Imports.useState(t('log-text'));
    const [isActive, setIsActive] = Imports.useState(false);
    const [formStatus, setFormStatus] = Imports.useState('');
    const [isOpen, setIsOpen] = Imports.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch('https://formspree.io/f/movqqjlb', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setBtnText(t('thanks'));
                setIsActive(true);

                setTimeout(() => {
                    window.location.reload();
                }, 4000);
            } else {
                setBtnText(t('error'));

                setTimeout(() => {
                    window.location.reload();
                }, 4000);
            }
        } catch (error) {
            console.error('Fehler beim Absenden:', error);
        }
    };

    return {
        btnText,
        t,
        setBtnText,
        isActive,
        setIsActive,
        formStatus,
        setFormStatus,
        isOpen,
        toggleMenu,
        handleSubmit,
        changeLanguage,
        handleMainClick,
        handleHamburgerClick,
        handleCategoriesClick,
        handlePlusClick,
        handleHamburgerRulesBuildClick,
        handleTextFieldClick,
        handleAddDiv,
        buttonTexts,
        text,
        currentDiv,
        divs,
        darkMode,
        toggleDarkMode,
        styles,
        stylesadd,
    };

};

