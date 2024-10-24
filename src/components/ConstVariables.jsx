import * as Imports from '../components/Imports';
import {useContext, useEffect, useState} from "react";

export const ConstVariables = () => {
    const {t} = Imports.useTranslation();
    const {i18n} = Imports.useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [buttonTexts, setButtonTexts] = useState([]);

    const [text, setText] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [currentDiv, setCurrentDiv] = useState('MainPage');

    const [currentLoginStatus, setcurrentLoginStatus] = useState('Start'); // initial div1 sichtbar

    const handleLogin = () => {
        setcurrentLoginStatus('Login');
    }

    const handleRegister = () => {
        setcurrentLoginStatus('Register');
    }

    const handleStart = () => {
        setcurrentLoginStatus('Start');
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Input-Wert speichern
    };

    const handleMainClick = () => {
        setCurrentDiv('MainPage');
        setButtons([]); //Dadurch wird der text bei dem Button text gelöscht und warum auch immer ein anderer eingefügt;
    };

    const handleHamburgerClick = () => {
        setCurrentDiv('Leftbar-hidden-MainPage');
    };

    const handleCategoriesClick = (message) => {
        setCurrentDiv('Category');
        setText(message);
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

    const [buttons, setButtons] = useState([]); // Array, das die dynamisch hinzugefügten divs enthält


    const handleAddDiv = (message) => {

        setButtons([...buttons, {}]); // Füge ein neues leeres Objekt hinzu, um ein weiteres div zu repräsentieren
        setButtonTexts([...buttonTexts, `${message}`]);
    };

    const textfieldinput = (message) => {
        setInputValue('');
        const newButton = {
            action: () => {
                setCurrentDiv("ChangeContent")
            },
            id: `textfield-${buttons.length}`,
            style: {cursor: 'pointer'}
        }
            setButtons([...buttons, newButton]);// Füge ein neues leeres Objekt hinzu, um ein weiteres div zu repräsentieren
            setButtonTexts([...buttonTexts, `${message}`]);
    }
    const [selectedButtonId, setSelectedButtonId] = useState(null);
    const changeContent=(message, buttonId) =>{
        setInputValue('');
        // eslint-disable-next-line array-callback-return
        const updatedButtonTexts = buttonTexts.map((text, index) => {
            // Überprüfe, ob die ID des Buttons mit der übergebenen ID übereinstimmt
            if (buttons[index]?.id === buttonId) {
                return message; // Neuer Name für den Button
            }
            return text;
        });

        setButtonTexts(updatedButtonTexts);
    }

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
            alignItems: "center", alignContent: "flex-start", boxSizing: "border-box",
        },
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
        handleInputChange,
        textfieldinput,
        inputValue,
        buttonTexts,
        text,
        currentDiv,
        buttons,
        darkMode,
        toggleDarkMode,
        styles,
        stylesadd,
        setInputValue,
        handleLogin,
        handleRegister,
        setcurrentLoginStatus, changeContent,
        setCurrentDiv,
        setSelectedButtonId,
        selectedButtonId
    };

};

