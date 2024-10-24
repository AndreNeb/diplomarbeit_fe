// LoadingPage.js
import React from 'react';
import '../stylesheets/loadingpage/loadingpage.css'
import {ConstVariables} from '../components/ConstVariables';

const LoadingPage = () => {

    const {
        darkMode,
    } = ConstVariables(); // Verwende den Hook hier

    return (
        <body className={`loadingpage ${darkMode ? 'dark' : 'light'}`}>
        <div>
            <div className={`loading-text ${darkMode ? 'dark' : 'light'}`}>N A R K O</div>
        </div>
        </body>
    );
};

export default LoadingPage;