import { createSlice } from "@reduxjs/toolkit";

const footerPopupSlice = createSlice({
  name: "footerPopup",
  initialState: { isOpen: false, data: {} },
  reducers: {
    openFooterPopup: (state, action) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    closeFooterPopup: (state) => {
      state.isOpen = false;
      state.data = {};
    },
  },
});

export const { openFooterPopup, closeFooterPopup } = footerPopupSlice.actions;
export default footerPopupSlice.reducer;
