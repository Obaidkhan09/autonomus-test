// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import modalSlice from './modalSlice';
import appListSlice from './appListSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    modalState: modalSlice,
    appData: appListSlice
  },
});

export default store;
