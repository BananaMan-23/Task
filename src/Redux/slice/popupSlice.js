import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { isOpen: false, data: {} },
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.data = {};
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
