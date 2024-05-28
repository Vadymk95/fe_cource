import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();
    const handleToggleTheme = () => toggleTheme(theme);
    const parentClassList = classNames(cls.ThemeSwitcher, {}, [className]);

    return (
        <Button className={parentClassList} onClick={handleToggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
