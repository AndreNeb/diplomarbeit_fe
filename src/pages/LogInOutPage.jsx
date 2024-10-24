import * as Imports from '../components/Imports';
import {ConstVariables} from '../components/ConstVariables';

function LogInOutPage() {
    const {
        btnText,
        t,
        isActive,
        handleSubmit,
    } = ConstVariables(); // Verwende den Hook hier

    return (

        <body className="general-log-field">
            <div className="general-inner-log-field">
                <span className="log-text">{t('log-text')}</span>


                <div className="field-container">


                    <div className="text-fields-container">
                        <input type="text" name="name" className="contact-inputs" placeholder={t('username')}
                               required/>
                        <input type="password" name="email" className="contact-inputs" placeholder={t('password')}
                               required/>
                    </div>


                    <div className="button-container">
                        <button type="submit" className={Imports.classNames('submit-button', {active: isActive})}>
                            <p>{btnText}</p>
                            <div className="check-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                            </div>
                        </button>
                    </div>

                </div>


            </div>
        </body>
    );
}

export default LogInOutPage;
