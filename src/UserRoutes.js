import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading page......</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
