import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { i18nChunks } from 'shared/constants';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        lng: 'ru',
        debug: __IS_DEV__,
        ns: [
            i18nChunks.ABOUT_PAGE,
            i18nChunks.MAIN_PAGE,
            i18nChunks.NOT_FOUND_PAGE,
            i18nChunks.TRANSLATION,
        ],
        defaultNS: i18nChunks.TRANSLATION,

        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
