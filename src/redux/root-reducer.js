import contactReducer from '../redux/contacts/contact-slice';
import filterReducer from '../redux/filter/filter-slice';
import authReducer from '../redux/auth/auth-slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  filter: filterReducer,
});
