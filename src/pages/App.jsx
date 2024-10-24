import React, {useEffect, useState} from 'react';
import '../components/i18n';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import RulesPage from './RulesPage';
import SupportPage from "./SupportPage";
import InfoPage from "./InfoPage";
import DocumentPage from "./DocumentPage";
import LogInOutPage from "./LogInOutPage";
import Home from "./Home";
import StartPage from "./StartPage";
import { DarkModeProvider } from "../components/DarkModeContext";
import LoadingPage from './LoadingPage'; // Importiere die Ladekomponente

const AppRoutes = () => {
    const location = useLocation(); // useLocation kann hier verwendet werden, da es innerhalb des Routers ist

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 850);

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <Routes>
                    <Route path="/" element={<StartPage />}/>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/rulesPage" element={<RulesPage />} />
                    <Route path="/documentPage" element={<DocumentPage />} />
                    <Route path="/infoPage" element={<InfoPage />} />
                    <Route path="/supportPage" element={<SupportPage />} />
                    <Route path="/loginoutpage" element={<LogInOutPage />} />
                </Routes>
            )}
        </>
    );
};

function App() {
    return (
        <DarkModeProvider>
            <Router>
                <AppRoutes />
            </Router>
        </DarkModeProvider>
    );
}

export default App;