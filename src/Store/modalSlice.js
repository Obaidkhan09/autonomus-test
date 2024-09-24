// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  content: {},
};

const modalSlice = createSlice({
  name: 'modalState',
  initialState,
  reducers: {
    setModalData: (state, action) => {
      state.isVisible= true;
      state.content= action.payload;
    },
    closeModal: (state) => {
      state.isVisible= initialState.isVisible;
      state.content= initialState.content;
    },
  },
});

export const { setModalData, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
