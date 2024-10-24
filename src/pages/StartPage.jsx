import * as Imports from '../components/Imports';
import {ConstVariables} from '../components/ConstVariables';
import {Link} from "react-router-dom";

function StartPage() {
    const {
        btnText,
        t,
        isActive,
        handleSubmit,
        darkMode,
        formStatus,
        currentLoginStatus,
        handleRegister,
        handleLogin,


    } = ConstVariables();
    return (

        <body className={`StartPage`}>


        {currentLoginStatus === 'Start' &&(
        <div className="outer-div">
            <span className="logoText">N A R K O</span>

                <button onClick={handleLogin} className="registerandloginbutton">{t('login')}</button>
            <button onClick={handleRegister} className="registerandloginbutton">{t('register')}</button>
        </div>)}

        {currentLoginStatus === 'login'}
        <div className="outer-div">
            <span className="logoText">N A R K O</span>

            <button className="registerandloginbutton">{t('login')}</button>
            <button className="registerandloginbutton">{t('register')}</button>
        </div>



        </body>
    );
}

export default StartPage;
