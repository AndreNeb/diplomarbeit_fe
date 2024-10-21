import * as Imports from '../components/Imports';
import {ConstVariables} from '../components/ConstVariables';

function Home() {
    const {
        darkMode,
        t,
    } = ConstVariables(); // Verwende den Hook hier


    return (

        <body className={`homepage ${darkMode ? 'dark' : 'light'}`} style={{
            backgroundColor: darkMode ? "" : "rgba(250, 246, 240, 255)",
            transition: "background-color 1.1s ease"
        }}>
        <Imports.Header/>
        <Imports.HiddenHeader/>

        <div className="small-widgets-outer-div">
            <div
                className={`general-small-widget-layout small-widget1 ${darkMode ? 'dark' : 'light'}`}
                style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget1-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{
                        color: darkMode ? "white" : "gray",
                        transition: "color 1.1s ease"
                    }}>{t('patient')}</div>
                    <div className="small-widgets-text-middle"
                         style={{color: darkMode ? "white" : "black", transition: "color 1.1s ease"}}>4.500
                    </div>
                    <div className="small-widgets-text-bottom" style={{
                        color: darkMode ? "white" : "#077507",
                        transition: "color 1.1s ease"
                    }}>&uarr; &#43;8,5 &#037;</div>
                </div>
                <div>
                    <img src={darkMode ? Imports.patientenBlack : Imports.patienten}
                         className="small-widgets-picture-layout"
                         alt="Patienten"/>
                </div>
            </div>
            <div className={`general-small-widget-layout small-widget2 ${darkMode ? 'dark' : 'light'}`}
                 style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget2-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{
                        color: darkMode ? "white" : "gray",
                        transition: "color 1.1s ease"
                    }}>{t('op-workload')}</div>
                    <div className="small-widgets-text-middle"
                         style={{color: darkMode ? "white" : "black", transition: "color 1.1s ease"}}>70 &#037;</div>
                    <div className="small-widgets-text-bottom"
                         style={{color: darkMode ? "white" : "#077507", transition: "color 1.1s ease"}}>8 /
                        9 {t('unavailable')}</div>
                </div>
                <div>
                    <img src={darkMode ? Imports.maskeBlack : Imports.maske} className="small-widgets-picture-layout"
                         alt="OP - Maske"/>
                </div>
            </div>
            <div className={`general-small-widget-layout small-widget3 ${darkMode ? 'dark' : 'light'}`}
                 style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget3-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{
                        color: darkMode ? "white" : "gray",
                        transition: "color 1.1s ease"
                    }}>{t('anesthesia')}</div>
                    <div className="small-widgets-text-middle"
                         style={{color: darkMode ? "white" : "black", transition: "color 1.1s ease"}}>400
                    </div>
                    <div className="small-widgets-text-bottom" style={{
                        color: darkMode ? "white" : "#077507",
                        transition: "color 1.1s ease"
                    }}>&darr; 4,5 &#037;</div>
                </div>
                <div>
                    <img src={darkMode ? Imports.spritzeBlack : Imports.spritze}
                         className="small-widgets-picture-layout"
                         alt="Spritze"/>
                </div>
            </div>
            <div className={`general-small-widget-layout small-widget4 ${darkMode ? 'dark' : 'light'}`}
                 style={{backgroundColor: darkMode ? "black" : "white", transition: "background-color 1.1s ease"}}>
                <div className="small-widgets-color small-widget4-color-patienten">
                    &nbsp;
                </div>
                <div className="small-widgets-text">
                    <div className="small-widgets-text-top" style={{
                        color: darkMode ? "white" : "gray",
                        transition: "color 1.1s ease"
                    }}>{t('waiting-room')}</div>
                    <div className="small-widgets-text-middle" style={{
                        color: darkMode ? "white" : "black",
                        transition: "color 1.1s ease"
                    }}>9 {t('patients')}</div>
                    <div className="small-widgets-text-bottom" style={{
                        color: darkMode ? "white" : "#077507",
                        transition: "color 1.1s ease"
                    }}>{t('waiting-room-usage')}</div>
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
            <div className={`big-widget ${darkMode ? 'dark' : 'light'}`}>Arbeitszeitersparnis</div>
        </div>

        </body>
    );
}

export default Home;
