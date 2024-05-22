import './styles/index.scss';

import { FC, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { classNames } from './helpers/classNames/classNames';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const handleToggleTheme = () => toggleTheme(theme);
  const classList = classNames('app', {}, [theme]);

  return (
    <div className={classList}>
      <button onClick={handleToggleTheme}>Theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
