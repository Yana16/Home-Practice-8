import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '../redux/root-reducer';

const store = configureStore({
  reducer: {
    auth: rootReducer,
  },
});

export default store;

// import contactReducer from '../redux/contacts/contact-slice';
// import filterReducer from '../redux/filter/filter-slice';
// import authReducer from '../redux/auth/auth-slice';
// import { combineReducers } from '@reduxjs/toolkit';

// export const rootReducer = combineReducers({
//   auth: authReducer,
//   contacts: contactReducer,
//   filter: filterReducer,
// });
