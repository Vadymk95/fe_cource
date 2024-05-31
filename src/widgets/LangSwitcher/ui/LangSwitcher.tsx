import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import cls from './LangSwitcher.module.scss';
import { i18nChunks } from 'shared/constants';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className = '' }) => {
    const { t, i18n } = useTranslation(i18nChunks.GENERAL);
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    const LangSwitcherClassList = classNames(cls.LangSwitcher, {}, [className]);

    return (
        <Button onClick={toggleLanguage} className={LangSwitcherClassList}>
            {t('Язык')}
        </Button>
    );
};
