import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const handleToggleTheme = () => toggleTheme(theme);
  const classList = classNames('app', {}, [theme]);

  return (
    <div className={classList}>
      <button onClick={handleToggleTheme}>Theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
};
