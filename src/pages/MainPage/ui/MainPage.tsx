import { useTranslation } from 'react-i18next';
import { i18nChunks } from 'shared/constants';

const MainPage = () => {
    const { t } = useTranslation(i18nChunks.MAIN_PAGE);

    return (
        <div>
            <p>{t('Главная страница')}</p>
        </div>
    );
};

export default MainPage;
