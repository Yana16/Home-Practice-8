import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import AuthLayout from './modules/AuthLayout/AuthLayout';
import Navbar from '../src/modules/Navbar/Navbar';
import UserRoutes from '../src/UserRoutes';

import store from '../src/redux/store';
import persistor from '../src/redux/store';

// import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AuthLayout> */}
        <BrowserRouter>
          <Navbar />
          <UserRoutes />
        </BrowserRouter>
        {/* </AuthLayout> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
