import { useTranslation } from 'react-i18next';
import { i18nChunks } from 'shared/constants';

const MainPage = () => {
    const { t } = useTranslation(i18nChunks.MAIN_PAGE);

    return <div>{t('Главная страница')}</div>;
};

export default MainPage;
