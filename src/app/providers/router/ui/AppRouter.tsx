import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
  const router = Object.values(routeConfig).map((route) => (
    <Route key={route.path} {...route} />
  ));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{router}</Routes>
    </Suspense>
  );
};
