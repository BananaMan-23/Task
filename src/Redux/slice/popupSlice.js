import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpen: false,
    data: null,
  },
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.data = null;
    },
    updateValue: (state, action) => {
      if (state.data) {
        state.data.value = action.payload;
      }
    },
  },
});

export const { openPopup, closePopup, updateValue } = popupSlice.actions;
export default popupSlice.reducer;
