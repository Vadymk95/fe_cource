import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, i18nChunks } from 'shared';
import { classNames } from 'shared/lib';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className = '' }) => {
    const { t } = useTranslation(i18nChunks.TRANSLATION);
    const PageErrorClassList = classNames(cls.PageError, {}, [className]);

    const reloadPage = () => location.reload();

    return (
        <div className={PageErrorClassList}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t('Вернуться на главную')}</Button>
        </div>
    );
};
