import { FC } from 'react';
import { RoutePath } from 'shared/config';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} to={RoutePath.main}>
          Main
        </AppLink>
        <AppLink to={RoutePath.about}>About</AppLink>
      </div>
    </div>
  );
};
