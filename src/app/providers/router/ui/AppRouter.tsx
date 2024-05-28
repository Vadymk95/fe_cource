import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';

export const AppRouter = () => {
    const router = Object.values(routeConfig).map(({ element, path }) => (
        <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
        />
    ));

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>{router}</Routes>
        </Suspense>
    );
};
