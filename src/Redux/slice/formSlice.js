import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: {},
  },
  reducers: {
    setFormData(state, action) {
      state.data = action.payload;
    },
    clearFormData(state) {
      state.data = {};
    },
  },
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;