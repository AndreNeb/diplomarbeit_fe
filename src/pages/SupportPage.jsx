import * as Imports from '../components/Imports';
import {ConstVariables} from '../components/ConstVariables';

function SupportPage() {
    const {
        btnText,
        t,
        isActive,
        handleSubmit,
        darkMode,
        formStatus,
    } = ConstVariables(); // Verwende den Hook hier


    return (

        <body className={`support ${darkMode ? 'dark' : 'light'}`}>

        <Imports.Header/>
        <Imports.HiddenHeader/>
        <div className="general-container" style={{backgroundColor: darkMode ? "black": "rgba(250, 246, 240, 255)", transition: "background-color 1.1s ease"}}>
            <div className={`general-inner-container ${darkMode ? 'dark' : 'light'}`}>
                <span className={`text ${darkMode ? 'dark' : 'light'}`}>{t('support-text')}</span>
                <div className="field-container">

                    <form onSubmit={handleSubmit}>
                        <div className="text-fields-container">
                            <input type="text" name="name" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`} placeholder={t('name')}
                                   required/>
                            <input type="email" name="email" className={`contact-inputs ${darkMode ? 'dark' : 'light'}`} placeholder={t('email')}
                                   required/>
                            <textarea name="message" className={`contact-messages ${darkMode ? 'dark' : 'light'}`} placeholder={t('message')}
                                      required></textarea>
                        </div>


                        <div className="button-container">
                            <button type="submit" className={Imports.classNames('submit-button', darkMode ? 'dark' : 'light', {active: isActive})}>
                                <p>{btnText}</p>
                                <div className="check-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                        <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
        </body>

    );
}

export default SupportPage;