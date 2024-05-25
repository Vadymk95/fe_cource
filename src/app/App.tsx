import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const handleToggleTheme = () => toggleTheme(theme);
  const classList = classNames('app', {}, [theme]);

  return (
    <div className={classList}>
      <Navbar />
      <AppRouter />
      <button onClick={handleToggleTheme}>Theme</button>
    </div>
  );
};
