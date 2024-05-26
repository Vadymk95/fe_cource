import { useTranslation } from 'react-i18next';
import { i18nChunks } from 'shared/constants';

const AboutPage = () => {
  const { t } = useTranslation(i18nChunks.ABOUT_PAGE);
  return <div>{t('О сайте')}</div>;
};

export default AboutPage;
