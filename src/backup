import {ConstVariables} from '../components/ConstVariables';
import * as Imports from '../components/Imports';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function StartPage() {
    const {

        t,
        currentLoginStatus,
        handleRegister,
        handleLogin,
        handleStart,
        darkMode

    } = ConstVariables();


    const [user, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleReg = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', {user, email, password});
            const token = response.data.token; // Assuming the server sends back a token
            localStorage.setItem('token', token); // Store token
            alert(response.data.message);
            navigate('/startpage'); // Redirect to startpage after registration
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An unknown error occurred');
            }
        }
    };


    return (
        <body className={`StartPage ${darkMode ? 'dark' : 'light'}`}>


        {currentLoginStatus === 'Start' && (
            <div className={`outer-div ${darkMode ? 'dark' : 'light'}`}>
                <span className={`logoText ${darkMode ? 'dark' : 'light'}`}>N A R K O</span>

                <button onClick={handleLogin}
                        className={`registerandloginbutton ${darkMode ? 'dark' : 'light'}`}>{t('login')}</button>
                <button onClick={handleRegister}
                        className={`registerandloginbutton ${darkMode ? 'dark' : 'light'}`}>{t('register')}</button>
            </div>)}

        {currentLoginStatus === 'Login' && (
            <div className={`outer-div ${darkMode ? 'dark' : 'light'}`}>
                <span className={`otherText ${darkMode ? 'dark' : 'light'}`}>{t('login')}</span>

                <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`}
                       placeholder={t('username')} required></input>
                <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`}
                       placeholder={t('password')} required></input>

                <Link to="/Home">
                    <button className={`registerandloginbutton ${darkMode ? 'dark' : 'light'}`}>{t('login')}</button>
                </Link>

                <span onClick={handleStart}
                      className={`noAccountText ${darkMode ? 'dark' : 'light'}`}>{t('noaccount')}</span>
            </div>
        )}

        {currentLoginStatus === 'Register' && (
            <div className={`outer-div ${darkMode ? 'dark' : 'light'}`}>
                <form onSubmit={handleRegister}>
                    <span className={`otherText ${darkMode ? 'dark' : 'light'}`}>{t('register')}</span>

                    <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`}
                           placeholder={t('username')} value={user} onChange={(e) => setUsername(e.target.value)}
                           required></input>
                    <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`}
                           placeholder={t('email')} value={email} onChange={(e) => setEmail(e.target.value)}
                           required></input>
                    <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`}
                           placeholder={t('password')} value={password} onChange={(e) => setPassword(e.target.value)}
                           required></input>

                    <button type="submit"
                            className={`registerandloginbutton ${darkMode ? 'dark' : 'light'}`}>{t('register')}</button>
                    {errorMessage && <span style={{color: 'red'}}>{errorMessage}</span>}


                    <span onClick={handleStart}
                          className={`registertext ${darkMode ? 'dark' : 'light'}`}>{t('alreadyhaveanaccount')}</span>

                </form>
            </div>
        )}

        </body>
    );
}

export default StartPage;
