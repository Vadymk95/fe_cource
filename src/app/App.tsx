import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib';
import { Navbar, Sidebar } from 'widgets';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App: FC = () => {
    const { theme } = useTheme();
    const classList = classNames('app', {}, [theme]);

    return (
        <div className={classList}>
            <Suspense fallback="">
                <Navbar />
                <div className="page-container">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
