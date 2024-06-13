import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className = '' }) => {
    const { t, i18n } = useTranslation();
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

export default LangSwitcher;
