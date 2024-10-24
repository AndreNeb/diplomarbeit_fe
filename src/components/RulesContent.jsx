import * as Imports from './Imports';
import {ConstVariables} from "./ConstVariables";

function RulesContent() {
    const {
        t,
        darkMode,
        currentDiv,
        handleAddDiv,
        handleCategoriesClick,
        handleHamburgerClick,
        handleHamburgerRulesBuildClick,
        handleMainClick,
        handlePlusClick,
        styles,
        buttonTexts,
        text,
        stylesadd,
        buttons,
        handleTextFieldClick,
        inputValue,
        handleInputChange,
        textfieldinput,
        setInputValue,
        changeContent,
    } = ConstVariables();


    return (

        <>

            {currentDiv === 'MainPage' && (
                <div className={`left-bar-backdiv ${darkMode ? 'dark' : 'light'}`}>
                    <div className={`left-bar-shown ${darkMode ? 'dark' : 'light'}`} id="shownSidebar2" style={{
                        backgroundColor: darkMode ? 'black' : 'white', transition: "background-color 1.1s ease"
                    }}>
                        <div className="top-leftbar-section" style={{
                            backgroundColor: darkMode ? 'black' : 'white', transition: "background-color 1.1s ease"
                        }}>
                            <div className="menu">
                                <img src={darkMode ? Imports.hamburgerBlack : Imports.hamburger}
                                     onClick={handleHamburgerClick}
                                     className={`menu-picture ${darkMode ? 'dark' : 'light'} mode`}
                                     alt="Hamburger menu"/>
                            </div>
                            <div className="searchbar-menu">
                                <input className={`search-bar ${darkMode ? 'dark' : 'light'}`} type="text"
                                       placeholder={t('searchbar-placeholder')} style={{
                                    backgroundColor: darkMode ? 'black' : 'white',
                                    color: darkMode ? 'white' : 'black',
                                    borderColor: darkMode ? 'white' : 'rgb(192, 192, 192)'
                                }}/>
                            </div>
                        </div>
                        <div className="button-section" style={{
                            backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"
                        }}>
                            <button onClick={() => handleCategoriesClick(t('child'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('child')}</button>
                            <button onClick={() => handleCategoriesClick(t('lung'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('lung')}</button>
                            <button onClick={() => handleCategoriesClick(t('heart'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('heart')}</button>
                            <button onClick={() => handleCategoriesClick(t('stomach'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('stomach')}</button>
                            <button onClick={() => handleCategoriesClick(t('leg'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('leg')}</button>
                            <button onClick={() => handleCategoriesClick(t('arms'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('arms')}</button>
                            <button onClick={() => handleCategoriesClick(t('liver'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('liver')}</button>
                            <button onClick={() => handleCategoriesClick(t('gallbladder'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('gallbladder')}</button>
                            <button onClick={() => handleCategoriesClick(t('kidney'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('kidney')}</button>
                            <button onClick={() => handleCategoriesClick(t('brain'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('brain')}</button>
                            <button onClick={() => handleCategoriesClick(t('specialized'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('specialized')}</button>
                            <button onClick={() => handleCategoriesClick(t('other'))}
                                    className={`button-general-leftbar ${darkMode ? 'dark' : 'light'} mode`}>{t('other')}</button>
                        </div>
                    </div>
                </div>)}
            {currentDiv === 'Leftbar-hidden-MainPage' && (
                <div className={`left-bar-hidden ${darkMode ? 'dark' : 'light'} left-bar-size-main`}
                     id="hiddenSidebar2">
                    <div className="menu">
                        <img src={darkMode ? Imports.hamburgerBlack : Imports.hamburger} onClick={handleMainClick}
                             className={`menu-picture ${darkMode ? 'dark' : 'light'} mode`}
                             alt="Hamburger menu"/>
                    </div>
                </div>)}
            {currentDiv === 'Category' && (
                <div className={`left-bar-hidden ${darkMode ? 'dark' : 'light'} left-bar-size-add`} id="hiddenSidebar2">
                    <div className="arrow-menu">
                        <img src={darkMode ? Imports.arrowleftBlack : Imports.arrowleft} onClick={handleMainClick}
                             className={`arrow-left ${darkMode ? 'dark' : 'light'}`}
                             alt="Arrow left"/>
                    </div>
                    <div className="menu">
                        <img src={darkMode ? Imports.plusBlack : Imports.plus} onClick={handlePlusClick}
                             className={`plus-menu-picture ${darkMode ? 'dark' : 'light'}`}
                             alt="Plus menu"/>
                    </div>
                </div>

            )}

            {currentDiv === 'Category' && (<div className={`frame-rules ${darkMode ? 'dark' : 'light'}`}>
                <div className="rules-header">
                    <input className={`search-bar ${darkMode ? 'dark' : 'light'}`} type="text"
                           placeholder={t('searchbar-placeholder')} style={{
                        backgroundColor: darkMode ? 'black' : 'white',
                        color: darkMode ? 'white' : 'black',
                        borderColor: darkMode ? 'white' : 'rgb(192, 192, 192)'
                    }}/>
                </div>
                <div className="rules-body-categories">
                    <div className="content-divs-header" style={styles.box}>
                        {t('NameCategories')}
                    </div>
                    <div className="content-divs-header" style={styles.box}>
                        {t('RuleName')}
                    </div>
                    <div className="content-divs-header" style={styles.box}>
                        {t('RuleNumber')}
                    </div>
                    <div className="content-divs-header" style={styles.box}>
                        {t('Author')}
                    </div>
                    <div className="content-divs-header-rightest" style={styles.box}>
                        {t('Date')}
                    </div>
                </div>
                <div className="rules-body-content">
                    <div className="content-divs" style={styles.box}>
                        test
                    </div>
                    <div className="content-divs" style={styles.box}>
                        {t('RuleName')}
                    </div>
                    <div className="content-divs" style={styles.box}>
                        {t('RuleNumber')}
                    </div>
                    <div className="content-divs" style={styles.box}>
                        {t('Author')}
                    </div>
                    <div className="content-divs-rightest" style={styles.box}>
                        {t('Date')}
                    </div>
                </div>

            </div>)}

            {(currentDiv === 'BuildPage' || currentDiv === 'Leftbar-hidden-RulesPage' || currentDiv === 'TextField' || currentDiv === 'ChangeContent') && (
                <div
                    className={`name-section ${currentDiv === 'Leftbar-hidden-RulesPage' ? 'name-section-big' : 'name-section'}`}
                    id="shownSidebar3">
                    <button
                        className={`button-middle ${darkMode ? 'dark' : 'light'} mode`}>{text}</button>
                </div>)}

            {(currentDiv === 'BuildPage' || currentDiv === 'Leftbar-hidden-RulesPage' || currentDiv === 'TextField' || currentDiv === 'ChangeContent') && (
                <div
                    className={`frame-add ${currentDiv === 'Leftbar-hidden-RulesPage' ? 'frame-add-big' : 'frame-add'}`}
                    style={stylesadd.add}>
                    {buttons.map((button, index) => (
                        <div key={index} className="grid-different-button">
                            <button key={button.id}
                                    onClick={button.action}
                                    style={button.style}
                                    className={`query-button ${darkMode ? 'dark' : 'light'}`}>{buttonTexts[index]}</button>
                            <div className="arrow-right">
                                <img src={darkMode ? Imports.arrowrightlight : Imports.arrowrightdark}
                                     className="arrow-right-size"
                                     alt="Arrow right"/>
                            </div>
                        </div>


                    ))}
                </div>)}


            {(currentDiv === 'BuildPage' || currentDiv === 'TextField' || currentDiv === 'ChangeContent') && (
                <div className={`left-bar-backdiv ${darkMode ? 'dark' : 'light'}`}>
                    <div className={`left-bar-shown ${darkMode ? 'dark' : 'light'}`} id="shownSidebar2">
                        <div className="rules-section">
                            <div className="arrow-menu">
                                <img src={darkMode ? Imports.arrowleftBlack : Imports.arrowleft}
                                     onClick={handleMainClick}
                                     className={`arrow-left ${darkMode ? 'dark' : 'light'}`}
                                     alt="Arrow left"/>
                            </div>
                            <div className="menu">
                                <img src={darkMode ? Imports.safeBlack : Imports.safe}
                                     className={`menu-picture ${darkMode ? 'dark' : 'light'}`}
                                     alt="Safe menu"/>
                            </div>
                            <div className="menu">
                                <img src={darkMode ? Imports.deleteRuleBlack : Imports.deleteRule}
                                     onClick={handlePlusClick}
                                     className={`menu-picture ${darkMode ? 'dark' : 'light'}`}
                                     alt="Delete menu"/>
                            </div>
                            <div className="menu">
                                <img src={darkMode ? Imports.hamburgerBlack : Imports.hamburger}
                                     onClick={handleHamburgerRulesBuildClick}
                                     className={`menu-picture ${darkMode ? 'dark' : 'light'} mode`}
                                     alt="Hamburger menu"/>
                            </div>
                        </div>

                        <div className="button-section">
                            <button onClick={() => handleAddDiv(t('if'))}
                                    className={`button-general-leftbar-add ${darkMode ? 'dark' : 'light'}`}>{t('if')}</button>
                            <button onClick={() => handleAddDiv(t('then'))}
                                    className={`button-general-leftbar-add ${darkMode ? 'dark' : 'light'}`}>{t('then')}</button>
                            <button onClick={() => handleAddDiv(t('and'))}
                                    className={`button-general-leftbar-add ${darkMode ? 'dark' : 'light'}`}>{t('and')}</button>
                            <button onClick={() => handleAddDiv(t('or'))}
                                    className={`button-general-leftbar-add ${darkMode ? 'dark' : 'light'}`}>{t('or')}</button>
                            <button onClick={() => {
                                handleTextFieldClick();
                            }}
                                    className={`button-general-leftbar-add ${darkMode ? 'dark' : 'light'}`}>{t('text')}</button>
                            <button onClick={() => handleAddDiv(t('greater than'))}
                                    className={`button-general-leftbar-add ${darkMode ? 'dark' : 'light'}`}>{t('greater than')}</button>
                            <button onClick={() => handleAddDiv(t('less than'))}
                                    className={`button-general-leftbar-add ${darkMode ? 'dark' : 'light'}`}>{t('less than')}</button>
                        </div>
                    </div>
                </div>)}
            {currentDiv === 'Leftbar-hidden-RulesPage' && (
                <div className={`left-bar-hidden ${darkMode ? 'dark' : 'light'} left-bar-size-build`}
                     id="hiddenSidebar2">
                    <div className="arrow-menu">
                        <img src={darkMode ? Imports.arrowleftBlack : Imports.arrowleft} onClick={handleMainClick}
                             className={`arrow-left ${darkMode ? 'dark' : 'light'} mode`}
                             alt="Arrow left"/>
                    </div>
                    <div className="menu">
                        <img src={darkMode ? Imports.safeBlack : Imports.safe} onClick={handlePlusClick}
                             className={`menu-picture ${darkMode ? 'dark' : 'light'}`}
                             alt="Save menu"/>
                    </div>
                    <div className="menu">
                        <img src={darkMode ? Imports.deleteRuleBlack : Imports.deleteRule} onClick={handlePlusClick}
                             className={`menu-picture ${darkMode ? 'dark' : 'light'}`}
                             alt="Delete menu"/>
                    </div>
                    <div className="menu">
                        <img src={darkMode ? Imports.hamburgerBlack : Imports.hamburger} onClick={handlePlusClick}
                             className={`menu-picture ${darkMode ? 'dark' : 'light'} mode`}
                             alt="Hamburger menu"/>
                    </div>
                </div>

            )}
            {(currentDiv === 'TextField' || currentDiv === 'ChangeContent') && (
                <div className={`text-field-frame ${darkMode ? 'dark' : 'light'} `}>

                </div>

            )}
            {(currentDiv === 'TextField' || currentDiv === 'ChangeContent') && (
                <div className="input-frame">
                    <div className="information-text-field">
                        <div className="header-text-field">
                            {t('input')}
                        </div>
                        <div className="frame-input">
                            <input className="input-text-field" type="text" value={inputValue}
                                   onChange={handleInputChange}>

                            </input>
                            <div className="OK-Button" onClick={() => {
                                textfieldinput(inputValue);
                                handlePlusClick();
                            }}>
                                <img src={darkMode ? Imports.ticklight : Imports.tickdark} onClick={() => {
                                    textfieldinput(inputValue);
                                    handlePlusClick();
                                }}
                                     className={` ${darkMode ? 'dark' : 'light'} mode`}
                                     alt="OK Button"/>
                            </div>
                        </div>
                    </div>
                </div>

            )}
            {currentDiv === 'ChangeContent' && (
                <div className="input-frame">
                    <div className="information-text-field">
                        <div className="header-text-field">
                            {t('input')}
                        </div>
                        <div className="frame-input">
                            <input className="input-text-field" type="text" value={inputValue}
                                   onChange={handleInputChange}>

                            </input>
                            <div className="OK-Button" onClick={() => {
                                changeContent(inputValue);
                                handlePlusClick();
                            }}>
                                <img src={darkMode ? Imports.ticklight : Imports.tickdark} onClick={() => {
                                    changeContent(inputValue);
                                    handlePlusClick();
                                }}
                                     className={` ${darkMode ? 'dark' : 'light'} mode`}
                                     alt="OK Button"/>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>

    );
}

export default RulesContent;