// LoadingPage.js
import React from 'react';
import '../stylesheets/loadingpage/loadingpage.css'
import {ConstVariables} from '../components/ConstVariables';

const LoadingPage = () => {

    const {
        darkMode,
        t,
    } = ConstVariables(); // Verwende den Hook hier

    return (
        <body className={`loadingpage ${darkMode ? 'dark' : 'light'}`}>
        <div>
            <div className={`loading-text ${darkMode ? 'dark' : 'light'}`}>NARKO</div>
        </div>
        </body>
    );
};

export default LoadingPage;