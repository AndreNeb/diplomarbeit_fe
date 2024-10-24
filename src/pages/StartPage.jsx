import {ConstVariables} from '../components/ConstVariables';
import * as Imports from '../components/Imports';
import {Link} from "react-router-dom";

function StartPage() {
    const {

        t,
        currentLoginStatus,
        handleRegister,
        handleLogin,
        handleStart,
        darkMode

    } = ConstVariables();


    return (
        <body className={`StartPage ${darkMode ? 'dark' : 'light'}`}>


        {currentLoginStatus === 'Start' && (
            <div className={`outer-div ${darkMode ? 'dark' : 'light'}`}>
                <span className={`logoText ${darkMode ? 'dark' : 'light'}`}>N A R K O</span>

                <button onClick={handleLogin} className={`registerandloginbutton ${darkMode ? 'dark' : 'light'}`}>{t('login')}</button>
                <button onClick={handleRegister} className={`registerandloginbutton ${darkMode ? 'dark' : 'light'}`}>{t('register')}</button>
            </div>)}

        {currentLoginStatus === 'Login' && (
            <div className={`outer-div ${darkMode ? 'dark' : 'light'}`}>
                <span className={`otherText ${darkMode ? 'dark' : 'light'}`}>{t('login')}</span>

                <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`} placeholder={t('username')} required></input>
                <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`} placeholder={t('password')} required></input>

                <Link to="/Home">
                    <button className={`registerandloginbutton ${darkMode ? 'dark' : 'light'}`}>{t('login')}</button>
                </Link>

                <span onClick={handleStart} className={`noAccountText ${darkMode ? 'dark' : 'light'}`}>{t('noaccount')}</span>
            </div>
        )}

        {currentLoginStatus === 'Register' && (
            <div className={`outer-div ${darkMode ? 'dark' : 'light'}`}>
                <span className={`otherText ${darkMode ? 'dark' : 'light'}`}>{t('register')}</span>

                <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`} placeholder={t('username')} required></input>
                <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`} placeholder={t('email')} required></input>
                <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`} placeholder={t('password')} required></input>

                <button className={`registerandloginbutton ${darkMode ? 'dark' : 'light'}`}>{t('register')}</button>

                <span onClick={handleStart}  className={`registertext ${darkMode ? 'dark' : 'light'}`}>{t('alreadyhaveanaccount')}</span>
            </div>
        )}

        </body>
    );
}

export default StartPage;
