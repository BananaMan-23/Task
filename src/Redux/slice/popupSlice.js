// popupSlice.js
import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpen: false,
    data: {},
    selectedValues: {
      "Crypto": "USDT",
      "Currency": "RUB",
      "Price Type": "Floating"
    }
  },
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.data = {};
    },
    setSelectedValue: (state, action) => {
      const { title, value } = action.payload;
      state.selectedValues[title] = value;
    }
  },
});

export const { openPopup, closePopup, setSelectedValue } = popupSlice.actions;
export default popupSlice.reducer;