import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { i18nChunks } from 'shared/constants';
import { classNames } from 'shared/lib';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className = '' }) => {
    const NotFoundPageClassList = classNames(cls.NotFoundPage, {}, [className]);
    const { t } = useTranslation();

    return (
        <div className={NotFoundPageClassList}>
            <p>{t('Страница не найдена')}</p>
        </div>
    );
};

export default NotFoundPage;
