import '../components/i18n'

import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from "react-router-dom";

import '../stylesheets/topbar/topbar.css';
import '../stylesheets/topbar/topbar.css';
import '../stylesheets/Rules/leftbar/buttons.css'
import '../stylesheets/Rules/leftbar/leftbar.css'
import '../stylesheets/Rules/Build-grid.css'
import '../stylesheets/Rules/Rules-overview.css';
import '../stylesheets/general/general.css';
import '../stylesheets/homepage-widgets/small-widgets.css';
import '../stylesheets/homepage-widgets/big-widgets.css';
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