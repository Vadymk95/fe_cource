import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Navbar, ThemeSwitcher } from 'widgets';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App: FC = () => {
  const { theme } = useTheme();
  const classList = classNames('app', {}, [theme]);

  return (
    <div className={classList}>
      <Navbar />
      <AppRouter />
      <ThemeSwitcher />
    </div>
  );
};
