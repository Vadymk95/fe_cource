import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
    const [collapsed, setCollapsed] = useState(false);
    const SidebarClassList = classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className]
    );
    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div data-testid="sidebar" className={SidebarClassList}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
