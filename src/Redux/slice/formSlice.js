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
    DataOutput(state, action) {
      console.log(state.data = action.payload)
    }
  },
});

export const { setFormData, clearFormData, DataOutput } = formSlice.actions;
export default formSlice.reducer;