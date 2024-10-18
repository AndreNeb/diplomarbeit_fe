
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../languages/en.json';
import de from '../languages/de.json';

i18n
    .use(LanguageDetector) // Verwende den LanguageDetector um automatisch die Sprache zu erkennen
    .use(initReactI18next) // Verknüpfe i18next mit React
    .init({
        resources: {
            en: { translation: en },
            de: { translation: de },
        },
        fallbackLng: 'en', // Fallback-Sprache, falls keine erkannt wird
        interpolation: {
            escapeValue: false, // React verarbeitet XSS-Schutz von sich aus
        },
    });

export default i18n;
