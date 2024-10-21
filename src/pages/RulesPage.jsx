import * as Imports from '../components/Imports';
import {ConstVariables} from "../components/ConstVariables";

function RulesPage() {
    const {
        darkMode,
        currentDiv,
    } = ConstVariables(); // Verwende den Hook hier


    return (
        <>
            <body className={`rules ${darkMode ? 'dark' : 'light'}`}>

            <Imports.Header/>
            <Imports.HiddenHeader/>

            <Imports.Rules
                darkMode={darkMode}
                currentDiv={currentDiv}
            />
            </body>
        </>
    );
}

export default RulesPage;

