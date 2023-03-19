import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';

// import AuthLayout from './modules/AuthLayout/AuthLayout';
import Navbar from '../src/modules/Navbar/Navbar';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import RegisterPage from '../src/pages/RegisterPage/RegisterPage';

import store from '../src/redux/store';
import persistor from '../src/redux/store';

// import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AuthLayout> */}

        <div>
          <Navbar />
          <Suspense fallback={<p>...Loading page</p>}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* </AuthLayout> */}
            </Routes>
          </Suspense>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
