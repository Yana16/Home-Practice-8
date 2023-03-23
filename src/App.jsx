import { Provider } from 'react-redux';

import Navbar from '../src/modules/Navbar/Navbar';
import UserRoutes from '../src/UserRoutes';

import store from '../src/redux/store';

// import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />

      <UserRoutes />
    </Provider>
  );
};

export default App;
