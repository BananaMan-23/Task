import { createSlice } from "@reduxjs/toolkit";

const footerPopupSlice = createSlice({
  name: "footerPopup",
  initialState: {
    isOpen: false,
    data: {},
    selectedValues: { "Payment Timeout": "15 minutes" },
  },
  reducers: {
    openFooterPopup: (state, action) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    closeFooterPopup: (state) => {
      state.isOpen = false;
      state.data = {};
    },
    setSelectedValue: (state, action) => {
      const { title, value } = action.payload;
      state.selectedValues[title] = value;
    },
  },
});

export const { openFooterPopup, closeFooterPopup, setSelectedValue } =
  footerPopupSlice.actions;
export default footerPopupSlice.reducer;
