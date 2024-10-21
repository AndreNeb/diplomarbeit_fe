import '../components/i18n'

import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import RulesPage from './RulesPage';
import SupportPage from "./SupportPage";
import InfoPage from "./InfoPage";
import DocumentPage from "./DocumentPage";
import LogInOutPage from "./LogInOutPage";
import Home from "./Home";
import {DarkModeProvider} from "../components/DarkModeContext";


function App() {

    return (
        <DarkModeProvider>
        <Router>
            <>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/rulesPage" element={<RulesPage/>}/>
                    <Route path="/documentPage" element={<DocumentPage/>}/>
                    <Route path="/infoPage" element={<InfoPage/>}/>
                    <Route path="/supportPage" element={<SupportPage/>}/>
                    <Route path="/loginoutpage" element={<LogInOutPage/>}/>
                </Routes>

            </>

        </Router>
        </DarkModeProvider>
    );
}

export default App;