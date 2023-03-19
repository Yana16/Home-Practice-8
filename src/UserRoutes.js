import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const RegisterPage = lazy(() =>
  import('../src/pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../src/pages/LoginPage/LoginPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
