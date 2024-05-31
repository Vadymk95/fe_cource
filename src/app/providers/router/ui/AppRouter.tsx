import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';
import { PageLoader } from 'widgets';

export const AppRouter = () => {
    const router = Object.values(routeConfig).map(({ element, path }) => (
        <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
        />
    ));

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{router}</Routes>
        </Suspense>
    );
};
